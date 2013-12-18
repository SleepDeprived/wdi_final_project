$(document).ready(function(){
  if (window.location.pathname === '/') {
    Map.initHome();
    Map.findLocation();
  } else {
    Map.initShow();
  }

});


// -----------------------
// Creates map and puts locations on page
// -----------------------

Map = function(center) {

  var mapOptions = {
    center: new google.maps.LatLng(center.latitude, center.longitude),
    zoom: 15,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    styles: [{featureType:"landscape",stylers:[{saturation:-100},{lightness:65},{visibility:"on"}]},{featureType:"poi",stylers:[{saturation:-100},{lightness:51},{visibility:"simplified"}]},{featureType:"road.highway",stylers:[{saturation:-100},{visibility:"simplified"}]},{featureType:"road.arterial",stylers:[{saturation:-100},{lightness:30},{visibility:"on"}]},{featureType:"road.local",stylers:[{saturation:-100},{lightness:40},{visibility:"on"}]},{featureType:"transit",stylers:[{saturation:-100},{visibility:"simplified"}]},{featureType:"administrative.province",stylers:[{visibility:"off"}]/**/},{featureType:"administrative.locality",stylers:[{visibility:"off"}]},{featureType:"administrative.neighborhood",stylers:[{visibility:"on"}]/**/},{featureType:"water",elementType:"labels",stylers:[{visibility:"on"},{lightness:-25},{saturation:-100}]},{featureType:"water",elementType:"geometry",stylers:[{hue:"#ffff00"},{lightness:-25},{saturation:-97}]}]
  };

  this.googleMap = new google.maps.Map(document.getElementById("gmap-canvas"), mapOptions);
};

// Data Functions
Map.getLocation = function() {
  return $.ajax({
    dataType: "json",
    type: "GET",
    url: window.location.pathname
  })
};

Map.getLocations = function() {
  return $.ajax({
    dataType: "json",
    type: "GET",
    url: "/locations"
  })
};



Map.prototype.addPin = function(loc) {
  var locLatLng = new google.maps.LatLng(loc.latitude, loc.longitude);
  var marker = new google.maps.Marker({
    position: locLatLng,
    title: loc.name
  });

  marker.setMap(this.googleMap);
};


Map.initHome = function() {
  navigator.geolocation.getCurrentPosition(function(position) {
    var loc = {
      latitude: position.coords.latitude,
      longitude: position.coords.longitude
    }

    var map = new Map(loc);
    map.addPin(loc);

    Map.getLocations().done(function(locs) {
      for (var i=0; i<locs.length; i++) {
        var loc = locs[i];
        map.addPin(loc);
      }
    });

  });


}

Map.initShow = function() {

  Map.getLocation().done(function(loc) {
    var map = new Map(loc);
    map.addPin(loc);
  })
}



// -----------------------
// put text about nearby locations on page
// -----------------------

Map.findLocation = function(){
  Map.current_location = navigator.geolocation.getCurrentPosition(Map.showPosition);
}

Map.showPosition = function(position) {
  Map.loc = {};
  Map.loc["latitude"] = position.coords.latitude  // Math.round(position.coords.latitude * 10000000) / 10000000;
  Map.loc["longitude"] = position.coords.longitude  // Math.round(position.coords.longitude * 10000000) / 10000000; 
  // Map.position_string = "latitude=" + Map.loc["latitude"] + "&longitude=" + Map.loc["longitude"];
  debugger;
  Map.nearbyLocations(Map.loc);
}

Map.nearbyLocations = function(latlong) {
  debugger;
  $.ajax({
      dataType: "json",
      type: "GET",
      url: "/nearby_locations",
      data: latlong
    }).done(function(response){
      debugger;
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




