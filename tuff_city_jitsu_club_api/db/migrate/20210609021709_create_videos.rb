class CreateVideos < ActiveRecord::Migration[6.1]
  def change
    create_table :videos do |t|
      t.string :canadian_version
      t.references :syllabuses, null:false, foreign_key:true
      t.string :uk_version # Include this, if different, only for instructor users to see

      t.timestamps
    end
  end
end
