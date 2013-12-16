class User < ActiveRecord::Base
  attr_accessible :email, :github_image, :github_username, :name, :oauth_expires_at, :oauth_token, :provider, :uid

  attr_accessor :github_data

  def self.create_with_omniauth(auth)
    create! do |user|
      # binding.pry
      user.provider = auth["provider"]
      user.uid = auth["uid"]
      user.github_username = auth["extra"]["raw_info"]["login"]
      user.github_image = auth["info"]["image"]
      user.email = auth["email"]
      user.name = auth["name"]
    end
  end

  def github_call   #(username, repo)
    # binding.pry
    @github_data = Github.repos.commits.all @attributes['github_username'], 'sort_chall' #(username, repo)
  end

  def organize_by_week
    # organize @github_data (self.github_data) in a weekly format
  end

  def organize_by_month
    
  end

  def organize_by_year
    
  end

end
