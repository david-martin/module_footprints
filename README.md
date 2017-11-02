# Summary

Show the memory footprint of Node.js module i.e. how much memory is used when a module is 'require'd

# Usage

```bash
# Install the cli
npm i -g module_footprints

# From any directory with a package.json
npm i
module_footprints
```

# Sample Output

```
Module Name  RSS Diff  Heap Total Diff  Heap Used Diff
-----------  --------  ---------------  --------------
jsdom        36.46 MB  30.51 MB         21.04 MB      
babel-core   16.23 MB  21.00 MB         8.19 MB       
restify      16.03 MB  14.08 MB         10.72 MB      
mongoose     15.03 MB  12.00 MB         8.42 MB       
```
