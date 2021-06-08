class CreateSyllabuses < ActiveRecord::Migration[6.1]
  def change
    create_table :syllabuses do |t|
      t.string :technique
      t.boolean :is_different
      t.string :difference_content


      t.timestamps
    end
  end
end
