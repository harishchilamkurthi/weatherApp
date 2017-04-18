(function(angular,app){
 'use strict'

       app.controller("WeatherController",function($scope,SharedService,WeatherService,cityListService){

            var ctrl = this;
    
            $scope.$watch(function(){
                
                return SharedService.getSecurityToken();
            }, function(newValue,oldValue){
                   if(newValue){
                        cityListService.fetchCities().then(function(response){
                            ctrl.cities = response.data;
                        }).
                        catch(function(err){
                            console.log(err);
                        });
                        ctrl.authToken = newValue;
                   }
            });

            ctrl.displayWeather = function(selectedCity){

                
                WeatherService.getWeather(ctrl.selectedCity).
                then(function(response){
                    console.log(response);
                    ctrl.weatherData = response.data;
                    ctrl.icon = "http://openweathermap.org/img/w/" + ctrl.weatherData.weather[0].icon + ".png";
                })

            }

        });



})(angular,weatherApp);