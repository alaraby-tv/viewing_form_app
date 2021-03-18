require 'rails_helper'

RSpec.describe "parts/index", type: :view do
  before(:each) do
    assign(:parts, [
      Part.create!(
        in: "In",
        out: "Out",
        duration: "Duration",
        notes: "MyText",
        viewing_form: nil
      ),
      Part.create!(
        in: "In",
        out: "Out",
        duration: "Duration",
        notes: "MyText",
        viewing_form: nil
      )
    ])
  end

  it "renders a list of parts" do
    render
    assert_select "tr>td", text: "In".to_s, count: 2
    assert_select "tr>td", text: "Out".to_s, count: 2
    assert_select "tr>td", text: "Duration".to_s, count: 2
    assert_select "tr>td", text: "MyText".to_s, count: 2
    assert_select "tr>td", text: nil.to_s, count: 2
  end
end
