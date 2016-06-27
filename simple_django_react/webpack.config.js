var path = require("path")
var webpack = require('webpack')
var BundleTracker = require('webpack-bundle-tracker')
require('es6-promise').polyfill(); //Enable css-loader.

module.exports = {
  context: __dirname,

  entry: './assets/js/index', // entry point of our app. assets/js/index.js should require other js modules and dependencies it needs

  output: {
      path: path.resolve('./assets/bundles/'),
      filename: '[name].js',
  },

  plugins: [
    new BundleTracker({filename: './webpack-stats.json'}),
  ],

  module: {
    loaders: [
      { test: /\.jsx?$/, 
        exclude: /node_modules/, 
	loader: 'babel',
	query: {presets:['react']}
      }, // to transform JSX into JS.
      { test: /\.css$/, 
        loader: "style-loader!css-loader"
      }, // to get css stylesheets.
    ],
  },

  resolve: {
    modulesDirectories: ['node_modules', 'bower_components'],
    extensions: ['', '.js', '.jsx']
  },
}
