// Put all the JS for the sidebar interactivity here
$(document).ready(function(){
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


	// $('#dashboard').on("click", )
		// this is to target the dashboard link in the nav bar so that it will append or show divs that will trigger the different backbone views for the different charts


