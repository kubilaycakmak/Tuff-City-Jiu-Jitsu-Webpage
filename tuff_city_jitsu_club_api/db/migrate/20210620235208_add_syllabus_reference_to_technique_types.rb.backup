class AddSyllabusReferenceToTechniqueTypes < ActiveRecord::Migration[6.1]
  def change
    add_reference :technique_types, :syllabus, null: false, foreign_key: true
  end
end