class ViewingForm < ApplicationRecord
  belongs_to :user
  has_many :parts
  accepts_nested_attributes_for :parts, allow_destroy: true, reject_if: proc { |att| att['duration'].blank? }

  validates_presence_of :program_title, :ingest_date, :tx_date, :program_id, :parts
end
