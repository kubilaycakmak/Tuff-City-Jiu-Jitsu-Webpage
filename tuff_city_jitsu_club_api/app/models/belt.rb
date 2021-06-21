class Belt < ApplicationRecord
  has_many :belt_grades, dependent: :destroy
  has_many :instructor_qualifications
  has_many :qualifications
  # belongs_to :syllabus
  
  validates :colour, presence: true
end