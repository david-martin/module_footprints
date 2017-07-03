var async = require('async')
var Table = require('easy-table')
var exec = require('child_process').exec

var list = require('./package.json').dependencies
var t = new Table()

function formatMB(bytes) {
  return (bytes / 1024 / 1024).toFixed(2) + ' MB';
}

async.mapSeries(Object.keys(list), function (dep, cb) {
  console.log('Running test for ' + dep)
  var options = {
    cwd: process.cwd(),
    env: process.env
  }
  options.env.TEST_MODULE_NAME = dep
  exec('node ./test.js', options, function (err, stdout) {
    if (err) {
      return cb(err)
    }
    console.log('stdout', stdout)
    var memoryUsageDiff = JSON.parse(stdout)
    t.cell('Module Name', memoryUsageDiff.name)
    t.cell('RSS Diff', memoryUsageDiff.rss, formatMB)
    t.cell('Heap Total Diff', memoryUsageDiff.heapTotal, formatMB)
    t.cell('Heap Used Diff', memoryUsageDiff.heapUsed, formatMB)
    t.newRow()
    return cb()
  })
}, function (err) {
  if (err) {
    throw err
  }

  t.sort(['Heap Total Diff|des']);
  console.log(t.toString())
})
