class ViewingFormMailer < ApplicationMailer

  # Subject can be set in your I18n file at config/locales/en.yml
  # with the following lookup:
  #
  #   en.viewing_form_mailer.send_form.subject
  #
  def send_form(form)
    @form = form

    mail to: form.user.mail
  end
end
