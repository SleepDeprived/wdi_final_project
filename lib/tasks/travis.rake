require 'coveralls/rake/task'
Coveralls::RakeTask.new

namespace :travis do

  desc "Prepare DB and run Tests"
  task :run do
    ["db:create", "db:migrate RAILS_ENV=test", "spec", "coveralls:push"].each do |cmd|
      puts "Starting to run #{cmd}..."
      system("bundle exec rake #{cmd}")
      raise "#{cmd} failed!" unless $?.exitstatus == 0
    end
  end

end
