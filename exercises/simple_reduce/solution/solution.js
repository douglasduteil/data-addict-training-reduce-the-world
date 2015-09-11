module.exports = sum;

function sum(numbers) {
  return numbers.reduce(_add, 0);
}

function _add(a, b){ return a + b; }
