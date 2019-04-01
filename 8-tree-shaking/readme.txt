Tree Shaking: 
--> Shakes the code to determine which imports/exports are not being used, aka dead code.
--> Removes the dead code from production build to reduce code size thus increasing performance.

In order to use tree shaking:
1. Use ES2015 module syntax (import and export)
2. Ensure no compiler transforms the ES2015 syntax into CommonJs modules 
    (which is default behavior of Babel preset | see more: https://babeljs.io/docs/en/babel-preset-env#modules)
3. Add 'sideEffects' property to projects package.json file
4. Use mode: 'production' webpack config option to enable varios optimizations including minification and treeshaking