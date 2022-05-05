'use strict';

// write a function called same, which accepts two arrays.
// The function should return true if every value in the
// array has it's corresponding value squared in the second array.
// The frequency of values must be the same

const same = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false;

  const found = new Map();
  for (const value of arr1) {
    if (!found.has(value * value)) {
      found.set(value * value, 1);
    } else {
      found.set(value * value, found.get(value * value) + 1);
    }
  }

  for (const value of arr2) {
    if (found.get(value)) found.set(value, found.get(value) - 1);
    else return false;
  }

  return [...found.values()]
    .filter(x => x !== 0)
    .length === 0;
};

// Usage -> true false false true true true false false

console.log(
  same([1, 2, 3], [4, 1, 9]),
  same([1, 2, 1], [4, 4, 1]),
  same([1, 2, 3], [1, 9]),
  same([1, 2, 3, 4], [1, 4, 9, 16]),
  same([1, 2, 3, 4], [16, 4, 9, 1]),
  same([1, 2, 3, 4, 4, 3, 2, 1], [1, 1, 4, 4, 9, 9, 16, 16]),
  same([1, 2, 3, 4, 4, 3, 2, 1], [1, 1, 1, 4, 9, 9, 16, 16]),
  same([1, 5, 8, 1], [25, 64, 2, 1])
);

