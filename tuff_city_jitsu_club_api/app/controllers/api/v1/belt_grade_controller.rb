class Api::V1::BeltGradeController < Api::ApplicationController

    before_action :authenticate_user!, except: [:index, :show]
    before_action :find_beltgrade, only: [:show, :edit, :update, :destroy]
   
    def index
        beltgrades = BeltGrade.order(created_at: :desc)
        # Can we have it so that only the current belt is shown?
        render(json: beltgrades, each_serializer: BeltGradeCollectionSerializer)
        # But do we need a serializer for this?
    end 

    def create
        beltgrade = BeltGrade.new beltgrade_params
        beltgrade.user = current_user
        beltgrade.save!
        render json: { id: beltgrade.id }
    end

    def show
        if @beltgrade
        render(
            json: @beltgrade,
            # include: [ :author, {bids: [ :author]} ]
            # Is there anything to implement here?
        )
        else
            render(json: {error: "Grade Not Found"})
        end
    end

    def destroy
        @beltgrade.destroy
        render(json: { status: 200 }, status: 200)
    end

    def edit
    end

    def update
        if @beltgrade.update beltgrade_params
            render json: { id: @beltgrade.id }
        else
            render(
                json: { errors: beltgrade.errors },
                status: 422 # Unprocessable Entity
            )
        end
    end

    private

    def beltgrade_params
        params.require(:beltgrade).permit(:amount)
    end

    def find_beltgrade
        @beltgrade ||= BeltGrade.find params[Id]
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
                type: error.class.to_s
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