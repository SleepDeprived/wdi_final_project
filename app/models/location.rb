class Location < ActiveRecord::Base
  attr_accessible :address, :address_detail, :city, :description, :hours_of_operation, :latitude, :longitude, :name, :rating, :state, :zipcode
end
