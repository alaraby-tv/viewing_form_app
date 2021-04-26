FactoryBot.define do
  factory :part do
    start { "00:00:00:00" }
    finish { "00:12:23:21" }
    duration { "00:12:23:21" }
    notes { "My Note" }
  end
end
