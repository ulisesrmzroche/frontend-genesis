const path = require('path');

const ENV = {
  environment: process.env.NODE_ENV || 'development'
  ROOT_PATH: path.resolve(__dirname, './..'),
}

module.exports = ENV;
