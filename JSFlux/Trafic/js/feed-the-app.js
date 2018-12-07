

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
		var userLat = position.coords.latitude;
		var userLong = position.coords.longitude;
    var waze = document.getElementById("mapid");
    var src = "https://embed.waze.com/iframe?zoom=12&lat=" + userLat + "&lon=" + userLong;
    waze.setAttribute("src", src);
	});
  } else {
    alert("Geolocation is not supported by this browser.");
  }
}

getLocation();

