Title: The memory footprint of node modules

Description: Node modules are ubiquitous in Node applications. Requiring a node module in an application loads it into memory, even if its not used. Maybe only parts of the module are used. What happens if you need to scale an application? How much can you scale before you reach physical memory limits? In this talk, learn how to identify the memory footprint of node modules, and how it can be reduced through module choice, sub-modules and rewriting module parts.




- baseline script on node 4, 6, 8
- requiring system libs?
- requiring popular libs?
- sub-modules (lodash)
- rewriting using vanilla js
- rewriting using system modules

