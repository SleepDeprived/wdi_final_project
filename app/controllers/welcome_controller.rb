class WelcomeController < ApplicationController
	# before_filter :redirect, except: :index

  def index
  end

  def dashboard
  end

  def github
    @github = current_user.github_call
    render json: @github
    binding.pry
    # SELECTIVELY RENDER FROM JSON
    # response = github.to_json({:only => :sha })
    # render json: response 
  end

  def weekly_data
    # github_data should be github to refer to @github?
    organized_data = current_user.github_data.organize_by_week
    response = organized_data.to_json({:only => :sha })
    render json: response 
  end

  def monthly_data
    organized_data = current_user.github_data.organize_by_month
    response = organized_data.to_json({:only => :sha })
    render json: response 
  end

  def monthly_data
    organized_data = current_user.github_data.organize_by_year
    response = organized_data.to_json({:only => :sha })
    render json: response 
  end

end

# $.ajax({
#     dataType: "json",
#     url: "/github"
#   })
