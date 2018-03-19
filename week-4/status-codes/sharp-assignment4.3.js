var express = require("express");
var http = require("http");

var app = express();

app.get("/not-found", function(request, response){
    //the strings in the get() functions are the requests, and the error code and 
    //messages are the response
    response.status(404);

    response.json({
        error: "There's nothing here..."

    })

});

app.get("/ok", function(request, response){

    response.status(200);
    //200 is the good set of codes
    response.json({

        message: "Everything's all set up!"

    })

});

app.get("/not-implemented", function(request, response){

    response.status(501);
    //500 series codes are for server type errors, while 400's are user error
    response.json({

        error: "This page isn't set up yet..."

    })

});

http.createServer(app).listen(8080, function(){

    console.log("Application started on port 8080!");

});
