require 'spec_helper'

describe LocationsController do

  let(:location) do
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

  # index
  describe 'GET #index' do
    before do
      get :index
    end

    it { should render_template(:index) }

    it "assigns all the locations as @locations" do
      location = Location.create(
        :name => 'GA East',
        :address => '10 E 21st St',
        :address_detail => '4',
        :city => 'New York',
        :state => 'NY',
        :zipcode => '10010',
        :description => 'GA East campus'
      )
      get :index
      locations_array = []
      locations_array << location

      expect( assigns(:locations) ).to match_array(locations_array)
    end
  end

  # create
  describe 'POST #create' do

    context "when a new location is created" do
      let(:new_location) do
       {
        location: {
          :name => 'GA East',
          :address => '10 E 21st St',
          :address_detail => '4',
          :city => 'New York',
          :state => 'NY',
          :zipcode => '10010',
          :description => 'GA East campus'
          }
        }
      end

      it "redirects to the newly created location" do
        post :create, new_location
        expect(response).to redirect_to Location.last
      end

      it "creates a new location" do
        expect { post :create, new_location }.to change { Location.count }.by(1)
      end
    end
  end

  # show
  describe 'GET #show' do

    it "renders the show view" do
      get :show, id: location.id
      expect(response).to render_template :show
    end

    it "assigns each location as @location" do
      get :show, id: location.id
      expect( assigns(:location) ).to eq(location)
    end

  end




end
