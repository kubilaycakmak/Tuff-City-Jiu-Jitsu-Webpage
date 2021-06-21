class TechniqueType < ApplicationRecord
    belongs_to :syllabus
    has_many :techniques
end