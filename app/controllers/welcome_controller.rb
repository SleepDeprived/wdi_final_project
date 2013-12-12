class WelcomeController < ApplicationController
	before_filter :redirect, except: :index

  def index
  end

  def dashboard
  end
end
