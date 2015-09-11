
var runner = require('workshopper-node-default-exports-runner')

module.exports = runner({
    'Should return a empty array': []
  , 'Should return a the same array': []
}, {
  runOnResult: function(func, args){
    console.log(func);
    return func(args);
  }
})
