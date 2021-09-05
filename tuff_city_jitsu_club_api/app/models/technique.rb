class Technique < ApplicationRecord
    before_save :capitalize_summary
    # Is optional: true best practice?
    #belongs_to :belt #, optional: true
    belongs_to :belt_grade, optional: true # Think about whether this is needed e.g. for users only seeing certain amount of syllabus
    # belongs_to :syllabus
    belongs_to :technique_type # , optional: true
    # has_many :videos
    

    validates :summary, uniqueness: true, presence: true 

    private
    
    def capitalize_summary
      self.summary.capitalize!
    end

    def all_techniques
      
    end
end