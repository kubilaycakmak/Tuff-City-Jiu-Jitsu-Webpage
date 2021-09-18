class AddBeltReferenceToTechniques < ActiveRecord::Migration[6.1]
  def change
    add_reference :techniques, :belt, null: false, foreign_key: true
  end
end

