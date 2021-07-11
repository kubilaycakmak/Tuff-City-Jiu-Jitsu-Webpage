class BeltGrade < ApplicationRecord
    belongs_to :user
    belongs_to :belt
    has_many :instructor_qualifications
    has_many :techniques
end