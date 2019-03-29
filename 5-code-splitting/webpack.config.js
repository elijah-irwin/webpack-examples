const path = require('path');

module.exports = {
  mode: 'development',

  entry: {
    index: './src/index.js',
    // Manually Split Code Method
    // another: './src/another-module.js'
  },

  output: {
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },

  // Prevent Duplication Method
  // optimization: {
  //   splitChunks: {
  //     chunks: 'all'
  //   }
  // }
};