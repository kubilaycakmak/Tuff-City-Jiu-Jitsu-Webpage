class AddTrainingBubblesToUser < ActiveRecord::Migration[6.1]
  def change
      t.references :user, null:false, foreign_key:true
  end
end