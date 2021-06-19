class AddQualificationReferenceToInstructorQualifications < ActiveRecord::Migration[6.1]
  def change
    add_reference :instructor_qualifications, :qualification, null: false, foreign_key: true
  end
end