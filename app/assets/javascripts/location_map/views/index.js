App.Views.LocationsView = Backbone.View.extend({

  el: "#locations",

  events: {
    "click li"  : "detail"
  },

  initialize: function(){
    this.listenTo(this.collection, "sync add remove", this.render);
  },

  render: function(){
    var source = $("#locations-template").html();
    var template = Handlebars.compile( source );
    var locationsJSON = this.collection.toJSON();
    var view = template( {devLocations: locationsJSON });
    this.$el.html( view );
  },

  detail: function(e) {
    var id = $(e.currentTarget).data('id');
    var loc = this.collection.get(id);
    var source = $("#detail-template").html();
    var template = Handlebars.compile( source );
    var view = template(loc.toJSON());
    this.$el.html( view );
  }
});
