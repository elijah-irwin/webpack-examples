Quick Info: Lazy Loading

--> Lazy, aka 'on demand' is pretty much splitting code at logical breakpoints, and then loading it once the user requires/will require a new block of code.
--> Speeds up initial load of application and lightens overall app as some blocks may never need to be loaded

This example makes it so the code in print.js isnt loaded until the interaction of clicking the button (which calls a function in print.js) occurs
for the first time.

React Example: https://reacttraining.com/react-router/web/guides/code-splitting