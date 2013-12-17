$(document).ready(function(){
 
  Dashboard.router = new Dashboard.Router();
  
// this hides or shows the time selection box and the timer start button
  $('#timer_toggle').on('click', showHideTimer);
  // Update this to change timer from Start timer to Stop timer
  // restrict timer to have only one running at a time
  $('#start_timer_button').on('click', timer);
 
// this triggers all actions associated with the sitting/session section

	$('#start-sitting-button').on('click', Dashboard.beginSitting);
	$('#end-sitting-button').on('click', Dashboard.endSitting);

	Dashboard.getLocation(Dashboard.current_location);
	// $('#current-sitting-location').

});

