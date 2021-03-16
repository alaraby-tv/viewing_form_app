require 'rails_helper'

RSpec.describe "viewing_forms/new", type: :view do
  before(:each) do
    assign(:viewing_form, ViewingForm.new(
      user: nil,
      program_title: "MyString",
      aspect_ratio: "MyString",
      program_id: "MyString",
      number_of_parts: 1
    ))
  end

  it "renders new viewing_form form" do
    render

    assert_select "form[action=?][method=?]", viewing_forms_path, "post" do

      assert_select "input[name=?]", "viewing_form[user_id]"

      assert_select "input[name=?]", "viewing_form[program_title]"

      assert_select "input[name=?]", "viewing_form[aspect_ratio]"

      assert_select "input[name=?]", "viewing_form[program_id]"

      assert_select "input[name=?]", "viewing_form[number_of_parts]"
    end
  end
end
