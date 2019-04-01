Quick Info:
- Code splitting allows you to split code into various bundles which then can be loaded on demand or in parallel.
- Used to achieve smaller bundles and control resource load prioritization which if used correctly can have a major impact on load times

3 General Approches to Code Splitting:

Entry points: aka manually splitting code using the 'entry' config option
--> Meh b/c if there are duplicate modules between entry chunks they will be included in both bundles
--> not as flexible and cant be used to dynamically split code with core application logic

Prevent Duplication: aka use the 'SplitChunksPlugin' to dedupe and split chunks
--> SplitChunksPlugin allows us to extract common dependencies into existing entry chunk or entirely new chunk

Dynamic Imports: aka split code via inline function calls within modules
--> idk much about this one tbh

Also Prefetching/Preloading modules as of webpack@4.6.0+
--> inline directives

Prefetch: resource prob needed for some navigation in future
Preload: resource might be needed during current navigation




More Info: https://webpack.js.org/guides/code-splitting
