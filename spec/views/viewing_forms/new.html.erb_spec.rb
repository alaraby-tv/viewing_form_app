require 'rails_helper'

RSpec.describe "viewing_forms/new", type: :view do
  let(:user) { FactoryBot.create(:user) }
  before(:each) do
    @viewing_form = FactoryBot.build(:viewing_form)
    allow(view).to receive(:current_user).and_return(user)
  end

  it "renders new viewing_form form" do
    render

    assert_select "form[action=?][method=?]", viewing_forms_path, "post" do

      assert_select "input[name=?]", "viewing_form[program_title]"

      assert_select "select[name=?]", "viewing_form[aspect_ratio]"

      assert_select "input[name=?]", "viewing_form[program_id]"

      assert_select "input[name=?]", "viewing_form[number_of_parts]"
    end
  end
end
