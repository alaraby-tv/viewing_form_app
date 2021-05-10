class NewViewingForm
  include Capybara::DSL

  def visit_page
    visit('/viewing_forms')
    click_on('New Viewing Form')
    self
  end

  def fill_in_with(params = {})
    fill_in('Programme Title', with: params.fetch(:program_title) )
    fill_in('Enter Programme ID', with: params.fetch(:program_id) )
    fill_in('IngestDate', with: params.fetch(:ingest_date) )
    fill_in('TXDate', with: params.fetch(:tx_date) )
    fill_in('ContactNo', with: params.fetch(:contact_number) )
    add_association
    fill_in('Row1IN', with: params.fetch(:parts_attributes)[0][:start] )
    fill_in('Row1OUT', with: params.fetch(:parts_attributes)[0][:finish] )
    execute_script("$('#Row1DUR').val('#{params.fetch(:parts_attributes)[0][:duration]}')")
    fill_in('Row1Notes', with: params.fetch(:parts_attributes)[0][:notes] )
    self
  end

  def add_association
    click_link('add_association')
    self
  end

  def remove_association
    click_link('remove_association')
    self
  end

  def submit
    click_on('Send Form')
    self
  end
end