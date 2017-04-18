var origFn = browser.driver.controlFlow().execute;
 browser.driver.controlFlow().execute = function () {
  var args = arguments;
  // queue 100ms wait
  origFn.call(browser.driver.controlFlow(), function () {
  return protractor.promise.delayed(200);   // here we can adjust the execution speed
  });
  return origFn.apply(browser.driver.controlFlow(), args);
 };


describe("Weather app suite",function(){
    beforeEach(function(){
         browser.get("http://localhost:8080/WeatherApp.html");

    });

    afterEach(function(){
        console.log("Test case is completed...");

    });

    xit("Test Login click",function(){
       
        element(by.css('[data-target ="#myModal"]')).click();
        element(by.model("lCtrl.userName")).sendKeys("Siva");
        element(by.model("lCtrl.password")).sendKeys("Allu");
        element(by.buttonText("Login")).click();

        element(by.model("wCtrl.selectedCity")).all(by.css('option[label="Hyderabad"]')).click();

        var allRows = element.all(by.css("div[ng-show='wCtrl.weatherData.main'] .row"));
        var cityRow = allRows.get(0);

        expect(cityRow.element(by.css(".ng-binding")).getText()).toBe("Hyderabad");

        var climateRow = allRows.get(2);

        expect(climateRow.element(by.css(".ng-binding")).getText()).toBe("haze");

        browser.sleep(2000);
    });

    it("Test Login click by Xpath",function(){
       
        element(by.css('[data-target ="#myModal"]')).click();
        element(by.model("lCtrl.userName")).sendKeys("Siva");
        element(by.model("lCtrl.password")).sendKeys("Allu");
        element(by.buttonText("Login")).click();

        element(by.model("wCtrl.selectedCity")).all(by.css('option[label="Hyderabad"]')).click();

       // var allRows = element.all(by.css("div[ng-show='wCtrl.weatherData.main'] .row"));
        var allRows = element.all(by.xpath("//div[@ng-show='wCtrl.weatherData.main']/div"));
        var cityRow = allRows.get(0);

        expect(cityRow.element(by.css(".ng-binding")).getText()).toBe("Hyderabad");

        var climateRow = allRows.get(2);

        expect(climateRow.element(by.css(".ng-binding")).getText()).toBe("haze");

        browser.sleep(2000);
    });

});

