const http = require('http');

const requestListener = function (req, res) {
  res.writeHead(200);
  res.end('Hello, World!');
};

const server = http.createServer(requestListener);

server.listen(8080);
console.log('Server is running on port 8080');

// The issue is that the server might crash if a large number of requests arrive at the same time, because it doesn't handle them concurrently.  This would lead to a 500 internal server error for users.

// Additional issue: No error handling for unexpected situations (like network issues).