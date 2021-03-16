require 'rails_helper'

RSpec.describe "viewing_forms/index", type: :view do
  before(:each) do
    assign(:viewing_forms, [
      ViewingForm.create!(
        user: nil,
        program_title: "Program Title",
        aspect_ratio: "Aspect Ratio",
        program_id: "Program",
        number_of_parts: 2
      ),
      ViewingForm.create!(
        user: nil,
        program_title: "Program Title",
        aspect_ratio: "Aspect Ratio",
        program_id: "Program",
        number_of_parts: 2
      )
    ])
  end

  it "renders a list of viewing_forms" do
    render
    assert_select "tr>td", text: nil.to_s, count: 2
    assert_select "tr>td", text: "Program Title".to_s, count: 2
    assert_select "tr>td", text: "Aspect Ratio".to_s, count: 2
    assert_select "tr>td", text: "Program".to_s, count: 2
    assert_select "tr>td", text: 2.to_s, count: 2
  end
end
