$(document).ready(function() {
  $.getJSON('https://ipapi.co/json', getWeather, 'jsonp');
});

var getWeather = function(data) {
  $.getJSON('https://api.openweathermap.org/data/2.5/weather', {
    lat: data.latitude,
    lon: data.longitude,
    appid: "23a84c27539a251a076e403fa6a0e3a9"
  }, showWeather, 'jsonp');
};

var showWeather = function(data) {
  $("#degrees").text((Math.round((data.main.temp - 273.15) * 9 / 5) + 32) + "° F");

  $("#degrees").on('click', function() {
    $("#degrees").toggleClass("celsius");
    $("#degrees").toggleClass("fahrenheit");

    if ($(this).hasClass("fahrenheit")) {
      $("#degrees").text(setCelsius());
      return;
    }

    $("#degrees").text(setFahrenheit());
  });

  function setCelsius() {
    var cel = Math.round(data.main.temp - 273.15);
    return cel + "° C";
  };

  function setFahrenheit() {
    return (Math.round((data.main.temp - 273.15) * 9 / 5) + 32) + "° F";
  };

  $("#description").text(data.weather[0].description);
  $("#place").html("the weather in <b>" + data.name + "</b> is");

  if (data.main.temp <= 273) {
    $("body").addClass("cold");
  } else if (data.main.temp > 273 && data.main.temp <= 283) {
    $("body").addClass("cool");
  } else if (data.main.temp > 283 && data.main.temp <= 294) {
    $("body").addClass("mild");
  } else if (data.main.temp > 294 && data.main.temp <= 305) {
    $("body").addClass("warm");
  } else {
    $("body").addClass("hot");
  }

  if (data.weather[0].icon == "01d") {
    $("#wicon").removeClass().addClass("wi wi-day-sunny");
  } else if (data.weather[0].icon == "01n") {
    $("#wicon").removeClass().addClass("wi wi-night-clear");
  } else if (data.weather[0].icon == "02d") {
    $("#wicon").removeClass().addClass("wi wi-day-cloudy");
  } else if (data.weather[0].icon == "02n") {
    $("#wicon").removeClass().addClass("wi wi-night-alt-cloudy");
  } else if (data.weather[0].icon == "03d") {
    $("#wicon").removeClass().addClass("wi wi-cloudy");
  } else if (data.weather[0].icon == "03n") {
    $("#wicon").removeClass().addClass("wi wi-cloudy");
  } else if (data.weather[0].icon == "04d") {
    $("#wicon").removeClass().addClass("wi wi-cloudy");
  } else if (data.weather[0].icon == "04n") {
    $("#wicon").removeClass().addClass("wi wi-cloudy");
  } else if (data.weather[0].icon == "09d") {
    $("#wicon").removeClass().addClass("wi wi-showers");
  } else if (data.weather[0].icon == "09n") {
    $("#wicon").removeClass().addClass("wi wi-showers");
  } else if (data.weather[0].icon == "10d") {
    $("#wicon").removeClass().addClass("wi wi-day-rain");
  } else if (data.weather[0].icon == "10n") {
    $("#wicon").removeClass().addClass("wi wi-night-alt-rain");
  } else if (data.weather[0].icon == "11d") {
    $("#wicon").removeClass().addClass("wi wi-thunderstorm");
  } else if (data.weather[0].icon == "11n") {
    $("#wicon").removeClass().addClass("wi wi-thunderstorm");
  } else if (data.weather[0].icon == "13d") {
    $("#wicon").removeClass().addClass("wi wi-snow");
  } else if (data.weather[0].icon == "13n") {
    $("#wicon").removeClass().addClass("wi wi-snow");
  } else if (data.weather[0].icon == "50d") {
    $("#wicon").removeClass().addClass("wi wi-fog");
  } else if (data.weather[0].icon == "50n") {
    $("#wicon").removeClass().addClass("wi wi-fog");
  } else {
    $("#wicon").removeClass().addClass("wi wi-cloud-refresh");
  }

};