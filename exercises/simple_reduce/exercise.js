
var runner = require('workshopper-node-default-exports-runner')
    randomNumbers  = require('../utils').randomNumbers

module.exports = runner({
    'Should return 0': []
  , 'Should sum them all': randomNumbers({length: Math.random() * 20 + 1})
})
