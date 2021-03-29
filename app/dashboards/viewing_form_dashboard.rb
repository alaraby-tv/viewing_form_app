require "administrate/base_dashboard"

class ViewingFormDashboard < Administrate::BaseDashboard
  # ATTRIBUTE_TYPES
  # a hash that describes the type of each of the model's fields.
  #
  # Each different type represents an Administrate::Field object,
  # which determines how the attribute is displayed
  # on pages throughout the dashboard.
  ATTRIBUTE_TYPES = {
    user: Field::BelongsTo,
    parts: Field::HasMany,
    id: Field::Number,
    program_title: Field::String,
    ingest_date: Field::DateTime,
    aspect_ratio: Field::String,
    program_id: Field::String,
    contact_number: Field::String,
    tx_date: Field::DateTime,
    number_of_parts: Field::Number,
    created_at: Field::DateTime,
    updated_at: Field::DateTime,
  }.freeze

  # COLLECTION_ATTRIBUTES
  # an array of attributes that will be displayed on the model's index page.
  #
  # By default, it's limited to four items to reduce clutter on index pages.
  # Feel free to add, remove, or rearrange items.
  COLLECTION_ATTRIBUTES = %i[
  user
  id
  program_title
  parts
  created_at
  ].freeze

  # SHOW_PAGE_ATTRIBUTES
  # an array of attributes that will be displayed on the model's show page.
  SHOW_PAGE_ATTRIBUTES = %i[
  user
  id
  program_title
  ingest_date
  aspect_ratio
  program_id
  contact_number
  tx_date
  number_of_parts
  parts
  created_at
  updated_at
  ].freeze

  # FORM_ATTRIBUTES
  # an array of attributes that will be displayed
  # on the model's form (`new` and `edit`) pages.
  FORM_ATTRIBUTES = %i[
  user
  parts
  program_title
  ingest_date
  aspect_ratio
  program_id
  contact_number
  tx_date
  number_of_parts
  ].freeze

  # COLLECTION_FILTERS
  # a hash that defines filters that can be used while searching via the search
  # field of the dashboard.
  #
  # For example to add an option to search for open resources by typing "open:"
  # in the search field:
  #
  #   COLLECTION_FILTERS = {
  #     open: ->(resources) { resources.where(open: true) }
  #   }.freeze
  COLLECTION_FILTERS = {}.freeze

  # Overwrite this method to customize how viewing forms are displayed
  # across all pages of the admin dashboard.
  #
  def display_resource(viewing_form)
    "ViewingForm #{viewing_form.id}"
  end
end
