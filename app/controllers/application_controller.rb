class ApplicationController < ActionController::Base
  protect_from_forgery
  helper_method :current_user


  # def redirect
  #   unless @logged_in
  #     redirect_to root_path
  #   end
  # end


  private
  def current_user
    @current_user ||= User.find(session[:user_id]) if session[:user_id]
    # @current_user ||= User.find(session[:user_id]) if session[:user_id]
  end


end
