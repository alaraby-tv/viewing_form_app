 require 'rails_helper'


RSpec.describe "/viewing_forms", type: :request do
  let(:viewing_form) { FactoryBot.create(:viewing_form) }
  let(:valid_attributes) { FactoryBot.attributes_for(:viewing_form) }
  let(:invalid_attributes) { FactoryBot.attributes_for(:viewing_form, program_title: nil) }
  let(:new_attributes) { FactoryBot.attributes_for(:viewing_form, program_title: "Other Title") }

  shared_examples "public access to show action" do
    describe "GET /show" do
      it "renders a successful response" do
        get viewing_form_url(viewing_form)
        expect(response).to be_successful
      end
    end
  end

  describe "unauthenticated user" do
    
    it_behaves_like "public access to show action"

    describe "GET /index" do
      it "redirects to login page" do
        get viewing_forms_url
        expect(response).to redirect_to(new_user_session_url)
      end
    end

    describe "GET /new" do
      it "redirects to login page" do
        get new_viewing_form_url
        expect(response).to redirect_to(new_user_session_url)
      end
    end

    describe "GET /edit" do
      it "redirects to login page" do
        get edit_viewing_form_url(viewing_form)
        expect(response).to redirect_to(new_user_session_url)
      end
    end

    describe "POST /create" do
      it "redirects to login page" do
        post viewing_forms_url, params: { viewing_form: valid_attributes }
        expect(response).to redirect_to(new_user_session_url)
      end
    end

    describe "PATCH /update" do
      it "redirects to login page" do
        patch viewing_form_url(viewing_form), params: { viewing_form: new_attributes }
        viewing_form.reload
        expect(response).to redirect_to(new_user_session_url)
      end
    end

    describe "DELETE /destroy" do
      it "redirects to login page" do
        delete viewing_form_url(viewing_form)
        expect(response).to redirect_to(new_user_session_url)
      end
    end
  end

  describe "authenticated user" do

    let(:user) { FactoryBot.create(:user) }
    before do
      sign_in(user)
    end

    it_behaves_like "public access to show action"

    describe "GET /index" do
      it "renders a successful response" do
        get viewing_forms_url
        expect(response).to be_successful
      end
    end

    describe "GET /new" do
      it "renders a successful response" do
        get new_viewing_form_url
        expect(response).to be_successful
      end
    end

    describe "GET /edit" do
      it "render a successful response" do
        get edit_viewing_form_url(viewing_form)
        expect(response).to be_successful
      end
    end

    describe "POST /create" do
      context "with valid parameters" do
        it "creates a new ViewingForm" do
          expect {
            post viewing_forms_url, params: { viewing_form: valid_attributes }
          }.to change(ViewingForm, :count).by(1)
        end

        it "redirects to the created viewing_form" do
          post viewing_forms_url, params: { viewing_form: valid_attributes }
          expect(response).to redirect_to(viewing_form_url(ViewingForm.last))
        end
      end

      context "with invalid parameters" do
        it "does not create a new ViewingForm" do
          expect {
            post viewing_forms_url, params: { viewing_form: invalid_attributes }
          }.to change(ViewingForm, :count).by(0)
        end

        it "renders a successful response (i.e. to display the 'new' template)" do
          post viewing_forms_url, params: { viewing_form: invalid_attributes }
          expect(response).to render_template(:new)
        end
      end
    end

    describe "PATCH /update" do
      context "with valid parameters" do

        it "updates the requested viewing_form" do
          patch viewing_form_url(viewing_form), params: { viewing_form: new_attributes }
          viewing_form.reload
          expect(viewing_form.program_title).to eq("Other Title")
        end

        it "redirects to the viewing_form" do
          patch viewing_form_url(viewing_form), params: { viewing_form: new_attributes }
          viewing_form.reload
          expect(response).to redirect_to(viewing_form_url(viewing_form))
        end
      end

      context "with invalid parameters" do
        it "renders a successful response (i.e. to display the 'edit' template)" do
          patch viewing_form_url(viewing_form), params: { viewing_form: invalid_attributes }
          expect(response).to render_template(:edit)
        end
      end
    end

    describe "DELETE /destroy" do
      it "destroys the requested viewing_form" do
        viewing_form
        expect {
          delete viewing_form_url(viewing_form)
        }.to change(ViewingForm, :count).by(-1)
      end

      it "redirects to the viewing_forms list" do
        delete viewing_form_url(viewing_form)
        expect(response).to redirect_to(viewing_forms_url)
      end
    end
  end
end
