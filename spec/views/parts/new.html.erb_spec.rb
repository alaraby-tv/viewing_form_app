require 'rails_helper'

RSpec.describe "parts/new", type: :view do
  before(:each) do
    assign(:part, Part.new(
      in: "MyString",
      out: "MyString",
      duration: "MyString",
      notes: "MyText",
      viewing_form: nil
    ))
  end

  it "renders new part form" do
    render

    assert_select "form[action=?][method=?]", parts_path, "post" do

      assert_select "input[name=?]", "part[in]"

      assert_select "input[name=?]", "part[out]"

      assert_select "input[name=?]", "part[duration]"

      assert_select "textarea[name=?]", "part[notes]"

      assert_select "input[name=?]", "part[viewing_form_id]"
    end
  end
end
