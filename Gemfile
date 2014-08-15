source 'https://rubygems.org'

gem 'rails', '3.2.14'

# Bundle edge Rails instead:
# gem 'rails', :git => 'git://github.com/rails/rails.git'

gem 'pg'

gem 'omniauth'
gem 'omniauth-github'
gem 'github_api'
gem 'geocoder'

# Gems used only for assets and not required
# in production environments by default.
group :assets do
  gem 'sass-rails',   '~> 3.2.3'
  gem 'coffee-rails', '~> 3.2.1'

  gem "octokit", "~> 3.3.0"

  gem 'hamlbars', '~> 2.1.1'

  gem "emblem-rails", "~> 0.2.1"

  # See https://github.com/sstephenson/execjs#readme for more supported runtimes
  # gem 'therubyracer', :platforms => :ruby

  gem 'uglifier', '>= 1.3.0'
end

gem 'jquery-rails'

# To use ActiveModel has_secure_password
# gem 'bcrypt-ruby', '~> 3.0.0'

# To use Jbuilder templates for JSON
# gem 'jbuilder'

# Use unicorn as the app server
# gem 'unicorn'

# Deploy with Capistrano
# gem 'capistrano'

# To use debugger
# gem 'debugger'

gem 'coveralls', require: false


group :development, :test do
  gem "rspec-rails", "~> 3.0.2"
  gem "factory_girl_rails", "~> 4.4.1"
  # gem "capybara-webkit", "~> 1.2.0"
  gem "jasmine"
  gem "pry-rails"
end

group :development do
  gem "annotate"
  gem "quiet_assets"
  gem "binding_of_caller"
  gem "meta_request"
  gem "rails-erd"
  gem "better_errors"
  gem "terminal-notifier-guard"
  gem "awesome_print", "~> 1.2.0"
  gem 'guard-rspec', '~> 4.3.1'
  gem 'guard-spork', '~> 1.5.1'
  gem 'spork-rails', github: 'sporkrb/spork-rails'
  gem 'rb-fsevent', '~> 0.9.4'
end

group :test do
  gem "faker", "~> 1.4.2"
  gem "capybara", "~> 2.4.1"
  gem "database_cleaner", "~> 1.3.0"
  gem "launchy", "~> 2.4.2"
  gem "shoulda-matchers", "~> 2.6.2"
  gem "selenium-webdriver", "~> 2.42.0"
end

gem "simplecov", :require => false, :group => :test
gem "thin"
gem "haml-rails"
gem "handlebars_assets", :group => :assets

