App.Collections.Locations = Backbone.Collection.extend({
  url: "/locations",
  // is Location a reserved word??
  model: Location,
  initialize: function(){
    this.fetch();
  }
});
