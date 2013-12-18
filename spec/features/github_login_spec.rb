require 'spec_helper'

feature "Github login" do
  it 'Should be able to log in via Github' do
    visit '/auth/github'
    visit root_path
    expect(page).to have_content("jimmydavis")
    expect(User.find_by_github_username('jimmydavis')).to_not be_nil
  end
end
