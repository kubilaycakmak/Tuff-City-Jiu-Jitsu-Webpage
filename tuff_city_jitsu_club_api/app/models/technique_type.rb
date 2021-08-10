class TechniqueType < ApplicationRecord
    belongs_to :syllabus
    has_many :techniques
    belongs_to :belt

    validates :category, :sub_category, presence: true
end