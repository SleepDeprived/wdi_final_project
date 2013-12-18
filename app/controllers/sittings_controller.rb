class SittingsController < ApplicationController

	def show

	end

	def create
    data = {user_id: current_user.id, location_id: params["location_id"], start_time: Time.new, commit_clock_on: params["commit_clock_on"], commit_clock_duration: params["commit_clock_duration"]}
    Sitting.create(data)
    # this creates a sitting
	end

	def update
		# for end sitting
	end

  def location_by_coords
    latlng = "#{params['latitude']},#{params['longitude']}"
    address_result = Geocoder.search(latlng)
    address_detail = address_result.first.data["formatted_address"].split(", ")
    @current_location = Location.where(address: address_detail[0], city: address_detail[1], zipcode: address_detail[2].split(" ")[1].to_i).first
    render json: @current_location
  end

end




# Select count * from Sittings where end_time == null, group by address