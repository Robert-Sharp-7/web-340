//app.js assignment for Web 340 Milestone assignments
//author: Professor Krasso
//modified by: Robert Sharp

//requirement statements
var express = require("express");
var http = require("http");
var path = require("path");
var logger = require("morgan");
var mongoose = require("mongoose");
var helmet = require("helmet");
var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
var csrf = require("csurf");


//set up csurf protection
var csrfProtection = csrf({cookie: true});

//initializes express
var app = express();

var mongoDB = "mongodb://robert.sharp:password@ds159180.mlab.com:59180/ems"
mongoose.connect(mongoDB, {
    useMongoClient: true
});

mongoose.Promise = global.Promise;
var db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connection error: "));
db.once("open", function() {
    console.log("Application connected to mLab MongoDB instance");
});
//Mongo databse connection string
//utilizes my username: robert.sharp
//and password: password


app.set("views", path.resolve(__dirname, "views"));
//this says that the views are in the views directory

app.set("view engine", "ejs");
//this tells the application to view it using ejs

//application's port variable
app.set("port", process.env.PORT || 8080);

//use statements
app.use(logger("short"));
app.use(helmet.xssFilter());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(cookieParser());
app.use(csrfProtection);

app.use(function(request, response, next){
    var token = request.csrfToken();
    response.cookie('XSRF-TOKEN', token);
    response.locals.csrfToken = token;
    next();
});
//http calls
app.get("/", function(request, response){
    response.render("index",{
        title: "HOME PAGE",
    });
});

app.get("/new", function (request, response){
    response.render("new", {
        title: "This is the New Page"
    })
})

app.get("/list", function(request, response){
    entry.find({}, function(error, entries){
        if(error) throw error;

        response.render("list", {
            title: "Entry List",
            entry: entries
        });
    });
});

app.post("/process", function(request, response){
    console.log(request.body.txtName);
    response.redirect("/");
});
//the get function has the parameters of request and response,
//and the response is to render the index page with the title of "HOME PAGE"

//modified the createServer function
http.createServer(app).listen(app.get("port"), function(){
    console.log("Application started on port" + app.get("port")) });
//this creates the server on the specified port, and logs the confirmation message to the console