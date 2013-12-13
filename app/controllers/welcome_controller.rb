class WelcomeController < ApplicationController
	# before_filter :redirect, except: :index

  def index
  end

  def dashboard
  end

  def github
    @github = current_user.github_call
    render json: @github
  end

end

# $.ajax({
#     dataType: "json",
#     url: "/github"
#   })
