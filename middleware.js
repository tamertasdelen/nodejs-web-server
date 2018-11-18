module.exports =  middleWare = {
    requireAuthentication : function(req, res, next){
        console.log("Özel Root Girildi");
        next();
    },
    logger: function(req, res, next){
        console.log(req.method + " --> " + req.originalUrl );
        next();
    }
}





