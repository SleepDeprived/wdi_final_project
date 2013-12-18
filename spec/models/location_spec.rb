require 'spec_helper'

describe Location do

  describe "a valid location" do

    let(:loc) do
      Location.create(
        :name => 'GA East',
        :address => '10 E 21st St',
        :address_detail => '4',
        :city => 'New York',
        :state => 'NY',
        :zipcode => '10010',
        :description => 'GA East campus'
      )
    end

    it "adds a location to the database" do
      expect(Location.all).to eq(1)
    end

    it "can be created with name, address, city, state, and zipcode" do
      expect(loc).to be_true
    end

    it "has a name of 'GA East'" do
      expect(loc.name).to eq('GA East')
    end

    it "has an address of '10 E 21st St'" do
      expect(loc.address).to eq('10 E 21st St')
    end

    it "has an address_detail of '4'" do
      expect(loc.address_detail).to eq('4')
    end

    it "has a city of 'New York'" do
      expect(loc.city).to eq('New York')
    end

    it "has a state of 'NY'" do
      expect(loc.state).to eq('NY')
    end

    it "has a zipcode of '10010'" do
      expect(loc.zipcode).to eq(10010)
    end

    it "has a description of 'GA East campus'" do
      expect(loc.description).to eq('GA East campus')
    end

  end


  describe "validating a location" do
    let(:loc) { Location.new }

    it { should validate_presence_of(:name) }

    it { should validate_presence_of(:address) }

    it { should validate_presence_of(:city) }

    it { should validate_presence_of(:state) }

    it { should validate_presence_of(:zipcode) }

  end

  describe '#full_address' do
    let(:loc) do
      Location.create(
        :name => 'GA East',
        :address => '10 E 21st St',
        :address_detail => '4',
        :city => 'New York',
        :state => 'NY',
        :zipcode => '10010',
        :description => 'GA East campus'
      )
    end

    it "has a full address of Address, City, State, Zipcode" do
      expect(loc.full_address).to eq('10 E 21st St, New York, NY, 10010')
    end


  end



end
