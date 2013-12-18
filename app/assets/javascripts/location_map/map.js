var googleMap = googleMap || {};

var loc = {};

// ajax request
googleMap.getLocation = function() {
  if (window.location.pathname === '/') {
    console.log("home path");
    navigator.geolocation.getCurrentPosition(googleMap.showPosition);
  } else {
    console.log("other path");
    $.ajax({
      dataType: "json",
      type: "GET",
      url: window.location.pathname
    }).done(function(data){
      loc = data;
      console.log(loc.latitude);
      console.log(data);
      googleMap.createMap();
      googleMap.addPin();
    });
  }
};

googleMap.getLocations = function() {
  $.ajax({
    dataType: "json",
    type: "GET",
    url: "/locations"
  }).done(function(data){
    locs = data;
    console.log(data);
  });
};

// creates a map around the location after dom load
googleMap.createMap = function() {

  var mapOptions = {
    center: new google.maps.LatLng(loc.latitude, loc.longitude),
    zoom: 15,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    styles: [{featureType:"landscape",stylers:[{saturation:-100},{lightness:65},{visibility:"on"}]},{featureType:"poi",stylers:[{saturation:-100},{lightness:51},{visibility:"simplified"}]},{featureType:"road.highway",stylers:[{saturation:-100},{visibility:"simplified"}]},{featureType:"road.arterial",stylers:[{saturation:-100},{lightness:30},{visibility:"on"}]},{featureType:"road.local",stylers:[{saturation:-100},{lightness:40},{visibility:"on"}]},{featureType:"transit",stylers:[{saturation:-100},{visibility:"simplified"}]},{featureType:"administrative.province",stylers:[{visibility:"off"}]/**/},{featureType:"administrative.locality",stylers:[{visibility:"off"}]},{featureType:"administrative.neighborhood",stylers:[{visibility:"on"}]/**/},{featureType:"water",elementType:"labels",stylers:[{visibility:"on"},{lightness:-25},{saturation:-100}]},{featureType:"water",elementType:"geometry",stylers:[{hue:"#ffff00"},{lightness:-25},{saturation:-97}]}]
  };

  map = new google.maps.Map(document.getElementById("gmap-canvas"), mapOptions);

};

// grab data for a specific location by location_id

googleMap.addPin = function() {
  var locLatLng = new google.maps.LatLng(loc.latitude, loc.longitude);
  var marker = new google.maps.Marker({
    position: locLatLng,
    title: loc.name
  });

  marker.setMap(map);

};


googleMap.showPosition = function(position) {
  loc["latitude"] = position.coords.latitude;
  loc["longitude"] = position.coords.longitude;
  googleMap.createMap();
  googleMap.addPin();
}

$(document).ready(function(){
  googleMap.getLocation();
  googleMap.getLocations();

  if (locs.locations.length > 0 && window.location.pathname === '/') {
    for (i=0; i<locs.locations.length; i++) {
      var location = locs[i];
        googleMap.addPin(location);
      }
    }
});




