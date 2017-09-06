const webpack = require('webpack');

const appConfig = require('./../../config/server.webpack.config');
const serverConfig = require('./../../config/server.webpack.config');

const build = (config) => {
  return new Promise(function(resolve, reject) {
    return webpack(config, (err, stats)=>{
      if (err) return reject(new Error(err));
      console.log(stats);
      return resolve();
    });
  });
}

const buildServer = () => {
  console.log('Building Server...');
  return build(serverConfig)
}

const buildApp = () => {
  console.log('Building App...');
  return build(serverConfig)
}

buildApp().then(()=>{
  buildServer();
});
