class Sitting < ActiveRecord::Base
  attr_accessible :commit_clock_duration, :commit_clock_on, :end_time, :location_id, :session_end_type, :start_time, :user_id
  belongs_to :user
  belongs_to :location
end
