var express = require("express");

var http = require("http");

var path = require("path");

var logger = require("morgan");

var app = express();

app.set("views", path.resolve(__dirname, "views"));//views are in views directory

app.set("view engine", "ejs");//use ejs view engine

app.use(logger("short"));
//below app.get() functions render all the .ejs files
app.get("/", function(request, response) {

    response.render("index", {//

        message: "home page"

    });

});

app.get("/about", function(request, response) {

    response.render("about", {

        message: "about page"

    });

});

app.get("/contact", function(request, response) {

    response.render("contact", {

        message: "contact page"

    })

});

app.get("/products", function(request, response) {

   response.render("products", {

       message: "products page"

   });

});

http.createServer(app).listen(8080, function() {
//create server on port 8080
   console.log("Application started on port 8080.");
//server confirmation message
});