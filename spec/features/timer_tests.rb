require 'spec_helper'

describe "Dashboard page" do

  before(:each) do
    visit '/dashboard'
  end

  it "has a timer" do
    expect(page).to have_content('Timer')
  end

  it "has a session" do
    expect(page).to have_content('Session')
  end

  it "has a button to start a session" do
    expect(page).to have_css('button#start-sitting-button')
  end

  it "has a button to end a session once one is started" do
    find('button#start-sitting-button').click
    expect(page).to have_css('button#end-sitting-button')
  end

  it "tells you your current location" do
    expect(page).to have_content('Current Location')
  end

end
