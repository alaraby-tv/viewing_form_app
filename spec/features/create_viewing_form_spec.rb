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

    expect(page).to have_selector(:link_or_button, 'Print Form')
  end

  scenario 'cannot create viewing form with invalid data' do
    login_form.visit_login_page.login_as(user)

    new_viewing_form.visit_page.submit
    
    expect(page).to_not have_selector(:link_or_button, 'Print Form')
  end
end
