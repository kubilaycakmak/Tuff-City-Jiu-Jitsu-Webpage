class CreateUserQualification < ActiveRecord::Migration[6.1]
  def change
    create_table :userqualifications do |t|
      t.references :user, null:false, foreign_key:true
      t.references :qualification, null:false, foreign_key:true

      t.timestamps
    end
  end
end
