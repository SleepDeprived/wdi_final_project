$(document).ready(function(){
 
  App.router = new App.Router();

// this hides or shows the time selection box and the timer start button
  $('#timer_toggle').on('click', showHideTimer);

  // Update this to change timer from Start timer to Stop timer
  // restrict timer to have only one running at a time
  $('#start_timer_button').on('click', timer);
 
});


