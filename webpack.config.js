const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

const WEB_TITLE = 'Smart parrot frontend';

module.exports = {
  entry: './src/main.js',
  devServer: {
    overlay: true,
    proxy: {
      '/api': {
        target: 'https://api.myjson.com/bins/10ospy',
        pathRewrite: { '^/api': '' },
        secure: false,
      },
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  output: {
    filename: './bundle.js',
    path: path.join(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['babel-loader', 'eslint-loader'],
      },
      {
        test: /\.css$/,
        include: /node_modules/,
        loaders: ['style-loader', 'css-loader'],
      },
      {
        test: /\.vue$/,
        loaders: ['vue-loader', 'eslint-loader'],
      },
      {
        test: /\.(png|jp(e*)g|svg|gif)$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 30000,
            name: 'assets/[name].[ext]',
          },
        }],
      },
    ],
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      include: /\.js$/,
      minimize: true,
      sourceMap: true,
    }),
    new HtmlWebpackPlugin({
      template: 'index.html',
      title: WEB_TITLE,
      inject: true,
      hash: true,
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
    }),
  ],
};
