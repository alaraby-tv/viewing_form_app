require 'rails_helper'

RSpec.describe ViewingForm, type: :model do
  it { should have_many(:parts) }
  it { should belong_to(:user) }
  it { should validate_presence_of(:program_title) }
  it { should validate_presence_of(:ingest_date) }
  it { should validate_presence_of(:tx_date) }
  it { should validate_presence_of(:program_id) }
  it { should validate_presence_of(:contact_number) }
  it { should accept_nested_attributes_for(:parts) }
end
