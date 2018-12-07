function getWeather() {
    var x = document.getElementById("weather-form");
    var city = x[0].value;
    var jsonRequest = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&APPID=146694a4bd2586a32740cd1953cc0a94";
    $.getJSON(jsonRequest,function (json) {
        parse(json);
   });
}

/**
 * Treat the complete json object returned from the API call.
 */
function parse(json) { 
    var weather = json.weather;
    var main = json.main;
    var weath = weather[0].main;
    treatWeather(weath);
    $('#weather-inf-temp').text("Température à " + json.name + " : " + main.temp + " °C");
    $('#weather-inf-hum').text("Humidité : " + main.humidity + "%");
    $('#weather-inf-cloud').text("Nuage : " + json.clouds.all + "%");
}

/**
 * Translate the current weather in french and add a little icon next to the data. 
 */
function treatWeather(weather) {
    var img = "<img src=\"img\/"
    switch(weather) {
        case "Drizzle": weather = "Bruine"; img += "rain.jpg\" />"; break;
        case "Mist": weather = "Brouillard"; img += "mist.jpg\" />"; break;
        case "Snow": weather = "Neige"; img += "snow.jpg\" />"; break;
        case "Rain": weather = "Pluie"; img += "rain.jpg\" />"; break;
        case "Clouds": weather = "Nuage"; img += "mist.jpg\" />"; break;
        case "Haze": weather = "Brume"; img += "mist.jpg\" />"; break;
        case "Clear": weather = "Dégagé"; img += "sun.jpg\" />"; break;
        default: img = ""; break;
    }
    $('#weather-inf-wea').html(img);
    $('#weather-inf-wea').append(weather);
}