class Location < ActiveRecord::Base
  attr_accessible :address, :address_detail, :city, :description, :hours_of_operation, :latitude, :longitude, :name, :rating, :state, :zipcode
  geocoded_by :full_address
  after_validation :geocode, :if => :address_changed?

  def full_address
    [address, city, state, zipcode].compact.join(', ')
  end

end
