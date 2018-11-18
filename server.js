var express = require("express");
var app = express();
var port = 3000;

var middleWare = {
    requireAuthentication : function(req, res, next){
        console.log("Özel Root Girildi");
        next();
    },
    logger: function(req, res, next){
        console.log(req.method + " " + req.originalUrl );
        next();
    }
}

app.use(middleWare.logger);

app.get("/hakkimda", middleWare.requireAuthentication, function(req, res){
    res.send("Hakkımda Sayfası");
})


app.use(express.static(__dirname + "/public"));


app.listen(port, function(){
    console.log("Express server " + port + " nolu portu dinliyor...");    
});
