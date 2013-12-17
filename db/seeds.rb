Location.delete_all

l1 = Location.create(
      :name => 'GA East',
      :address => '10 E 21st St',
      :address_detail => '4',
      :city => 'New York',
      :state => 'NY',
      :zipcode => '10010',
      :description => 'GA East campus'
  )

l2 = Location.create(
      :name => 'GA West',
      :address => '902 Broadway',
      :address_detail => '4',
      :city => 'New York',
      :state => 'NY',
      :zipcode => '10010',
      :description => 'GA West campus'
  )

l3 = Location.create(
      :name => 'GA South',
      :address => '41 Union Square W',
      :address_detail => '3',
      :city => 'New York',
      :state => 'NY',
      :zipcode => '10003',
      :description => 'GA South campus'
  )

l4 = Location.create(
      :name => 'Starbucks',
      :address => '10 Union Square E',
      :address_detail => '1',
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

