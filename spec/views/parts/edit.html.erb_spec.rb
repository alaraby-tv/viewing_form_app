require 'rails_helper'

RSpec.describe "parts/edit", type: :view do
  before(:each) do
    @part = assign(:part, Part.create!(
      in: "MyString",
      out: "MyString",
      duration: "MyString",
      notes: "MyText",
      viewing_form: nil
    ))
  end

  it "renders the edit part form" do
    render

    assert_select "form[action=?][method=?]", part_path(@part), "post" do

      assert_select "input[name=?]", "part[in]"

      assert_select "input[name=?]", "part[out]"

      assert_select "input[name=?]", "part[duration]"

      assert_select "textarea[name=?]", "part[notes]"

      assert_select "input[name=?]", "part[viewing_form_id]"
    end
  end
end
