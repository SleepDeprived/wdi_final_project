class User < ActiveRecord::Base
  attr_accessible :email, :github_image, :github_username, :name, :oauth_expires_at, :oauth_token, :provider, :uid
  has_many :locations, through: :sittings
  has_many :sittings
  attr_accessor :github_data

  def self.create_with_omniauth(auth)
    create! do |user|
      user.provider = auth["provider"]
      user.uid = auth["uid"]
      user.github_username = auth["extra"]["raw_info"]["login"]
      user.github_image = auth["info"]["image"]
      user.email = auth["email"]
      user.name = auth["name"]
    end
  end

  def github_call   #(username, repo)
    # example query
      # @github_data = Github.repos.commits.all @attributes['github_username'], 'sort_chall' #(username, repo)
      # used https://github.com/peter-murach/github/ to identify methods to get data
    # Get the full list of user repos for the logged in user (does not count repos owned by others and potentially omits private repos)
    repo_response = Github.repos.list user: @attributes['github_username']
    # pull out the names of the repos into an array
    repo_name_array = repo_response.body.map {|repo| repo["name"]}
    commit_data = []
    # iterate over the array of repos to get the number of commits to that repo by day and the dates for the weeks when these commits were made
    repo_name_array.each do |repo_array|
      # gets the commits for a repo by day for a year
      repo_stats = Github.repos.stats.commit_activity( @attributes['github_username'], repo_array ).body
      # put the commits into an array of 365 days
      github_day_commits = repo_stats.map{ |obj| obj["days"] }.flatten
      # make an array of the weeks that span this year
      github_weeks = repo_stats.map{ |obj| obj["week"] }.flatten
      # create an object in the commit_data array for each repo with the name of the repo and the commits and weeks arrays for that repo
      commit_data.push({repo: repo_array, commits_by_day: github_day_commits, weeks: github_weeks})
    end
    daily_commits = commit_data[0][:commits_by_day].zip(commit_data[1][:commits_by_day],
                                                      commit_data[2][:commits_by_day],
                                                      commit_data[3][:commits_by_day],
                                                      commit_data[4][:commits_by_day],
                                                      commit_data[5][:commits_by_day],
                                                      commit_data[6][:commits_by_day],
                                                      commit_data[7][:commits_by_day],
                                                      commit_data[8][:commits_by_day],
                                                      commit_data[9][:commits_by_day],
                                                      commit_data[10][:commits_by_day],
                                                      commit_data[11][:commits_by_day],
                                                      commit_data[12][:commits_by_day])
    @github_data = {commits: daily_commits.map{|day| day.inject(:+)}, weeks: commit_data[0][:weeks]}
  end

  def organize_by_week
    # organize @github_data (self.github_data) in a weekly format
  end

  def organize_by_month

  end

  def organize_by_year

  end

end
