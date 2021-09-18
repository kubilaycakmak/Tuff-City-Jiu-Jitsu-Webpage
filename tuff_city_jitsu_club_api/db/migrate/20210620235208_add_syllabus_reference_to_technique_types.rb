class AddSyllabusReferenceToTechniqueTypes < ActiveRecord::Migration[6.1]
  def change
    add_reference :technique_types, :syllabus, null: false, foreign_key: true
  end
end

# Don't think the technique types need a reference to syllabus so have made this a .backup file