require "rails_helper"

RSpec.describe ViewingFormMailer, type: :mailer do
  describe "send_form" do
    let(:form) { FactoryBot.create(:viewing_form) }
    let(:mail) { ViewingFormMailer.send_form(form) }

    it "renders the headers" do
      expect(mail.subject).to eq("Viewing Form #{form.program_title} #{form.program_id}")
      expect(mail.to).to eq(['mcringest@alaraby.tv', 'scheduling@alaraby.tv', 'playout@alaraby.tv', 'librarians@alaraby.tv'])
      expect(mail.from).to eq(["server@alaraby.tv"])
    end

    it "renders the body" do
      expect(mail.body.encoded).to match("Hello")
    end
  end

end
