# Summary

Show the memory footprint of a Node.js module i.e. how much memory is used when a module is `require`d

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
module_footprints
Running test for async
stdout {"rss":1007616,"heapTotal":446464,"heapUsed":383360,"name":"async"}

Running test for easy-table
stdout {"rss":364544,"heapTotal":262144,"heapUsed":199264,"name":"easy-table"}

Module Name  RSS Diff  Heap Total Diff  Heap Used Diff
-----------  --------  ---------------  --------------
async        0.96 MB   0.43 MB          0.37 MB
easy-table   0.35 MB   0.25 MB          0.19 MB
```
