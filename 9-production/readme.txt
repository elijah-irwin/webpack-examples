Ex. Product Setup

* Configuring mode: 'production' automatically configures the DefinePlugin plugin which should
signifigantly reduce bundle size if using a library like react.

* Webpack@4+ will minify code by default in production mode by automatically configuring TerserPlugin
--> However, there are other options such as BabelMinifyWebpackPlugin and ClosureWebpackPlugin
--> * If using a diff minification plugin, make sure new choice drops dead code as described in tree shaking,
      and to provide it as the optimization.minimizer.

* Crucial to minimize CSS in production --> need to use css minimizer | https://webpack.js.org/plugins/mini-css-extract-plugin/#minimizing-for-production
* --> Setting optimization.minimizer overrides the defaults so you also gotta specify a JS minimizer