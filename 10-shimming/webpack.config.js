const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },

  plugins: [

    // basically says to webpack to include lodash's join module wherever it sees the join() function being called
    new webpack.ProvidePlugin({
      join: ['lodash', 'join']
    })
  ]
};