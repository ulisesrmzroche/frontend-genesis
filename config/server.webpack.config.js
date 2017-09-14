const webpack = require('webpack');
const dotenv = require('dotenv');
const webpackNodeExternals = require('webpack-node-externals');
const ENV = require('./environment');

dotenv.load();

module.exports = {
  context: ENV.ROOT_PATH,
  entry: {
    api: `${ENV.ROOT_PATH}/src/server/index.js`,
  },
  output: {
    path: `${ENV.ROOT_PATH}/dist`,
    filename: ENV.environment === 'production' ? `server.[hash].js`
                                               : `server.js`,
    publicPath: '/',
    libraryTarget: 'commonjs2',
  },
  target: 'node',
  externals: [webpackNodeExternals()], // in order to ignore all modules in node_modules folder
  plugins: [
    new webpack.BannerPlugin({
      banner: 'require("source-map-support").install();',
      raw: true,
      entryOnly: false,
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': `"${process.env.NODE_ENV ? process.env.NODE_ENV : 'development'}"`,
    }),
  ],

  resolve: {
    extensions: ['.js'],
    alias: {
    },
  },

  node: {
    __filename: true,
    __dirname: false,
  },

  devtool: 'sourcemap',

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: `${ENV.ROOT_PATH}/tmp`,
            },
          },
        ],
        exclude: /(node_modules|bower_components)/,
        include: `${ENV.ROOT_PATH}/src`,
      },
      // JSON
      {
        test: /\.json?$/,
        use: {
          loader: 'json-loader',
        },
      },
    ],
  },
};
