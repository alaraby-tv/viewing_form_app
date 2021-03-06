class ViewingFormMailer < ApplicationMailer

  # Subject can be set in your I18n file at config/locales/en.yml
  # with the following lookup:
  #
  #   en.viewing_form_mailer.send_form.subject
  #
  def send_form(form)
    @user = form.user
    @form = form
    receipients = ['mcringest@alaraby.tv', 'scheduling@alaraby.tv', 'playout@alaraby.tv', 'librarians@alaraby.tv']
    
    attachments.inline["logo.png"] = File.read("#{Rails.root}/app/assets/images/logo.png")

    mail to: receipients, cc: @user.email, subject: "Viewing Form #{@form.program_title} #{@form.program_id}"
  end
end
