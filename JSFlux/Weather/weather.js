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
    var img = "";
    switch(weather) {
        case "Drizzle": weather = "Bruine"; img = "<i class=\"fas fa-cloud-rain\"></i>"; break;
        case "Mist": weather = "Brouillard"; img = "<i class=\"fa fa-cloud\"></i>"; break;
        case "Snow": weather = "Neige"; img = "<i class=\"fa fa-snowflake\"></i>"; break;
        case "Rain": weather = "Pluie"; img = "<i class=\"fa fa-cloud-rain\"></i>"; break;
        case "Clouds": weather = "Nuage"; img = "<i class=\"fa fa-cloud\"></i>"; break;
        case "Haze": weather = "Brume"; img = "<i class=\"fa fa-cloud\"></i>"; break;
        case "Clear": weather = "Dégagé"; img = "<i class=\"fa fa-sun\"></i>"; break;
        default: break;
    }
    $('#weather-inf-wea').html(img);
    $('#weather-inf-wea').append(weather);
}