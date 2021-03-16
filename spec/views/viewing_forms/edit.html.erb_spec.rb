require 'rails_helper'

RSpec.describe "viewing_forms/edit", type: :view do
  before(:each) do
    @viewing_form = assign(:viewing_form, ViewingForm.create!(
      user: nil,
      program_title: "MyString",
      aspect_ratio: "MyString",
      program_id: "MyString",
      number_of_parts: 1
    ))
  end

  it "renders the edit viewing_form form" do
    render

    assert_select "form[action=?][method=?]", viewing_form_path(@viewing_form), "post" do

      assert_select "input[name=?]", "viewing_form[user_id]"

      assert_select "input[name=?]", "viewing_form[program_title]"

      assert_select "input[name=?]", "viewing_form[aspect_ratio]"

      assert_select "input[name=?]", "viewing_form[program_id]"

      assert_select "input[name=?]", "viewing_form[number_of_parts]"
    end
  end
end
