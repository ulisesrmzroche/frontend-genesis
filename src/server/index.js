import express from 'express';
import ENV from './../../config/environment';

class WebServer {
  constructor(attrs) {
    this.server = express();
    this.port = attrs && attrs.port ? attrs.port : 8080;
    this.server.use(express.static(`${ENV.ROOT_PATH}/dist`))
  }
  start() {
    this.server.listen(this.port, ()=>{
      console.log(`Project now running on http://localhost:${this.port}`);
    })
  }
};

export default WebServer;
