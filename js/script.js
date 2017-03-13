$(document).ready(function() {
  'use strict';

  function showMap(position) {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;

    var mapOptions = {
      center: new google.maps.LatLng(latitude, longitude),
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.HYBRID
    };

    var map = new google.maps.Map(document.getElementById("map"), mapOptions);
  }

  if (Modernizr.geolocation) {
    navigator.geolocation.getCurrentPosition(showMap);
  } else {
    console.log('geolocation not supported');
  }

});
