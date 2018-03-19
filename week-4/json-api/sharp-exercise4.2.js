var express = require('express');
var http = require('http');
var logger = require('morgan');


var app = express();


app.use(logger('dev'));

//I noticed that the req and res params didn't get an error flag in VS Code
//I learned those params can be named anything, but that's fine with me for request/response

app.get('/customer/:id', function(req, res) {

    var id = parseInt(req.params.id, 10);

    res.json({
        //decided to use Ian Kershaw
        firstName: 'Ian',
        lastName: 'Kershaw',
        employeeId: id

    });

});


http.createServer(app).listen(3000, function(){
    console.log('Application started and listening on port 3000');
});