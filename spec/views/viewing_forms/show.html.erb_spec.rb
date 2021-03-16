require 'rails_helper'

RSpec.describe "viewing_forms/show", type: :view do
  before(:each) do
    @viewing_form = assign(:viewing_form, ViewingForm.create!(
      user: nil,
      program_title: "Program Title",
      aspect_ratio: "Aspect Ratio",
      program_id: "Program",
      number_of_parts: 2
    ))
  end

  it "renders attributes in <p>" do
    render
    expect(rendered).to match(//)
    expect(rendered).to match(/Program Title/)
    expect(rendered).to match(/Aspect Ratio/)
    expect(rendered).to match(/Program/)
    expect(rendered).to match(/2/)
  end
end
