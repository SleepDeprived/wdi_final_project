$(document).ready(function(){
 
  App.router = new App.Router();

// this hides or shows the time selection box and the timer start button
  $('#timer_toggle').on('click', showHideTimer);

  // this works --- to be deleted once button is working
  $('#start_timer_button').on('click', timer);
 
});


