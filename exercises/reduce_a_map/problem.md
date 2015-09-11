# Task

Use Array#reduce to implement a curried version of Array#map.

## Expected Output

A function `cmap` that applies a function to each item in an array and collects the results in a new Array.

```js

// `cmap` is your exported function
var mapper = cmap(function double(item) {
  return item * 2
})

var nums = [1,2,3,4,5]
var output = mapper(nums)

console.log(output) // => [2,4,6,8,10]

```

## Arguments

* input: an arbitrary Array of any type.
* operation: an arbitrary Function which can be applied to items in `input`.

## Resources

* https://en.wikipedia.org/wiki/Reduce_(higher-order_function)
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce

## Boilerplate

```js
module.exports = cmap;

function cmap(operation) {
  return function mapper(input) {
    // SOLUTION GOES HERE
  };
}
```
