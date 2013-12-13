require 'spec_helper'

describe "The Home Page" do

  before(:each) do
    visit '/'
  end

  it "says 'Sign in with GitHub'" do
    expect(page).to have_content("Sign in with GitHub")
  end

  it "says 'Dashboard'" do
    expect(page).to have_content("Dashboard")
  end

  it "has a link to /dashboard" do
    find_link('Dashboard').click
    expect(page).to have_content('Dashboard')
    expect(current_path).to eq('/dashboard')
  end

  it "has a link to /locations" do
    find_link('Locations').click
    expect(page).to have_content('Locations')
    # for now it will just go back to '/'
    expect(current_path).to eq('/')
  end

  it "has a link to GitHub to login" do
    find_link('Sign in with GitHub').click
    expect(current_path).to eq('/auth/github')
  end

  it "says 'Sign Out' when user is logged in" do
    find_link('Sign in with GitHub').click
    # click whatever button is on the GitHub page
    expect(page).to have_content("Sign Out")
  end

end
