require "rails_helper"

RSpec.describe ViewingFormMailer, type: :mailer do
  describe "send_form" do
    let(:mail) { ViewingFormMailer.send_form }

    it "renders the headers" do
      expect(mail.subject).to eq("Send form")
      expect(mail.to).to eq(["to@example.org"])
      expect(mail.from).to eq(["from@example.com"])
    end

    it "renders the body" do
      expect(mail.body.encoded).to match("Hi")
    end
  end

end