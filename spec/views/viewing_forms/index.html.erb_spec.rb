require 'rails_helper'

RSpec.describe "viewing_forms/index", type: :view do
  let(:user) { FactoryBot.create(:user, email: 'example@alaraby.tv') }
  before(:each) do
    assign(:viewing_forms, [
      FactoryBot.create(:viewing_form),
      FactoryBot.create(:viewing_form)
    ])
    allow(view).to receive_messages(page_entries_info: nil)
    allow(view).to receive_messages(paginate: nil)
  end

  it "renders a list of viewing_forms" do
    render
    assert_select "tr>td", text: "Programme Title".to_s, count: 2
    assert_select "tr>td", text: "ID-TEST-11".to_s, count: 2
    assert_select "tr>td", text: 1.to_s, count: 2
  end
end
