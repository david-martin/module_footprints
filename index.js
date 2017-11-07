#!/usr/bin/env node
var async = require('async')
var Table = require('easy-table')
var exec = require('child_process').exec
var path = require('path')
var list = require(process.cwd() + '/package.json').dependencies
var t = new Table()

function formatMB(bytes) {
  return (bytes / 1024 / 1024).toFixed(2) + ' MB';
}

async.mapSeries(Object.keys(list), function (dep, cb) {
  console.log('Running test for ' + dep)
  var options = {
    cwd: process.cwd(),
    env: process.env,
    timeout: 5000
  }
  options.env.TEST_MODULE_NAME = dep
  exec('node ' + path.dirname(__filename) + '/test.js', options, function (err, stdout) {
    if (err) {
      console.log('Error parsing : ' + dep + err );
      return cb()
    }
    console.log('stdout', stdout)
try{
    var memoryUsageDiff = JSON.parse(stdout)
    t.cell('Module Name', memoryUsageDiff.name)
    t.cell('RSS Diff', memoryUsageDiff.rss, formatMB)
    t.cell('Heap Total Diff', memoryUsageDiff.heapTotal, formatMB)
    t.cell('Heap Used Diff', memoryUsageDiff.heapUsed, formatMB)
    t.newRow()
} catch (err) {
  console.log('Error parsing : ' + dep );
}
    return cb()
  })
}, function (err) {
  if (err) {
    throw err
  }

  t.sort(['RSS Diff|des']);
  console.log(t.toString())
})
