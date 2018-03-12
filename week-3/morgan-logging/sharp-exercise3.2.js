var express = require("express");

var http = require("http");

var path = require("path");

var logger = require("morgan");

var app = express();
//Express: views are in 'views' directory

app.set("views", path.resolve(__dirname, "views"));

//use EJS view engine
app.set("view engine", "ejs"); 

app.use(logger("short"));

app.get("/", function (request, response) {
    //tells function to render the index file as the response
    response.render("index", {
        //customized message to be rendered on the index.ejs
        message: "Welcome to Robert's Morgan Logger Example!"

    });

});

http.createServer(app).listen(3000, function() {
    //confirmation of server creation
    console.log("Application started on port 3000");

});
