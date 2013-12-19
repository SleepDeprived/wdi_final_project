class SessionsController < ApplicationController

  def create
    auth = request.env["omniauth.auth"]
    @user = User.find_by_provider_and_uid(auth["provider"], auth["uid"]) || User.create_with_omniauth(auth)
    session[:user_id] = @user.id
    # @user.github_call
    binding.pry
    redirect_to :root
  end

  def destroy
    session[:user_id] = nil
    redirect_to :root
  end

end
