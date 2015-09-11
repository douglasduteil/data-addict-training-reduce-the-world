//
var defaults = require('lodash.defaults')
    random   = require('lodash.random')
//

exports.random = random
exports.randomNumbers = randomNumbers

////

function randomNumbers(options){
  options = defaults(options, {
      length : 0
    , max : Number.MAX_VALUE
    , min : Number.MIN_VALUE
  })
  return Array
    .apply(null, {length: options.length})
    .map(function () { return random(options.min, options.max) })
}
