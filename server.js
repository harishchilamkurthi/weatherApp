var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())
app.use(express.static('public'));

 

app.post('/login',function(req,res){
    var loginData = req.body;
    var userId = loginData.userId;
    var password = loginData.password;
    var token = "";
    if(userId === 'Siva' && password === "Allu"){
        token = "lalala"
    }
    
    res.json({securityToken:token});

});

app.get('/allCities',function(req,res){
    var params = req.headers;
    console.log(params['auth-token']);
   var cities = [{name:"London"},
                             {name:"Tokyo"},
                             {name:"Moscow"},
                             {name:"Mumbai"},
                             {name:"Hyderabad"},
                             {name:"Chennai"},
                             {name:"Kolkata"},
                             {name:"Delhi"},
                             {name:'Berlin'},
                             {name:'Dhaka'},
                             {name:'Beijing'},
                             {name:'Melbourne'},
                             {name:'Perth'},
                             {name:'Milwaukee'}]
    
    res.json(cities);

});






var server = app.listen(8080, function () {
   var host = server.address().address
   var port = server.address().port

   console.log("Example app listening at http://%s:%s", host, port)

})