var weatherApp = (function(angular){
    'use strict'

        var app = angular.module("WeatherApp",[]);

        app.constant("WEATHER_LUCY",{
            OPEN_WEATHER_URL : "http://api.openweathermap.org/data/2.5/weather?q={cityName}&mode=json&units=metric&appid=<appId>",
            LOGIN_URL:"/login",
            CITIES_URL:"/allCities"
        });

        return app;


})(angular)