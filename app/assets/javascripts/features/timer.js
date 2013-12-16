// this shows and hides the timer depending on if the checkbox is checked or not
function showHideTimer() {
	console.log("switch toggled");
  	if ($(this).is(':checked')) {
  		$('#timer-elements').show();
  	} else {
  		$('#timer-elements').hide();
  	}
}











// function Timer(){
// 	this.time = 0;
// }


// Timer.prototype.startTimer = function() {
// 	// complete this startTimer method
// 	var duration = $("#time").val() * 60 // converted to seconds
// 	var counter = setInterval(runTimer, 1000); // will run once per second

// }

// function runTimer(duration) {
// 	duration = duration -1;
// 	if (duration <= 0) {
// 		// this is where the alert goes
// 	}
// }


// // this should be moved to the appropriate view
// // currently this code does not work
// $('#start_timer_button').on('click', function() {
//   if (window.webkitNotifications.checkPermission() == 0) { // 0 is PERMISSION_ALLOWED
//     // function defined in step 2
//     console.log("button works");
//     window.webkitNotifications.createNotification(
//         'icon.png', 'Notification Title', 'Notification content...');
//   } else {
//     window.webkitNotifications.requestPermission();
//     console.log("permission request should have been made")
//   }
// }, false);


