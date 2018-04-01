app.js

var express = require("express");
var http = require("http");
var path = require("path");
var logger = require("morgan");

var app = express();

app.set("views", path.resolve(__dirname, "views"));
//this says that the views are in the views directory

app.set("view engine", "ejs");
//this tells the application to view it using ejs

app.use(logger("short"));


app.get("/", function(request, response){
    response.render("index",{
        title: "HOME PAGE"
    });
});
//the get function has the parameters of request and response,
//and the response is to render the index page with the title of "HOME PAGE"

http.createServer(app).listen(8080, function(){
    console.log("Application created and listening on port 8080!");
});
//this creates the server on the specified port, and logs the confirmation message to the console