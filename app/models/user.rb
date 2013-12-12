class User < ActiveRecord::Base
  attr_accessible :email, :first_name, :github_login, :last_name, :oauth_expires_at, :oauth_token, :proider, :uid

  def self.create_with_omniauth(auth)
    create! do |user|
      user.provider = auth["provider"]
      user.uid = auth["uid"]
      user.github_login = auth["login"]
    end
  end

end
