class ViewingFormsController < ApplicationController
  before_action :set_viewing_form, only: %i[ show edit update destroy ]

  # GET /viewing_forms or /viewing_forms.json
  def index
    @viewing_forms = ViewingForm.all
  end

  # GET /viewing_forms/1 or /viewing_forms/1.json
  def show
  end

  # GET /viewing_forms/new
  def new
    @viewing_form = ViewingForm.new
  end

  # GET /viewing_forms/1/edit
  def edit
  end

  # POST /viewing_forms or /viewing_forms.json
  def create
    @viewing_form = current_user.viewing_forms.build(viewing_form_params)

    respond_to do |format|
      if @viewing_form.save
        format.html { redirect_to @viewing_form, notice: "Viewing form was successfully created." }
        format.json { render :show, status: :created, location: @viewing_form }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @viewing_form.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /viewing_forms/1 or /viewing_forms/1.json
  def update
    respond_to do |format|
      if @viewing_form.update(viewing_form_params)
        format.html { redirect_to @viewing_form, notice: "Viewing form was successfully updated." }
        format.json { render :show, status: :ok, location: @viewing_form }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @viewing_form.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /viewing_forms/1 or /viewing_forms/1.json
  def destroy
    @viewing_form.destroy
    respond_to do |format|
      format.html { redirect_to viewing_forms_url, notice: "Viewing form was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_viewing_form
      @viewing_form = ViewingForm.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def viewing_form_params
      params.require(:viewing_form).permit(:program_title, :ingest_date, :aspect_ratio, :program_id, :tx_date, :number_of_parts, parts_attributes: [:id, :start, :finish, :duration, :notes, :_destroy])
    end
end
