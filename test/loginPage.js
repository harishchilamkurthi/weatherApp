var loginPage=function(){
	this.clickLogin=function(){
		element(by.css('[data-target='#myModal']')).click();
		return.this;
	}
	this.inputUserId=function(){
		element(by.model())
	}
}