require 'rails_helper'

RSpec.describe Part, type: :model do
  invalid_time_codes = ["some value", "123456", "@yjanime12", "12:12", 123]
  it { should allow_value("00:00:00:00").for(:start) }
  it { should_not allow_value(invalid_time_codes.sample).for(:start) }
  it { should allow_value("00:00:00:00").for(:finish) }
  it { should_not allow_value(invalid_time_codes.sample).for(:finish) }
  it { should allow_value("00:00:00:00").for(:duration) }
  it { should_not allow_value(invalid_time_codes.sample).for(:duration) }
  it { should belong_to(:viewing_form) }
  it { should validate_presence_of(:start) }
  it { should validate_presence_of(:finish) }
  it { should validate_presence_of(:duration) }
end
