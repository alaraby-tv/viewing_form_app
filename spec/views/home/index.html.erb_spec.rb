require 'rails_helper'

RSpec.describe "home/index.html.erb", type: :view do
  it "renders a welcome message" do
    render
    assert_select "h1", text: "Welcome!"
  end
end
