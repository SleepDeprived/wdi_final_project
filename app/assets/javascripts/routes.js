App.Router = Backbone.Router.extend({
  routes: {
    ""          : "index",
    "new"       : "new"
  },
  initialize: function(){
    Backbone.history.start();
  },
  index: function(){
    console.log('bb router index');
    // model
    var devLocation = new App.Models.Location();
    // collection
    var devLocations = new App.Collections.Locations();
    // collection view
    var locationsView = new App.Views.LocationsView({collection: devLocations});
  },
  new: function(){
    // form to create new location
    var locationForm = new App.Views.LocationForm();
  }
});
