'use strict';

function f(x) {
  return g(x);
}

function g(x) {
  return f(x);
}

console.log(f(0)); // RangeError: Maximum call stack size exceeded
