class AddBeltReferenceToTechniqueTypes < ActiveRecord::Migration[6.1]
  def change
    add_reference :technique_types, :belt, foreign_key: true
  end
end

# Don't think the technique types need a reference to belts so have made this a .backup file