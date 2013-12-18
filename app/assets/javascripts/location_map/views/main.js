App.Views.Main = Backbone.View.extend({
  el: "#side_nav",

  initialize: function(){
    console.log("initialized main.js");
    this.locationForm = new App.Views.LocationForm({model: this.model});
  },

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
  createLocation: function(e){
    // e.preventDefault();
    console.log("form submitted");
    this.model.set( this.getAttributes() );
    // don't need these because it is getting validated and saved already through rails
    // if (this.model.isValid()){
    //   this.model.save();
    // }
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
