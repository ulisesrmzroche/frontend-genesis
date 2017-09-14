const webpack = require('webpack');
const dotenv = require('dotenv');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ENV = require('./environment');

dotenv.load();

module.exports = {
  context: ENV.ROOT_PATH,
  entry: [
    `${ENV.ROOT_PATH}/src/app`,
    'webpack-hot-middleware/client',
  ],
  output: {
    path: `${ENV.ROOT_PATH}/dist/`,
    filename: ENV.environment === 'production' ? 'app.[hash].js'
                                               : `app.js`,
    publicPath: '/',
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.jsx$/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: `${ENV.ROOT_PATH}/tmp`,
          },
        },
        exclude: /node_modules/,
        include: `${ENV.ROOT_PATH}/src/app`,
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
  resolve: {
    extensions: ['.js', '.jsx', '.json']
  },
  devServer: {
    contentBase: `${ENV.ROOT_PATH}/dist`,
    hot: true
  },
  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new HtmlWebpackPlugin({
      template: `${ENV.ROOT_PATH}/public/index.html`,
      filename: 'index.html',
      inject: 'body',
      title: 'Frontend Genesis',
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': `"${process.env.NODE_ENV ? process.env.NODE_ENV : 'development'}"`,
    }),
  ],
};
