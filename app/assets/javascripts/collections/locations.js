var Locations = Backbone.Collection.extend({
  url: "/locations",
  // is Location a key word??
  model: Location,
  initialize: function(){
    this.fetch();
  }
});
