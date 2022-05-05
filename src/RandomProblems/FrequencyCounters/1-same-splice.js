'use strict';

// write a function called same, which accepts two arrays.
// The function should return true if every value in the
// array has it's corresponding value squared in the second array.
// The frequency of values must be the same

// O(n^2)

const same = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false;

  for (let i = 0; i < arr1.length; i++) {
    const indexFound = arr2.indexOf(arr1[i] ** 2);
    if (indexFound < 0) return false;
    arr2.splice(indexFound, 1);
  }
  return true;
};

// Usage -> true false false true true true false

console.log(
  same([1, 2, 3], [4, 1, 9]),
  same([1, 2, 1], [4, 4, 1]),
  same([1, 2, 3], [1, 9]),
  same([1, 2, 3, 4], [1, 4, 9, 16]),
  same([1, 2, 3, 4], [16, 4, 9, 1]),
  same([1, 2, 3, 4, 4, 3, 2, 1], [1, 1, 4, 4, 9, 9, 16, 16]),
  same([1, 5, 8, 1], [25, 64, 2, 1])
);
