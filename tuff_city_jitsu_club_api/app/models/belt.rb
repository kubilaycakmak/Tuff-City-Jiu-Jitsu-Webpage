class Belt < ApplicationRecord
  # Is this a useful one for this model?
  has_many :belt_grades, dependent: :destroy
  has_many :instructor_qualifications
  has_many :qualifications
  
  validates :colour, presence: true
end