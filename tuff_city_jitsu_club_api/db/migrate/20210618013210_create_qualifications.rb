class CreateQualifications < ActiveRecord::Migration[6.1]
  def change
    create_table :qualifications do |t|
      t.string :level
      t.references :belt, null:false, foreign_key:true

      t.timestamps
    end
  end
end