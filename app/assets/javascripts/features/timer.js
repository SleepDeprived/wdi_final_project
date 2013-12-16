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
		// selections on page are set in minutes
		var durationInMinutes = $('#time').val();
		// converts minutes to seconds (setInterval is set in seconds)
		var duration = durationInMinutes * 60;
		var counter = setInterval(countdown,1000);

		function countdown() {
		  if (duration <= 0) {
		     var alarm = window.webkitNotifications.createNotification('rails.png', 'Time to Commit', "I pity the fool who doesn't commit");
		     // make a bunch of different commit messages and sample them -- purely to keep people intereted in reading the messages
		     alarm.show();
		     // add a sound 
		     // use choir.io (bloop: [alarm, kasplode, horn, warble, success, cheer], submarine: [echopop, dolphinchuckle, lownar, submed, orca])
		     clearInterval(counter); //this isn't working, check into it
		     $("#timer").html('');
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


// function sample(a, n) {
//     return _.take(_.shuffle(a), n);
// }

// var phrases = [
// "You don't want to lose all of your valuable work!",
// "I pity the fool who doesn't commit"
// ]

// ------------------------------------------------------------------
// NEED TO NAMESPACE AND THEN CAN ADD FUN THINGS TO THE TIMER
// ------------------------------------------------------------------

// function Timer(){
// 	this.time = 0;
// }


// Timer.prototype.startTimer = function() {
// 	// complete this startTimer method
// 	var duration = $("#time").val() * 60 // converted to seconds
// 	var counter = setInterval(runTimer, 1000); // will run once per second

// }



