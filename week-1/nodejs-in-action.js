Variable declaration:

var http = require("http");

function processRequest(req, res) {

var body = "Hello World, this is Robert Sharp";

    var contentLength = body.length;

    res.writeHead(200, {

        'Content-Length': contentLength,

        'Content-Type': 'text/plain'

    });

    res.end(body);

}

var s = http.createServer(processRequest);

s.listen(8080);