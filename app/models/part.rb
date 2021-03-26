class Part < ApplicationRecord
  belongs_to :viewing_form, inverse_of: :parts

  validates_format_of :start, :finish, :duration, with: /^\d{2}:\d{2}:\d{2}:([01]\d|2[0-4])$/, on: :create, multiline: true
end
