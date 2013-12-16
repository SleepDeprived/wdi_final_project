App.Views.Main = Backbone.View.extend({
  el: "#locations",

  events: {
    "click #add_location"  : "showForm"
  },

  initialize: function(){
    this.locationForm = new App.Views.LocationForm({model: this.model});
  },

  showForm: function(e){
    this.locationForm.show();
  }
});

App.Views.LocationForm = Backbone.View.extend({

  el: "#location_form",

  events: {
    "submit form" : "createLocation"
  },

  initialize: function(){
    this.name = $('#location_name').val();
    this.address = $('#location_address').val();
    this.address_detail = $('#location_address_detail').val();
    this.city = $('#location_city').val();
    this.state = $('#location_state').val();
    this.zipcode = $('#location_zipcode').val();
    this.description = $('#location_description').val();
    this.listenTo(this.model, "invalid", this.displayErrors);
  },
  show: function(){
    this.$el.show();
  },
  createLocation: function(e){
    e.preventDefault();
    console.log("form submitted");
    this.model.set( this.getAttributes() );
    if (this.model.isValid()){
      this.model.save();
    }
  },
  getAttributes: function(){
    return {
      name: this.name,
      address: this.address,
      address_detail: this.address_detail,
      city: this.city,
      state: this.state,
      zipcode: this.zipcode,
      description: this.description
    }
  },
  displayErrors: function(){
    $("#errors").text(this.model.validationError);
  }
});

// App.Views.LocationForm = Backbone.View.extend({

//   el: "#locations",

//   events: {
//     "click #add_location"     : "showForm",
//     "click #create_location"  : "createLocation"
//   },

//   initialize: function() {
//     this.render();
//   },

//   render: function() {
//     // want form to be hidden on page load
//     this.$el.html("#location_form");
//   },

//   showForm: function(e){
//     // form will be hidden, but when "Add Location" is clicked, it will toggle into view
//     // $("#location_form").show();
//   },

//   createLocation: function(e) {
//     e.preventDefault();
//     console.log("new location");
//     var name = $('#location_name').val();
//     var address = $('#location_address').val();
//     var address_detail = $('#location_address_detail').val();
//     var city = $('#location_city').val();
//     var state = $('#location_state').val();
//     var zipcode = $('#location_zipcode').val();
//     var description = $('#location_description').val();
//     var devLocation = new App.Models.Location({
//       name: name,
//       address: address,
//       address_detail: address_detail,
//       city: city,
//       state: state,
//       zipcode: zipcode,
//       description: description
//     });
//     devLocation.save();
//     router.navigate("/", {trigger: true});
//   }
// })
