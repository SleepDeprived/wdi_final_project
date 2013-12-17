class Location < ActiveRecord::Base
  attr_accessible :address, :address_detail, :city, :description, :hours_of_operation, :latitude, :longitude, :name, :rating, :state, :zipcode
  geocoded_by :address
  after_validation :geocode, :if => :address_changed?
end
