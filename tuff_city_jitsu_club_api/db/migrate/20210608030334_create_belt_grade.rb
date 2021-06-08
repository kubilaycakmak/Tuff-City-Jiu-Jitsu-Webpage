class CreateBeltGrade < ActiveRecord::Migration[6.1]
  def change
    create_table :belt_grades do |t|
      t.string :colour
      t.references :user, null:false, foreign_key:true
      t.references :syllabuses, null:false, foreign_key:true

      t.timestamps
    end
  end
end
