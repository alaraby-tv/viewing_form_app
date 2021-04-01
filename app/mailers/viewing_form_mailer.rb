class ViewingFormMailer < ApplicationMailer

  # Subject can be set in your I18n file at config/locales/en.yml
  # with the following lookup:
  #
  #   en.viewing_form_mailer.send_form.subject
  #
  def send_form(form)
    @user = params[:user]
    @form = form
    #receipients = ['mcringest@alaraby.tv', 'schedulers@alaraby.tv', 'playout@alaraby.tv']
    
    attachments.inline["logo.png"] = File.read("#{Rails.root}/app/assets/images/logo.png")

    mail to: @user.email, subject: "#{@form.program_title} Viewing Form"
  end
end
