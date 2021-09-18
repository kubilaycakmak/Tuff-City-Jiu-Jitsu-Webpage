class TechniqueType < ApplicationRecord
    belongs_to :syllabus
    has_many :techniques
    # Note: had to write optional: true to force the following line to work. Is that bad practice?
    belongs_to :belt #, optional: true #has_many might break it but we need a many to many rel so is there another way?
    validates :category, presence: true
end