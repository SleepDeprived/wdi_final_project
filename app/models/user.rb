class User < ActiveRecord::Base
  attr_accessible :email, :github_image, :github_username, :name, :oauth_expires_at, :oauth_token, :provider, :uid

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
    Github.repos.commits.all @attributes['github_username'], 'market_app' #(username, repo)
  end

end
