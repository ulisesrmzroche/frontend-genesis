const webpack = require('webpack');
const del = require('del');

const appConfig = require('./../../config/app.webpack.config');
const serverConfig = require('./../../config/server.webpack.config');

const build = (config) => {
  return new Promise(function(resolve, reject) {
    webpack(config, (err, stats)=>{
      if (err) return reject(new Error(err));
      console.log(stats);
      resolve();
    });
  });
}

const buildServer = () => {
  console.log('Building Server...');
  return build(serverConfig).then(()=>{
    console.log('build server'); }).catch((e)=>{
    console.log(e);
  })
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


cleanProject()
.then(()=>{
  return buildServer();
})
.then(()=>{
  return buildApp();
})
.catch((e)=>{
  console.log(e);
});
