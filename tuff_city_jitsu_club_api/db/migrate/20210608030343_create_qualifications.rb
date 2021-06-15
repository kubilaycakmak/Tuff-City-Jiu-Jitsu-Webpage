class CreateQualifications < ActiveRecord::Migration[6.1]
  def change
    create_table :qualifications do |t|
      t.string :qualifications
      # The following three attributes relate to first aid qualification expiry dates
      t.datetime :achieved_at
      t.boolean :does_expire
      t.datetime :expires_at

      t.references :user, null:false, foreign_key:true
      t.references :syllabuse, null:false, foreign_key:true

      t.timestamps
    end
  end
end