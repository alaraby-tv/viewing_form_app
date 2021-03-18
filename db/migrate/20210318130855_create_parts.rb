class CreateParts < ActiveRecord::Migration[5.2]
  def change
    create_table :parts do |t|
      t.string :in
      t.string :out
      t.string :duration
      t.text :notes
      t.references :viewing_form, foreign_key: true

      t.timestamps
    end
  end
end
