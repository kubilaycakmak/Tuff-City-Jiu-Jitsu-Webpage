class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :first_name
      t.string :last_name
      t.string :email, index: {unique: true}
      t.string :password_digest
      t.boolean :is_admin, default: false
      t.boolean :is_instructor, default: false # Instructors, like students, can see up to the grade above them for syllabus, but only the admin (i.e. me) can see the full syllabus.
      # A fully fledged instructor gets the full syllabus, and full privileges, we will get more of these instructors as they grade upwards.
      t.string :belt_grade_id # foreign key linking to another table like products vs reviews, one to many
      t.string :qualifications # user table joins through qualifications table, using a model and controllers for qualifications
      t.boolean :dues_paid
      t.boolean :owns_gi
      t.string :training_bubble_id # somehow links to other users in the same bubble i.e. with a foreign key and one to many relationship

      # add_index :users, :email, unique: true
      # Check, is line 17 the same as line 6?


      t.timestamps
    end
  end
end
