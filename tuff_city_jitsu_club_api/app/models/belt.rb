class Belt < ApplicationRecord
  # Is this a useful one for this model?
  has_many :belt_grades, dependent: :destroy
  
  validates :colour, presence: true
end