const Server = require('./../../dist/server').default;

const server = new Server({
  port: 8080,
});

server.start();
