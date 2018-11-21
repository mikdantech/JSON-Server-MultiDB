let jsonServer  = require('json-server');

let server      = jsonServer.create();
let router      = jsonServer.router(require('./database_server.js')());
let middlewares = jsonServer.defaults();


const host_name = 'http://localhost';
const host_port = 3001;

server.use(middlewares);
server.use(router);
server.listen(3001, function () {
  console.log('Multi DB - JSON Server is running.');
  console.log(host_name + ':' + host_port);
});
