var LocationForm = Backbone.View.extend({
  el: "#locations",
  events: {
    "click button" : "newLocation"
  },
  initialize: function() {
    this.render();
  },
  render: function() {
    // TODO: create a new location form somewher!!!
    this.$el.html( //new form!!! );
  },
  newLocation: function() {
    console.log("new location");
    // var name = $('whatever id i give the name field ').val();
    // var address = $('').val();
    // add fields for all the other location data
    var location = new Location({name: name, address: address, add the rest......})
    location.save();
    router.navigate("/", {trigger: true});
  }
})
