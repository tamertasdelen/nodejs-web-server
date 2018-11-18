var express = require("express");

var middleWare = require("./middleware");
var app = express();
var port = process.env.PORT || 3000;


app.use(middleWare.logger);

app.get("/hakkimda", middleWare.requireAuthentication, function(req, res){
    res.send("Hakkımda Sayfası");
})


app.use(express.static(__dirname + "/public"));


app.listen(port, function(){
    console.log("Express server " + port + " nolu portu dinliyor...");    
});
