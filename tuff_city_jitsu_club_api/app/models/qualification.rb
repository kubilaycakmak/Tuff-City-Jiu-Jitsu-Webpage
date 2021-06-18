class Qualification < ApplicationRecord
    before_save :capitalize_level
      
    private
    
    def capitalize_level
      self.level.capitalize!
    end
end