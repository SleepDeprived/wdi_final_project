$(document).ready(function(){

  App.router = new App.Router();

  // ================================================================
// This function makes flash notices fade in and fade out
// ================================================================


  $('#flash_notice').delay(500).fadeIn('normal', function() {
    $(this).delay(2000).fadeOut();
  });


});


