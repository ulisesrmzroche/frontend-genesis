import express from 'express';
import { configureMiddleware } from './actions';

class WebServer {
  constructor(attrs) {
    this.server = express();
    this.port = attrs && attrs.port ? attrs.port : 8080;
  }

  start() {
    this.server = configureMiddleware(this.server);
    this.server.listen(this.port, () => {
      console.log(`Project now running on http://localhost:${this.port}`);
    });
  }
}

export default WebServer;
