class WelcomeController < ApplicationController
	# before_filter :redirect, except: :index

  def index
  end

  def dashboard
  end

  def github
    # @github = current_user.github_call

    @github = {commits: [30, 5, 17, 18, 4, 22, 11, 10, 3, 9, 41, 2], weeks: [1, 2, 3, 4 , 5]}
    render json: @github
    # binding.pry
    # SELECTIVELY RENDER FROM JSON
    # response = github.to_json({:only => :sha })
    # render json: response 
  end

  def find_location
    # binding.pry
    @current_location = Location.where(latitude: params[:coordinates], longitude: params[:coordinates]).first
    render json: @current_location
  end

  def create_sitting
    data = {user_id: current_user.id, location_id: params[], start_time: Time.new, commit_clock_on: params[], commit_clock_duration: params[]}
    # Sitting.create(data)
    # this creates a sitting
  end

  def update_sitting
    # this updates the current sitting when it is ended
  end



  # def weekly_data
  #   # github_data should be github to refer to @github?
  #   organized_data = current_user.github_data.organize_by_week
  #   response = organized_data.to_json({:only => :sha })
  #   render json: response 
  # end

  # def monthly_data
  #   organized_data = current_user.github_data.organize_by_month
  #   response = organized_data.to_json({:only => :sha })
  #   render json: response 
  # end

  # def monthly_data
  #   organized_data = current_user.github_data.organize_by_year
  #   response = organized_data.to_json({:only => :sha })
  #   render json: response 
  # end

end

# $.ajax({
#     dataType: "json",
#     url: "/github"
#   })
