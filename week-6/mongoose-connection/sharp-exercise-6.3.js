//requirements like that of previous server files
var express = require("express");
var http = require("http");
var logger = require("morgan");
var mongoose = require("mongoose");
//this is the mongoose wiring

var mongoDB = "mongodb://robert.sharp:password@ds159180.mlab.com:59180/ems"
//Mongo databse connection string
//utilizes my username: robert.sharp
//and password: password

mongoose.connect(mongoDB, {
    
    useMongoClient: true
    //deprecated feature
});

mongoose.Promise = global.Promise;

var db = mongoose.connection;

db.on('error', console.error.bind(console, "MongoDB connection error: "));
//on Mongo database connection error message

db.once("open", function(){
//once means once the mLab connection is established
    console.log("Application connected to mLab instance");
    //confirmation message for connecting to Mongo Database
});

var app = express();
app.use(logger('dev'));

http.createServer(app).listen(5000, function(){
    console.log("Application started and listening on port 5000!");
});