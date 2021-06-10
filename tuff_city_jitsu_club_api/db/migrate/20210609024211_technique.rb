class Technique < ActiveRecord::Migration[6.1]
  def change
    create_table :techniques do |t|
       t.string :description
    end
  end
end