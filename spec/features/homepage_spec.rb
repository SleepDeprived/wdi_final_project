require 'spec_helper'

describe "The Locations Page" do

  before(:each) do
    visit '/'
    find_link('Sign in with GitHub').click
  end

  it "has a title of 'DevelUp'" do
    expect(page).to have_title "DevelUp"
  end

  it "shows the title on the page" do
    expect(page).to have_content("DevelUp")
  end

  it "says 'Locations'" do
    expect(page).to have_content("Locations")
  end

  it "says 'Dashboard'" do
    expect(page).to have_content("Dashboard")
  end

  it "says 'Add Location'" do
    expect(page).to have_content("Add Location")
  end

  it "has a link to /" do
    find_link('Locations').click
    expect(page).to have_content('Locations')
    expect(current_path).to eq('/')
  end

  it "has a link to /dashboard" do
    find_link('Dashboard').click
    expect(page).to have_content('Dashboard')
    expect(current_path).to eq('/dashboard')
  end

  it "signs a user in" do
    expect(page).to have_content("Welcome, jimmydavis")
  end

  it "has a map" do
    expect(page).to have_css('div#gmap-canvas')
  end

  it "says 'Sign Out' when a user is logged in" do
    expect(page).to have_content("Sign Out")
  end

  # it "has a form to create new location" do
  #   find_link('Add Location').click
  #   expect(page).to have_content('Create Location')
  # end


end
