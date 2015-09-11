module.exports = cmap;

function cmap(operation) {
  return function mapper(input) {
    return input.reduce(function(memo, value){
      memo.push(operation(value));
      return memo;
    }, []);
  };
}
