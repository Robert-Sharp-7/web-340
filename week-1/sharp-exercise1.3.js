var url = require('url');

var parsedURL = url.parse('https://www.123example.org/profile?name=sharp');

/*the following console.log()'s log the protocol, host,
and query respectively */

console.log(parsedURL.protocol); 
console.log(parsedURL.host);
console.log(parsedURL.query);