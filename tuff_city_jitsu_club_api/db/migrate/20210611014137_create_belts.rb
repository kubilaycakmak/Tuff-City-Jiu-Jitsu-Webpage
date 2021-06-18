class CreateBelts < ActiveRecord::Migration[6.1]
  def change
    create_table :belts do |t|
      t.string :colour
      # t.references :user, null:false, foreign_key:true
      # t.references :syllabuse, null:false, foreign_key:true

      t.timestamps
    end
  end
end