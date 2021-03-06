class CreateViewingForms < ActiveRecord::Migration[5.2]
  def change
    create_table :viewing_forms do |t|
      t.references :user, foreign_key: true
      t.string :program_title
      t.timestamp :ingest_date
      t.string :aspect_ratio
      t.string :program_id
      t.string :contact_number
      t.timestamp :tx_date
      t.integer :number_of_parts

      t.timestamps
    end

    add_index :viewing_forms, :program_title
  end
end
