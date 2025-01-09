const cluster = require('cluster');
const http = require('http');
const numCPUs = require('os').cpus().length;

// Master process
if (cluster.isMaster) {
  console.log(`Master ${process.pid} is running`);

  // Fork workers.
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker, code, signal) => {
    console.log(`worker ${worker.process.pid} died`);
    cluster.fork();
  });
} else {
  // Worker processes
  const server = http.createServer((req, res) => {
    res.writeHead(200);
    res.end('Hello World!');
  });
  server.on('error', err => {
    console.error('Server error:', err);
  })
  server.listen(8080);
  console.log(`Worker ${process.pid} started`);
}