require 'spec_helper'

describe "Dashboard page" do

  before(:each) do
    visit '/dashboard'
  end

  it "has a timer" do
    expect(page).to have_content('Timer')
  end

end
