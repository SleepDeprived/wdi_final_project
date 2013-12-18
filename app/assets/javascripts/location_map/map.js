$(document).ready(function(){
  if (window.location.pathname === '/') {
    Map.initHome();
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

      var locationsContainer = $("#nearby-location-container")
      for (var i=0; i<locs.length; i++) {
        var loc = locs[i];
        map.addPin(loc);
      }

      var source   = $("#map-result").html();
      var template = Handlebars.compile(source);
      var context = {locations: locs}
      var htmlGeneratedByHandlebars    = template(context);
      debugger
      $("#nearby-location-container").append(htmlGeneratedByHandlebars)

    });

  });


}

Map.initShow = function() {

  Map.getLocation().done(function(loc) {
    var map = new Map(loc);
    map.addPin(loc);
  })
}




