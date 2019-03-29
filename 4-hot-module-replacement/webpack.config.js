const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  mode: 'development',

  entry: {
    app: './src/index.js',
  },

  // source maps useful for tracking down errors in bundled files
  devtool: 'inline-source-map',

  // serves files from dist on localhost:8080 (default)
  // webpack-dev-server doesnt output any files after compiling, it keeps bundles in memory 
  // and serves them as if they were real files mounted at the servers root path
  // *if page expects bundle files in diff path, can change with publicPath option
  devServer: {
    contentBase: './dist',
    hot: true
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },

  plugins: [
    // cleans the dist folder on each build to ensure files are actually being used
    new CleanWebpackPlugin(),

    // generates a new index.html file with bundles injected (will replace previous index.html file if it exists)
    new HtmlWebpackPlugin({
      title: 'Output Management'
    }),

    // HMR
    new webpack.HotModuleReplacementPlugin()
  ],

  output: {
    // dynamically create bundle names based on entry points
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  }
};