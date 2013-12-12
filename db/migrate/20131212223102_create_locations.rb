class CreateLocations < ActiveRecord::Migration
  def change
    create_table :locations do |t|
      t.string :name
      t.float :latitude
      t.float :longitude
      t.text :address
      t.string :address_detail
      t.string :city
      t.string :state
      t.integer :zipcode
      t.integer :rating
      t.text :description
      t.string :hours_of_operation

      t.timestamps
    end
  end
end
