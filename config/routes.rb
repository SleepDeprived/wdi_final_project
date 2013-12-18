# == Route Map (Updated 2013-12-17 22:21)
#
#          root        /                                  welcome#index
#                      /auth/:provider/callback(.:format) sessions#create
#       signout        /signout(.:format)                 sessions#destroy
# welcome_index GET    /welcome/index(.:format)           welcome#index
#     dashboard GET    /dashboard(.:format)               welcome#dashboard
#        github GET    /github(.:format)                  welcome#github
#      sittings POST   /sittings(.:format)                sittings#create
#       sitting GET    /sittings/:id(.:format)            sittings#show
#               PUT    /sittings/:id(.:format)            sittings#update
#     locations GET    /locations(.:format)               locations#index
#               POST   /locations(.:format)               locations#create
#  new_location GET    /locations/new(.:format)           locations#new
# edit_location GET    /locations/:id/edit(.:format)      locations#edit
#      location GET    /locations/:id(.:format)           locations#show
#               PUT    /locations/:id(.:format)           locations#update
#               DELETE /locations/:id(.:format)           locations#destroy
#

FinalProject::Application.routes.draw do
  root to: 'welcome#index'

  match '/auth/:provider/callback' => 'sessions#create'
  match '/signout' => 'sessions#destroy', :as => :signout

  get "welcome/index"

  get "/dashboard" => "welcome#dashboard"
  get "/github" => "welcome#github"

  resources :sittings, only: [:create, :update, :show]
  get "/location_by_coords" => "sittings#location_by_coords"

  resources :locations

end
