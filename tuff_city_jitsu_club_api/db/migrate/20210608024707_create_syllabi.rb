class CreateSyllabi < ActiveRecord::Migration[6.1]
  def change
    create_table :syllabi do |t|
      t.string :country

      t.timestamps
    end
  end
end