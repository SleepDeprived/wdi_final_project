App.Collections.Locations = Backbone.Collection.extend({
  url: "/locations",
  // is Location a reserved word??
  model: App.Models.Location,
  initialize: function(){
    this.fetch();
  }
});
