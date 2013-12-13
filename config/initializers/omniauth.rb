Rails.application.config.middleware.use OmniAuth::Builder do
  provider :github, ENV['GITHUB_CLIENT_ID'], ENV['GITHUB_CLIENT_SECRET']
end

# OmniAuth error handling http://stackoverflow.com/a/11256549/2474735
# OmniAuth.config.on_failure = UsersController.action(:oauth_failure)
