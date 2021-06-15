class BeltGrade < ApplicationRecord
    belongs_to :user
    belongs_to :belt
    
    # Perhaps a validation that only one belt grade is present at a time would be useful?
end