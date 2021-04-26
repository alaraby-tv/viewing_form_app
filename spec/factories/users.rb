FactoryBot.define do
  factory :user do
    first_name { "John" }
    last_name { "Smith" }
    sequence(:email) { |n| "jsmith#{n}@alaraby.tv" }
    password { "somepassword" }
    password_confirmation { "somepassword" }
    confirmation_token { SecureRandom.hex(16) }
    confirmation_sent_at { DateTime.now - 10 }
    confirmed_at { DateTime.now - 5 }
  end
end
