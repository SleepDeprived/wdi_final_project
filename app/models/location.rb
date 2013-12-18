class Location < ActiveRecord::Base
  attr_accessible :address, :address_detail, :city, :description, :hours_of_operation, :latitude, :longitude, :name, :rating, :state, :zipcode

  validates :name, :address, :city, :state, :zipcode, :presence => true
  geocoded_by :full_address
  after_validation :geocode, :if => :address_changed?

  has_many :users, through: :sittings
  has_many :sittings

  def full_address
    [address, city, state, zipcode].compact.join(', ')
  end


end
