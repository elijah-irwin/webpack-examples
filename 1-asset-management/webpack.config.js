const path = require('path');

module.exports = {
  entry: './src/index.js',

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },

  module: {
    rules: [
      
      // css
      {
        // allows you to import './style.css' into file depending on said styling
        // now when module is run, a <style> tag with the stringified css is inserted into the <head> of the html file
        test: /\.css$/,
        use: [
          'style-loader', 
          'css-loader'
        ]
      },

      // images
      {
        // importing files
        // should look on how to minify/optimize files: https://github.com/tcoopman/image-webpack-loader | https://webpack.js.org/loaders/url-loader
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      },

      // fonts
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader'
        ]
      },

      // csv files
      {
        test: /\.(csv|tsv)$/,
        use: [
          'csv-loader'
        ]
      },

      // xml files
      {
        test: /\.xml$/,
        use: [
          'xml-loader'
        ]
      }
    ]
  }
};