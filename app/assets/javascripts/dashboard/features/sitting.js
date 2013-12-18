Dashboard.beginSitting = function() {
	Dashboard.settings = {};
	// debugger;
	// Dashboard.getLocation();
	$("#start-sitting-button").hide();
	$("#end-sitting-button").show();
	// $("#end-sitting-button").data(); THIS IS GOING TO BE THE RECORD ID OF THE NEW SITTING CREATED
	Dashboard.settings["location_id"] = $("#current-sitting-location").data()["id"]
	if ($("#timer_toggle").val() === "1") {
		Dashboard.settings["commit_clock_on"] = true;
		Dashboard.settings["commit_clock_duration"] = $("#time").val();
	} else {
		Dashboard.settings["commit_clock_on"] = false;
		Dashboard.settings["commit_clock_duration"] = null;
	}

	Dashboard.createSitting(Dashboard.settings);
}


Dashboard.createSitting = function(inputData) {
	$.ajax({
      dataType: "json",
      type: "POST",
      url: "/sittings",
      data: inputData
    }).done(function(response){
    	console.log(response);
  }); 
}


Dashboard.endSitting = function () {
	$("#start-sitting-button").show();
	$("#end-sitting-button").hide();
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


Dashboard.getLocation = function(){
	Dashboard.current_location = navigator.geolocation.getCurrentPosition(Dashboard.showPosition);
}

Dashboard.showPosition = function(position) {
	Dashboard.loc = {};
<<<<<<< HEAD
  Dashboard.loc["latitude"] = position.coords.latitude  // Math.round(position.coords.latitude * 10000000) / 10000000;
  Dashboard.loc["longitude"] = position.coords.longitude  // Math.round(position.coords.longitude * 10000000) / 10000000; 
  Dashboard.position_string = "latitude=" + Dashboard.loc["latitude"] + "&longitude=" + Dashboard.loc["longitude"];
  Dashboard.findLocation(Dashboard.position_string);
=======
  Dashboard.loc["latitude"] = Math.round(position.coords.latitude * 10000000) / 10000000;
  Dashboard.loc["longitude"] = Math.round(position.coords.longitude * 10000000) / 10000000;
  Dashboard.findLocation(Dashboard.loc)
  // debugger;
>>>>>>> origin/master
}

Dashboard.findLocation = function(string) {
	$.ajax({
      dataType: "json",
      type: "GET",
      url: "/location_by_coords?" + string
    }).done(function(response){
    	if (response === null) {
    		// alert("Please add your location!")
	     window.webkitNotifications.createNotification('rails.png', "We can't find your location", "Please add your location.").show();
	     // make a bunch of different commit messages and sample them -- purely to keep people intereted in reading the messages
    	} else {
      console.log(response);
      $("#current-sitting-location").text("Current Location: " + response.name).data("id", response.id)
      }
  });
}


// HOW TO SOLVE THE ISSUE THAT THE LAT/LONG DOESN'T MATCH ON SEARCH
	// reverse search for address using lat/long



