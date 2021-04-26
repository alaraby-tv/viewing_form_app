require 'rails_helper'

RSpec.describe "viewing_forms/show", type: :view do
  before(:each) do
    @viewing_form = FactoryBot.create(:viewing_form)
  end

  it "renders attributes" do
    render
    expect(rendered).to match(/Programme title/)
    expect(rendered).to match(/Aspect ratio/)
    expect(rendered).to match(/Programme id/)
    expect(rendered).to match(/No of parts/)
  end
end
