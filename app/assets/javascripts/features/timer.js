// this shows and hides the timer depending on if the checkbox is checked or not
function showHideTimer() {
	console.log("switch toggled");
  	if ($(this).is(':checked')) {
  		$('#timer-elements').show();
  	} else {
  		$('#timer-elements').hide();
  	}
}

function timer() {
	if (window.webkitNotifications.checkPermission() !== 0) {
		window.webkitNotifications.requestPermission();
	} else {
		console.log("button detects click");
		var durationInMinutes = $('#time').val();
		var duration = durationInMinutes * 60;
		var counter = setInterval(countdown,1000);

		function countdown() {
		  if (duration <= 0) {
		  	debugger;
		     window.webkitNotifications.createNotification(null, 'Notification Title', 'Notification content...');
		     clearInterval(counter); //this isn't working, check into it
		     $("#timer").html();
		     //counter ended, do something here
		     // this is where the alert goes
		     // also need to reset the timer -- have click create new Timer object instead?
		     return;
		  }
		  //Do code for showing the number of seconds here
		  var minutes = Math.floor(duration / 60);
		  var seconds = duration - minutes * 60;
		  $("#timer").html(minutes + " min " + seconds + " sec"); // watch for spelling
		  duration = duration-1;
		} //end of countdown function
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



