require 'spec_helper'

describe "The Home Page" do

  before(:each) do
    visit '/'
  end

  it "has a title of 'DevelUp'" do
    expect(page).to have_title "DevelUp"
  end

  it "shows the title on the page" do
    expect(page).to have_content("DevelUp")
  end

  it "says 'Sign in with GitHub'" do
    expect(page).to have_content("Sign in with GitHub")
  end

  it "says 'Home'" do
    expect(page).to have_content("Home")
  end

  it "says 'Dashboard'" do
    expect(page).to have_content("Dashboard")
  end

  it "says 'Add Location'" do
    expect(page).to have_content("Add Location")
  end

  it "has a link to /home" do
    find_link('Home').click
    expect(page).to have_content('Home')
    # for now it will just go back to '/'
    expect(current_path).to eq('/')
  end

  it "has a link to /dashboard" do
    find_link('Dashboard').click
    expect(page).to have_content('Dashboard')
    expect(current_path).to eq('/dashboard')
  end

  it "has a link to GitHub to login" do
    find_link('Sign in with GitHub').click
    expect(current_path).to have_content("GitHub")
  end

  it "has a map" do
    expect(page).to have_css('div#gmap-canvas')
  end

  it "has a form to add a location" do
    find_link('Add Location').click
    expect(page).to have_css('form')
  end

end
