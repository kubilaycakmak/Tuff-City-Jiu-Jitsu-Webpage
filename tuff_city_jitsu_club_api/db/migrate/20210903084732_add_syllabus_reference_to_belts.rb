class AddSyllabusReferenceToBelts < ActiveRecord::Migration[6.1]
  def change
    add_reference :belts, :syllabus, foreign_key: true
  end
end
# This makes more sense than assigning a belt id to a syllabus; perhaps down the line we can compare belts (and belt grades) to each other to check which syllabus they know