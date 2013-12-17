App.Collections.Locations = Backbone.Collection.extend({
  url: "/locations",
  model: App.Models.Location,
  initialize: function(){
    this.fetch();
  }
});
