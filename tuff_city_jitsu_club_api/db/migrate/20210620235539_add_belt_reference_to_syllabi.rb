class AddBeltReferenceToSyllabi < ActiveRecord::Migration[6.1]
  def change
    add_reference :syllabi, :belt, null: false, foreign_key: true
  end
end