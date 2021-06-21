class CreateTechniqueTypes < ActiveRecord::Migration[6.1]
  def change
    create_table :technique_types do |t|
      t.string :category
      t.string :sub_category

      t.timestamps
    end
  end
end