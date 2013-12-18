class Sitting < ActiveRecord::Base
  attr_accessible :commit_clock_duration, :commit_clock_on, :end_time, :location_id, :session_end_type, :start_time, :user_id

  def rev_geo(coordinates)
  	binding.pry
  	address = Geocoder.search(coordinates[], coordinates[])
  end

end
