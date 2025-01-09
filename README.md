# Node.js Server Crash Under Load

This repository demonstrates a common issue in Node.js servers: crashing under heavy load due to a lack of concurrency handling and proper error handling. The initial code uses a simple HTTP server that doesn't handle concurrent requests efficiently.  This results in a server crash when many requests hit simultaneously. The improved version addresses this using a more robust approach.

## Bug
The provided `bug.js` demonstrates a Node.js HTTP server vulnerable to crashing under load. The server doesn't use any mechanism for handling concurrent requests efficiently, leading to crashes and 500 Internal Server Errors.

## Solution
The `bugSolution.js` file provides a solution that utilizes the `cluster` module to create multiple worker processes to handle concurrent requests, thereby increasing the server's capacity to handle a large number of simultaneous connections and preventing crashes.  It also includes improved error handling.

## How to reproduce the bug
1. Clone the repository.
2. Run `node bug.js`.
3. Send a large number of simultaneous requests to the server using a tool like `ab` (Apache benchmark) or a similar load testing tool.  Observe that the server will eventually crash.

## How to test the solution
1. Run `node bugSolution.js`
2. Repeat the same load testing process as above. The server should now handle the requests without crashing.