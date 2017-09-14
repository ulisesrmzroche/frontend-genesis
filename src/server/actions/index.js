import express from 'express';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import appWebpackConfig from './../../../config/app.webpack.config';
import ENV from './../../../config/environment';
import Router from './../router';

export function attachRouter(server) {
  console.log('Attaching Router...');
  server.use(Router());
  return server;
}

export function serveStatic(server) {
  console.log('Serve Static Files');
  server.use(express.static(`${ENV.ROOT_PATH}/dist`));
  return server;
}

export function webpackDev(server) {
  console.log('Webpacking...');
  const webpackCompiler = webpack(appWebpackConfig);
  server.use(webpackDevMiddleware(webpackCompiler, {
    publicPath: appWebpackConfig.output.publicPath,
    noInfo: true,
    stats: {
      colors: true,
    },
    lazy: true,
  }));
  server.use(webpackHotMiddleware(webpackCompiler));
  return server;
}

export function configureMiddleware(server) {
  console.log('config middeware');

  // attachRouter(server);

  if (ENV.environment === 'production') {
    serveStatic(server);
  } else {
    webpackDev(server);
  }

  return server;
}
