$(document).ready(function(){
 
  App.router = new App.Router();

  // this should be moved to the appropriate view
  // currently this code does not work
  $('#start_timer_button').on('click', function() {
	  if (window.webkitNotifications.checkPermission() == 0) { // 0 is PERMISSION_ALLOWED
	    // function defined in step 2
	    console.log("button works");
	    window.webkitNotifications.createNotification(
	        'icon.png', 'Notification Title', 'Notification content...');
	  } else {
	    window.webkitNotifications.requestPermission();
	  }
	}, false);



 
});
