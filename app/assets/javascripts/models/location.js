// Location reserved word??
App.Models.Location = Backbone.Model.extend({
  urlRoot: "/locations",

  // validate: function(attrs, options){
  //   var errors = [];
  //   if(attrs.name === "" || attrs.address === "" || attrs.address_detail === "" || attrs.city === "" || attrs.state === "" || attrs.zipcode === "" || attrs.description === ""){
  //     errors.push("Fields can't be blank!");
  //   }
  //   if(errors.length > 0) {
  //     return errors;
  //   }
  // }
});
