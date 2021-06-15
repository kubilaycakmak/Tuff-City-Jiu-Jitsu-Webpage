class Qualification < ApplicationRecord
    belongs_to :user
    before_save :capitalize_title
      
    private
    
    def capitalize_title
      self.title.capitalize!
    end
end