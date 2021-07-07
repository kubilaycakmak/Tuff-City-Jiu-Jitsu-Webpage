class TechniqueType < ApplicationRecord
    belongs_to :syllabus
    has_many :techniques

    validates :category, :sub_category, presence: true
end