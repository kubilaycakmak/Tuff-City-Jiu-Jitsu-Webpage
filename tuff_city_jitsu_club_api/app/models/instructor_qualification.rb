class InstructorQualification < ApplicationRecord
    belongs_to :user
    belongs_to :belt_grades
end