class ViewingForm < ApplicationRecord
  belongs_to :user
  has_many :parts, inverse_of: :viewing_form
  accepts_nested_attributes_for :parts, reject_if: :reject_parts

  def reject_parts(attributes)
    !attributes['duration'] == /^\d{2}:\d{2}:\d{2}:([01]\d|2[0-4])$/
  end

  validates_presence_of :program_title, :ingest_date, :tx_date, :program_id, :contact_number, :parts
end
