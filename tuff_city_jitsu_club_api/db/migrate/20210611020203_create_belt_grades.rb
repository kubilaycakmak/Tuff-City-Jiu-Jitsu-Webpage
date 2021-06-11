class CreateBeltGrades < ActiveRecord::Migration[6.1]
  def change
    create_table :belt_grades do |t|
      t.references :user, null:false, foreign_key:true
      t.references :belt, null:false, foreign_key:true

      t.timestamps
    end
  end
end