class TechniqueType < ApplicationRecord
    belongs_to :syllabus
    has_many :techniques
    has_many :belts

    validates :category, :sub_category, presence: true
end