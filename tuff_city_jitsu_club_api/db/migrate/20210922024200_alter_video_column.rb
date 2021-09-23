class AlterVideoColumn < ActiveRecord::Migration[6.1]
  def change
    add_column :techniques, :videourls, :integer, array: true, default: []
  end
end