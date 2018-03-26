/*
============================================
; Title: Assignment 5.2
; Author: Professor Krasso
; Date: 25 March 2017
; Modified By: Robert Sharp
; Description: This program demonstrates the
; use of templating strings using EJS
;===========================================
*/
var express = require("express");
var http = require("http");
var path = require("path");
var app = express();

app.set("views", path.resolve(__dirname, "views"));

app.set("view engine", "ejs");

//personally supplied name value array
var n = [

    "Rick",

    "Beth",

    "Morty",

    "Summer",
];
//routes
app.get("/", function(request, response){


    response.render("index", {

        names: n

    })

});
//create the server
http.createServer(app).listen(8080, function(){

    console.log("Application started on port 8080!");
    //verifies server is started on right port
});
