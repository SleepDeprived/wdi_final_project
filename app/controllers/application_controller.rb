class ApplicationController < ActionController::Base
  protect_from_forgery

  def redirect
  	unless @logged_in
  		redirect_to root_path
  	end
  end
  
end
