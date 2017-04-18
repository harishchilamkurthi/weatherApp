(function(angular,app){
 'use strict'

   app.service("WeatherService",function($http,WEATHER_LUCY){
            this.getWeather = function(cityName){
                console.log("CityName " + cityName);
                var openWeatherURL = WEATHER_LUCY.OPEN_WEATHER_URL.replace('{cityName}',cityName)
                return $http.get(openWeatherURL);
             };


        });

        app.service("SharedService",function(){
             var security_token = "";
            this.setSecurityToken = function(securityToken){
                security_token = securityToken;
            };

            this.getSecurityToken = function(){
                return security_token;
            }
            
        })
        app.service("LoginService",function($http,WEATHER_LUCY){
           
            this.login = function(loginData){
                return $http.post(WEATHER_LUCY.LOGIN_URL,loginData);
            };

        

        });

        app.service("cityListService",function($http,WEATHER_LUCY){

            this.fetchCities = function(){
                return $http.get(WEATHER_LUCY.CITIES_URL);

            }

        })

          app.factory('LoginInterceptor',function(SharedService){

            return{

                request:function(config){
                    if(config.url.startsWith("/")){
                        config.headers['Auth-Token'] = SharedService.getSecurityToken();
                    }  
                    return config;
                }

              


            }

        });


        app.config(function($httpProvider){
            $httpProvider.interceptors.push('LoginInterceptor')

        });



})(angular,weatherApp);