class CreateInstructorQualifications < ActiveRecord::Migration[6.1]
  def change
    create_table :instructor_qualifications do |t|
      t.string :instructor_qualifications
      t.datetime :achieved_at

      # t.references :user, null:false, foreign_key:true
      t.timestamps
    end
  end
end