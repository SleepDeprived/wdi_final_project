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
    this.$el.html("#location_form");
  },

  showForm: function(e){
    // $("#location_form").show();
  },

  createLocation: function(e) {
    e.preventDefault();
    console.log("new location");
    var name = $('#location_name').val();
    var address = $('#location_address').val();
    var address_detail = $('#location_address_detail').val();
    var city = $('#location_city').val();
    var state = $('#location_state').val();
    var zipcode = $('#location_zipcode').val();
    var description = $('#location_description').val();
    var devLocation = new App.Models.Location({
      name: name,
      address: address,
      address_detail: address_detail,
      city: city,
      state: state,
      zipcode: zipcode,
      description: description
    });
    devLocation.save();
    router.navigate("/", {trigger: true});
  }
})