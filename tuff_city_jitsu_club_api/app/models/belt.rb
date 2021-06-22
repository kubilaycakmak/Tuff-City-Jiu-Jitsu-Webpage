class Belt < ApplicationRecord
  has_many :belt_grades, dependent: :destroy
  has_many :instructor_qualifications
  has_many :qualifications
  has_many :techniques
  # belongs_to :syllabus
  
  validates :colour, presence: true
end