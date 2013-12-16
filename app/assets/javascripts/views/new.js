App.Views.LocationForm = Backbone.View.extend({

  el: "#locations",

  events: {
    "click #add_location"     : "showForm",
    "click #create_location"  : "createLocation"
  },

  initialize: function() {
    this.render();
  },

  render: function() {
    // TODO: finish new location form!!!
    this.$el.html("#location_form");
  },

  showForm: function(){

  },

  createLocation: function(e) {
    e.preventDefault();
    console.log("new location");
    var name = $('#location_name').val();
    var address = $('#location_address').val();
    // add fields for all the other location data
    var location = new Location({
      name: name,
      address: address
      // add the rest...
    });
    location.save();
    router.navigate("/", {trigger: true});
  }
})
