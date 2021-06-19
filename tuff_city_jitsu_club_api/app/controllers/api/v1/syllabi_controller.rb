class Api::V1::SyllabusController < Api::ApplicationController
    before_action :authenticate_user!, except: [:index, :show]
    before_action :find_syllabus, only: [:show, :edit, :update, :destroy]
    
    rescue_from(ActiveRecord:: RecordNotFound, with: :record_not_found)
    rescue_from(ActiveRecord:: RecordInvalid, with: :record_invalid)

    # Need to carefully consider how Rails handles the word "syllabus" and it's plural
    def index
        syllabi = Syllabus.order(created_at: :desc)
        render(json: syllabi, each_serializer: SyllabusCollectionSerializer) # Find out what should be in this serializer
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