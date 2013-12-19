Location.delete_all

l1 = Location.create(
      :name => 'GA East',
      :address => '10 E 21st St',
      :address_detail => '4th floor',
      :city => 'New York',
      :state => 'NY',
      :zipcode => '10010',
      :description => 'GA East campus'
  )

l2 = Location.create(
      :name => 'GA West',
      :address => '902 Broadway',
      :address_detail => '4th floor',
      :city => 'New York',
      :state => 'NY',
      :zipcode => '10010',
      :description => 'GA West campus'
  )

# l2a = Location.create(
#       :name => 'GA West',
#       :address => '1 East 20th Street',
#       :address_detail => '4th floor',
#       :city => 'New York',
#       :state => 'NY',
#       :zipcode => '10003',
#       :description => 'GA West campus'
#   )

# l2b = Location.create(
#       :name => 'GA West',
#       :address => '912 Broadway',
#       :address_detail => '4',
#       :city => 'New York',
#       :state => 'NY',
#       :zipcode => '10010',
#       :description => 'GA West campus'
#   )

l3 = Location.create(
      :name => 'GA South',
      :address => '41 Union Square W',
      :address_detail => '3rd floor',
      :city => 'New York',
      :state => 'NY',
      :zipcode => '10003',
      :description => 'GA South campus'
  )

l4 = Location.create(
      :name => 'Starbucks',
      :address => '10 Union Square E',
      :address_detail => '',
      :city => 'New York',
      :state => 'NY',
      :zipcode => '10003',
      :description => 'coffee shop'
  )

l5 = Location.create(
      :name => "Gregory's Coffee",
      :address => '327 Park Ave S',
      :address_detail => '',
      :city => 'New York',
      :state => 'NY',
      :zipcode => '10010',
      :description => 'coffee shop'
  )

l6 = Location.create(
      :name => "New York Public Library at Bryant Park",
      :address => '461 Fifth Avenue',
      :address_detail => '',
      :city => 'New York',
      :state => 'NY',
      :zipcode => '10018',
      :description => 'Library'
  )

l7 = Location.create(
      :name => "New York Public Library: East 67th Street",
      :address => '328 East 67th Street',
      :address_detail => '',
      :city => 'New York',
      :state => 'NY',
      :zipcode => '10065',
      :description => 'Library'
  )

l8 = Location.create(
      :name => "The Farm",
      :address => '95 Spring St',
      :address_detail => '2nd floor',
      :city => 'New York',
      :state => 'NY',
      :zipcode => '10012',
      :description => 'Coworking space'
  )

