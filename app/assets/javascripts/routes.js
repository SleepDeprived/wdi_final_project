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
    // collection
    locations = new Locations();
    // collection view
    locationsView = new LocationsView({collection: locations});
  },
  new: function(){
    // form to create new location
    var locationForm = new LocationForm();
  }
});
