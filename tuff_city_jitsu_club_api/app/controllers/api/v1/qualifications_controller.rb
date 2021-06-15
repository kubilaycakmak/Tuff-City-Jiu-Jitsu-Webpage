class Api::V1::QualificationsController < Api::ApplicationController
    before_action :authenticate_user!, except: [:index, :show]
    before_action :find_qualification, only: [:show, :edit, :update, :destroy]
   
    def index
        qualifications = Qualification.order(created_at: :desc)
        render(json: qualifications, each_serializer: QualificationSerializer)
    end 

    def create
        qualification = Qualification.new qualification_params
        qualification.user = current_user
        qualification.save!
        render json: { id: qualification.id }
    end

    def show
        if @qualification
        render(
            json: @qualification
        )
        else
            render(json: {error: "Qualification Not Found"})
        end
    end

    def destroy
        @qualification.destroy
        render(json: { status: 200 }, status: 200)
    end

    def edit
    end

    def update
        if @qualification.update qualification_params
            render json: { id: @qualification.id }
        else
            render(
                json: { errors: qualification.errors },
                status: 422 # Unprocessable Entity
            )
        end
    end

    private

    def qualification_params
        params.require(:qualification).permit(:amount)
    end

    def find_qualification
        @qualification ||= Qualification.find params[Id]
    end

    def record_not_found
        render(
            json: { status:422, errors: {msg: "Record Not Found"} },
            status: 422
        )
    end

    def record_invalid(error)

        invalid_record = error.record_not_found
        errors = invalid_record.errors.map do |field, message|
            {
                type: error.class.to_s,
                record_type: invalid_record.class.to_s,
                field: field,
                message: message
            }
        end
        render(
            json: { status: 422, erros:errors }
        )
    end
end