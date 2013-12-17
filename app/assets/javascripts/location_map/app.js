$(document).ready(function(){

  App.router = new App.Router();

  // When you click on the "Add Location" link in the side nav
  // it will toggle the form to the create a new location
  $("#add_location").on("click", function(e) {
    e.preventDefault();
    $("#location_form").toggle();
    $("#add_location").toggleClass("menu-open");
  });

  $("#location_form").mouseup(function() {
    return false;
  });


  // when you click again anywhere else, it will hide the form
  $(document).mouseup(function(e) {
    if( $(e.target).parent("#add_location").length==0 ) {
      $("#add_location").removeClass("menu-open");
      $("#location_form").hide();
    }
  });

});


