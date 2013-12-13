class User < ActiveRecord::Base
  attr_accessible :email, :github_image, :github_username, :name, :oauth_expires_at, :oauth_token, :provider, :uid

  def self.create_with_omniauth(auth)
    create! do |user|
      user.provider = auth["provider"]
      user.uid = auth["uid"]
      user.github_login = auth["login"]
    end
  end

end
