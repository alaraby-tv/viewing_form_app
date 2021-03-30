# Preview all emails at http://localhost:3000/rails/mailers/viewing_form
class ViewingFormPreview < ActionMailer::Preview

  # Preview this email at http://localhost:3000/rails/mailers/viewing_form/send_form
  def send_form
    ViewingFormMailer.send_form
  end

end
