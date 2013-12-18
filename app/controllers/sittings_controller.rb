class SittingsController < ApplicationController

	def show

	end

	def create
    data = {user_id: current_user.id, location_id: params[], start_time: Time.new, commit_clock_on: params[], commit_clock_duration: params[]}
    # Sitting.create(data)
    # this creates a sitting
	end

	def update
		
	end

  def location_by_coords
    binding.pry
    @current_location = Location.where(latitude: params[:latitude], longitude: params[:longitude]).first
    render json: @current_location
  end

end




# Select count * from Sittings where end_time == null, group by address