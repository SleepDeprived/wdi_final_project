Dashboard.beginSitting = function() {
	Dashboard.settings = {}
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
	Dashboard.loc = {};
	Dashboard.current_location = navigator.geolocation.getCurrentPosition(Dashboard.showPosition);

}


Dashboard.showPosition = function(position) {
	  Dashboard.loc["latitude"] = position.coords.latitude;
	  Dashboard.loc["longitude"] = position.coords.longitude;
}

Dashboard.findLocation = function(coordinates) {
	$.ajax({
      dataType: "json",
      type: "GET",
      url: "/find_location?coordinates"
    }).done(function(data){
      loc = data;
      console.log(data);
  }); 
}
