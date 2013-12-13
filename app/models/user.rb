class User < ActiveRecord::Base
  attr_accessible :email, :first_name, :github_login, :last_name, :oauth_expires_at, :oauth_token, :provider, :uid

  def self.create_with_omniauth(auth)
    create! do |user|
      binding.pry
      user.provider = auth["provider"]
      user.uid = auth["uid"]
      user.github_username = auth["raw_info"]["login"]
      user.github_image = auth["info"]["image"]
      user.email = auth["email"]
      user.name = auth["name"]
    end
  end

  def github_call#(username, repo)
    Github.repos.commits.all 'jimmydavis', 'market_app' #(username, repo)
  end

end
