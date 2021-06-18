class AddQualifcationsToInstructorQualifcations < ActiveRecord::Migration[6.1]
  def change
    add_reference :instructor_qualifications, :qualifications, null: false, foreign_key: true
  end
end