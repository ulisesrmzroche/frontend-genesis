import express from 'express';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpack from 'webpack';
import ENV from './../../config/environment';
import appWebpackConfig from './../../config/app.webpack.config';
import Router from './router';

class WebServer {
  constructor(attrs) {
    this.server = express();
    this.port = attrs && attrs.port ? attrs.port : 8080;
    this.configureMiddleware();
  }

  configureMiddleware() {
    console.log('config middeware');
    this.server.use(express.static(`${ENV.ROOT_PATH}/dist`));

    const compiler = webpack(appWebpackConfig);
    console.log(appWebpackConfig.output.path);
    if (ENV.environment !== 'production') {
      this.server.use(webpackDevMiddleware(compiler, {
        publicPath: appWebpackConfig.output.publicPath,
        stats: {
          colors: true,
        },
        lazy: true,
      }));
      this.server.use(webpackHotMiddleware(compiler));
    }
    this.server.use(Router);
  }

  start() {
    this.server.listen(this.port, () => {
      console.log(`Project now running on http://localhost:${this.port}`);
    });
  }
}

export default WebServer;
