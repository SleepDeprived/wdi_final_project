require 'spec_helper'

describe "The Home Page" do

  before(:each) do
    visit '/'
  end

  it "says 'Sign in with GitHub'" do
    expect(page).to have_content("Sign in with GitHub")
  end

end
