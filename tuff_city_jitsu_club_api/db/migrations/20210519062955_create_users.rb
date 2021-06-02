class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :first_name
      t.string :last_name
      t.string :email, index: {unique: true}
      t.string :password_digest
      t.boolean :is_admin
      t.boolean :is_moderator # or alternatively (and probably better approach), use roles table: instructors, moderator, treasurer, social secretary, stuff like that
      t.string :belt_grade_id # foreign key linking to another table like products vs reviews, one to many
      t.string :qualifications # user table joins through qualifications table, using a model and controllers for qualifications
      t.boolean :dues_paid
      t.boolean :owns_gi
      t.string :training_bubble_id # somehow links to other users in the same bubble i.e. with a foreign key and one to many relationship

      # Instead of t.string it should probably be more like 
      t.bigint "user_id"
      t.index ["user_id"], name: "index_belt_grade_on_user_id"

      # Make class table (with dates and times) and attendance table, and users classes table as an intermediary between users and classes,
      # then use that to figure out which students are in which classes, with many to many relations, this can replace spreadsheet
      # Try and find a free admin digital signature gem/npm dep for waivers.

      # Heroku might not be sufficient for data protection concerns- instead use AWS (pay for your usage fee, cheap for a dozen or so users) or Azure. Do research on privacy concerns

      # Make this repo private for the sake of user info, Rails API Masterkey etc.

      t.timestamps
    end
  end
end
