class User < ActiveRecord::Base
  attr_accessible :email, :first_name, :github_login, :last_name, :oauth_expires_at, :oauth_token, :proider, :uid
end
