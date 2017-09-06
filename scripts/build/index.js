const webpack = require('webpack');
const del = require('del');


const appConfig = require('./../../config/app.webpack.config');
const serverConfig = require('./../../config/server.webpack.config');

const build = (config) => {
  return new Promise(function(resolve, reject) {
    return webpack(config, (err, stats)=>{
      if (err) return reject(new Error(err));
      return resolve();
    });
  });
}

const buildServer = () => {
  console.log('Building Server...');
  return build(serverConfig);
}

const buildApp = () => {
  console.log('Building App...');
  return build(appConfig);
}

const cleanProject = () => {
  return new Promise(function(resolve, reject) {
    return del(['dist/*', 'tmp/*']).then((paths)=>{
      resolve();
    }).catch(()=>{
      reject();
    })
  });
}

cleanProject().then(()=>{
  buildApp().then(()=>{
    buildServer();
  }).catch((e)=>{
    console.log(e);
  })
}).catch((e)=>{
  console.log(e);
})
