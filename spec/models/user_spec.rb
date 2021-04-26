require 'rails_helper'

RSpec.describe User, type: :model do
  it { should have_many(:viewing_forms) }
  it { should validate_presence_of(:first_name) }
  it { should validate_presence_of(:last_name) }
  it { should validate_presence_of(:email) }
  it { should validate_presence_of(:password) }

  it "concats firt and last name" do
    user = FactoryBot.create(:user, first_name: "Jan", last_name: "Smith")
    expect(user.full_name).to eq("Jan Smith")
  end
end
