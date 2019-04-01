const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Caching'
    })
  ],
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist')
  },

  optimization: {

    // splits runtime code into separate chunk, in this case it creates a single runtime bundle for all chunks 
    runtimeChunk: 'single',
    splitChunks: {

      // separateing vendor chunks (aka libraries/packages) as they are less likely to change compared to local source code
      // allows users to request even less info from server to stay up to date
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        }
      }
    }
  }
};