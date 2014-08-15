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

  gem "octokit", "~> 2.0"

  gem 'hamlbars', '~> 2.0'

  gem "emblem-rails", "~> 0.2.1"

  # See https://github.com/sstephenson/execjs#readme for more supported runtimes
  # gem 'therubyracer', :platforms => :ruby

  gem 'uglifier', '>= 1.0.3'
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


group :test do
  gem 'shoulda-matchers'
end

group :development, :test do
  gem "rspec-rails"
  gem "factory_girl_rails"
  gem "capybara"
  gem "database_cleaner"
  gem "capybara-webkit"
  gem "selenium-webdriver"
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
  gem "awesome_print"
  gem 'guard-rspec', '~> 3.0.2'
  gem 'guard-spork', '~> 1.5.1'
  gem 'spork-rails', github: 'sporkrb/spork-rails'
  gem 'rb-fsevent', '~> 0.9.3'
end

group :test do
  gem "faker", "~> 1.1.2"
  gem "capybara", "~> 2.1.0"
  gem "database_cleaner", "~> 1.0.1"
  gem "launchy", "~> 2.3.0"
  gem "shoulda-matchers", "~> 2.2.0"
  gem "selenium-webdriver", "~> 2.35.1"
end

gem "simplecov", :require => false, :group => :test
gem "thin"
gem "haml-rails"
gem "handlebars_assets", :group => :assets

