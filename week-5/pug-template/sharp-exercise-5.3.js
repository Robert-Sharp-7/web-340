/*
============================================
; Title: Assignment 5.3
; Author: Professor Krasso
; Date: 25 March 2017
; Modified By: Robert Sharp
; Description: This program demonstrates the
; use of templating strings using Pug
;===========================================
*/

var express = require("express");
var http = require("http");
var pug = require("pug");
var path = require("path");
var app = express();

app.set("views", path.resolve(__dirname, "views"));
//instruction to look for the index within views directory and use Pug as view engine
app.set("view engine", "pug");

app.get("/", function(request, response) {
    //instruction to render the index file
    response.render("index", {
        //customized message
        message: "This welcoming brought to you by Pug!"

    });

});

//creates the server
http.createServer(app).listen(8080, function() {
    //server creation success message
    console.log("Application started on port 8080!");

});

