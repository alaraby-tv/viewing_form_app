FactoryBot.define do
  factory :viewing_form do
    user { FactoryBot.create(:user) }
    program_title { "Programme Title" }
    ingest_date { "2021-03-15 17:35:47" }
    aspect_ratio { "16:9" }
    program_id { "ID-TEST-11" }
    tx_date { "2021-03-15 17:35:47" }
    contact_number { "07755443321" }
    number_of_parts { 1 }
    parts_attributes { [ FactoryBot.attributes_for(:part) ] }
  end
end
