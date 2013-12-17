App.Views.Main = Backbone.View.extend({
  el: ".container",

  events: {
    "click #add_location"  : "showForm"
  },

  initialize: function(){
    console.log("initialized main.js");
    this.locationForm = new App.Views.LocationForm({model: this.model});
  },

  showForm: function(e){
    alert("show form");
    this.locationForm.show();
  }
});

App.Views.LocationForm = Backbone.View.extend({

  el: "#location_form",

  events: {
    "submit form" : "createLocation"
  },

  initialize: function(){
    this.name = $('#location_name');
    this.address = $('#location_address');
    this.address_detail = $('#location_address_detail');
    this.city = $('#location_city');
    this.state = $('#location_state');
    this.zipcode = $('#location_zipcode');
    this.description = $('#location_description');
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
      name: this.name.val(),
      address: this.address.val(),
      address_detail: this.address_detail.val(),
      city: this.city.val(),
      state: this.state.val(),
      zipcode: this.zipcode.val(),
      description: this.description.val()
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
