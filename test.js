
var lastMemoryUsage = null
var diff = {}
var path = require('path');

// function formatMB(bytes) {
//   return (bytes / 1024 / 1024).toFixed(2) + ' MB';
// }

// { rss: 13299712, heapTotal: 4083456, heapUsed: 2158224 }
function printMemUsage () {
  var memoryUsage = process.memoryUsage()
  // console.log('memory => rss:', formatMB(memoryUsage.rss), 'heapTotal:', formatMB(memoryUsage.heapTotal), 'heapUsed:', formatMB(memoryUsage.heapUsed));

  if (lastMemoryUsage) {
    diff = {
      rss: memoryUsage.rss - lastMemoryUsage.rss,
      heapTotal: memoryUsage.heapTotal - lastMemoryUsage.heapTotal,
      heapUsed: memoryUsage.heapUsed - lastMemoryUsage.heapUsed
    }
    // console.log('memory diff=> rss:', formatMB(memoryUsage.rss - lastMemoryUsage.rss), 'heapTotal:', formatMB(memoryUsage.heapTotal - lastMemoryUsage.heapTotal), 'heapUsed:', formatMB(memoryUsage.heapUsed - lastMemoryUsage.heapUsed));
  }
  lastMemoryUsage = memoryUsage
}

// console.log('before', process.env.TEST_MODULE_NAME);

printMemUsage()

// console.log('requiring', process.env.TEST_MODULE_NAME)
var thing = require(process.cwd() + '/node_modules/' + process.env.TEST_MODULE_NAME)

printMemUsage()
diff.name = process.env.TEST_MODULE_NAME
console.log(JSON.stringify(diff))
