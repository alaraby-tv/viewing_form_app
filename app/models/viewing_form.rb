class ViewingForm < ApplicationRecord
  belongs_to :user
  has_many :parts
  accepts_attributes_for :parts
end
