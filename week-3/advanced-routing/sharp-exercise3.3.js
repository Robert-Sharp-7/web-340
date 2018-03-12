var express = require("express");

var http = require("http");

var path = require("path");

var logger = require("morgan");

var app = express();
//views in views directory
app.set("views", path.resolve(__dirname, "views"));

app.set("view engine", "ejs");

app.use(logger("short"));
//changed to employee id throughout app.get() function
app.get("/:employeeId", function(request, response) {

var employeeId = parseInt(request.params.productId, 10);

    response.render("index", {
//rendered from index.ejs
        employeeId: employeeId

    })

});

http.createServer(app).listen(8080, function() {
//server creation message
    console.log("Application started on port 8080");

});