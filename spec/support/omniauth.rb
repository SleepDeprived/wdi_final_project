# Omniauth testing
OmniAuth.config.test_mode = true
OmniAuth.config.mock_auth[:github] = OmniAuth::AuthHash.new({
  provider: 'github',
  uid: '5297197',
  name: nil,
  email: nil,
  extra: {
    raw_info: {
      login: 'jimmydavis'
    }
  },
  info: {
    image: 'https://gravatar.com/avatar/c6b019082bf83199c49eedf61f1c2db6?d=https%3A%2F%2Fidenticons.github.com%2F8fbd6ad014da9ae34dd4b50296664c5c.png&r=x'
  }
})
