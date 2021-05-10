require 'rails_helper'
require_relative '../support/login_form'
require_relative '../support/new_viewing_form'

feature 'create new viewing form' do
  let(:user) { FactoryBot.create(:user) }
  let(:login_form) { LoginForm.new }
  let(:new_viewing_form) { NewViewingForm.new }

  scenario 'create new viewing form with valid data', js: true do
    login_form.visit_login_page.login_as(user)

    new_viewing_form.visit_page.fill_in_with(
      FactoryBot.attributes_for(:viewing_form, user: user)
    ).submit

    expect(ActionMailer::Base.deliveries.last.cc).to match([user.email])
    expect(ActionMailer::Base.deliveries.count).to eq(1)
    expect(page).to have_selector(:link_or_button, 'Print Form')
  end

  scenario 'cannot create viewing form with invalid data' do
    login_form.visit_login_page.login_as(user)

    new_viewing_form.visit_page.submit
    
    expect(ActionMailer::Base.deliveries.count).to eq(0)
    expect(page).to_not have_selector(:link_or_button, 'Print Form')
  end

  scenario 'adds nested fields for viewing form parts', js: true do
    login_form.visit_login_page.login_as(user)
    new_viewing_form.visit_page.add_association

    expect(page).to have_css("div.nested-fields", :count => 1)
    expect(page).to have_css("a#remove_association")
    expect(page).to_not have_css("a.li_1")
  end

  scenario 'removes nested fields from viewing form parts', js: true do
    login_form.visit_login_page.login_as(user)
    new_viewing_form.visit_page.add_association.remove_association

    expect(page).to have_css("div.nested-fields", :count => 0)
    expect(page).to have_css("a.li_1")
    expect(page).to_not have_css("a#remove_association")
  end
end
