Dashboard.beginSitting = function() {
	Dashboard.settings = {}
	Dashboard.getLocation();
	$("#start-sitting-button").hide();
	$("#end-sitting-button").show();
	// $("#end-sitting-button").data(); THIS IS GOING TO BE THE RECORD ID OF THE NEW SITTING CREATED
	if ($("#timer_toggle").val() === 1) {
		Dashboard.settings["commit_clock_on"] = true;
		Dashboard.settings["commit_clock_duration"] = $("#time").val()
	}


}

Dashboard.endSitting = function () {
	$("#end-sitting-button").hide();
	$("#start-sitting-button").show();
}


// to create a sitting I need to:
	// get the current user_id (RAILS)
	// get the current location_id
	// get the current time (RAILS)
		// optional for MVP
			// detect if the commit clock is on the page
			// detect the time value in the commit clock
	// capture the 


// to end a sitting I need to: 

// get the current location_id
	// have an issue with asynchronous return

Dashboard.getLocation = function(){
	Dashboard.current_location = navigator.geolocation.getCurrentPosition(Dashboard.showPosition);
}

Dashboard.showPosition = function(position) {
	Dashboard.loc = {};
  Dashboard.loc["latitude"] = Math.round(position.coords.latitude * 10000000) / 10000000;
  Dashboard.loc["longitude"] = Math.round(position.coords.longitude * 10000000) / 10000000; 
  Dashboard.findLocation(Dashboard.loc)
  debugger;
}

Dashboard.findLocation = function(coordinates) {
	$.ajax({
      dataType: "json",
      type: "GET",
      url: "/find_location?coordinates"
    }).done(function(response){
    	if (response.address === "") {
    		// alert("Please add your location!")
	     window.webkitNotifications.createNotification('rails.png', "We can't find your location", "Please add your location.").show();
	     // make a bunch of different commit messages and sample them -- purely to keep people intereted in reading the messages
    	} else {
      loc = response;
      console.log(response);
      $("#current-sitting-location").text(response.address).data("id", "response.id")
      debugger;
      }
  }); 
}
