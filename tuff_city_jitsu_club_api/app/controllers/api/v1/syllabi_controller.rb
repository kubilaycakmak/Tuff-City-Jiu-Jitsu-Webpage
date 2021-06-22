class Api::V1::SyllabiController < Api::ApplicationController
    before_action :authenticate_user!, except: [:index, :show]
    before_action :find_syllabus, only: [:show, :edit, :update, :destroy]
    
    rescue_from(ActiveRecord:: RecordNotFound, with: :record_not_found)
    rescue_from(ActiveRecord:: RecordInvalid, with: :record_invalid)

    # Note- have instructed the initializer "inflection" file about the proper plural form of syllabus

    def index
        syllabi = Syllabus.order(belt_id: :asc) # This should order the pages by yellow(7), orange(6), green(5) etc.
        render(json: syllabi, each_serializer: SyllabusSerializer) # Find out what should be in this serializer
    end

    def create
        syllabus = Syllabus.new syllabus_params
        syllabus.user = current_user
        syllabus.save!
        render json: { id: syllabus.id }
    end

    def show
        if @syllabus
        render(
            json: @syllabus,
            include: [ :author, {bids: [ :author]} ] # replace with techniques and technique types
        )
        else
            render(json: {error: "Syllabus Not Found"})
        end
    end

    def destroy
        @syllabus.destroy
        render(json: { status: 200 }, status: 200)
    end

    def edit
    end

    def update
        if @syllabus.update syllabus_params
            render json: { id: @syllabus.id }
        else
            render(
                json: { errors: syllabus.errors },
                status: 422 # Unprocessable Entity
            )
        end
    end

    private 

    def syllabus_params
        params.require(:syllabus)
        .permit( # Replace these as appropriate
            :title,
            :description,
            :end_date,
            :reserve_price
        )
    end
    
    def find_syllabus
        @syllabus ||= Syllabus.find params[:id]
    end

    def record_not_found
        render(
            json: { status: 422, errors: {msg: 'Record Not Found'}},
            status: 422
        )
    end
    
    def record_invalid(error) 
        invalid_record = error.record 
        errors = invalid_record.errors.map do |field, message|
        {
            type: error.class.to_s, 
            record_type: invalid_record.class.to_s,
            field: field,
            message: message
        }
        end
        render(
            json: { status: 422, errors: errors }
        )
    end

end