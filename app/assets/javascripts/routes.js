App.Router = Backbone.Router.extend({
  routes: {
    ""          : "index",
    "new"       : "new"
  },
  initialize: function(){
    Backbone.history.start();
  },
  index: function(){
    console.log('index');
    locations = new Locations();
    locationsView = new LocationsView({collection: locations});
  },
  new: function(){
    var newLocationForm = new LocationForm();
  }
});
