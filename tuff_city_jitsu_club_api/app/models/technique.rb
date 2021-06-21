class Technique < ApplicationRecord
    before_save :capitalize_summary
    belongs_to :belt
    # belongs_to :syllabus
    belongs_to :technique_type
    has_many :videos
    
    private
    
    def capitalize_summary
      self.summary.capitalize!
    end
end