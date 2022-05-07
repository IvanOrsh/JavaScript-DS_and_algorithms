'use strict';

// Write a recursive function called someRecursive
// which accepts an array and a callback. The function returns true
// if a single value in the array returns true when passed to the
// callback. Otherwise it returns false.

const someRecursive = (arr, callback) => {
  if (arr.length === 0) return false;
  if (callback(arr[0])) return true;
  return someRecursive(arr.slice(1), callback);
};

// Usage

console.log(
  someRecursive([1, 3, 5], x => x % 2),
  someRecursive(['ab', 'ba', 'zz', 'cb'], x => x.length === 2),
  someRecursive([], () => true),
  someRecursive([
    { name: 'Peter', age: 18 },
    { name: 'John', age: 21 },
    { name: 'Perter', age: 35 },
  ], person => person.age >= 18)
);
