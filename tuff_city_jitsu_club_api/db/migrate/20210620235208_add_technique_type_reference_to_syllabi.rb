class AddTechniqueTypeReferenceToSyllabi < ActiveRecord::Migration[6.1]
  def change
    add_reference :syllabi, :technique_type, null: false, foreign_key: true
  end
end