const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');

module.exports = {
  entry: {
    app: './src/index.js',
    print: './src/print.js'
  },

  plugins: [
    // cleans the dist folder on each build to ensure files are actually being used
    new CleanWebpackPlugin(),

    // generates a new index.html file with bundles injected (will replace previous index.html file if it exists)
    new HtmlWebpackPlugin({
      title: 'Progressive Web App'
    }),

    new WorkboxPlugin.GenerateSW({
      // these options encourage the ServiceWorkers to get in there fast 
      // and not allow any straggling "old" SWs to hang around
      clientsClaim: true,
      skipWaiting: true  
    })
  ],

  output: {
    // dynamically create bundle names based on entry points
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
};