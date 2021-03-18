require 'rails_helper'

RSpec.describe "parts/show", type: :view do
  before(:each) do
    @part = assign(:part, Part.create!(
      in: "In",
      out: "Out",
      duration: "Duration",
      notes: "MyText",
      viewing_form: nil
    ))
  end

  it "renders attributes in <p>" do
    render
    expect(rendered).to match(/In/)
    expect(rendered).to match(/Out/)
    expect(rendered).to match(/Duration/)
    expect(rendered).to match(/MyText/)
    expect(rendered).to match(//)
  end
end
