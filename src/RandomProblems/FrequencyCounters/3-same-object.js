'use strict';

// write a function called same, which accepts two arrays.
// The function should return true if every value in the
// array has it's corresponding value squared in the second array.
// The frequency of values must be the same

const same = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false;

  const freqCounter1 = {};
  const freqCounter2 = {};
  for (const value of arr1) {
    freqCounter1[value] = (freqCounter1[value] || 0) + 1;
  }
  for (const value of arr2) {
    freqCounter2[value] = (freqCounter2[value] || 0) + 1;
  }
  for (const key in freqCounter1) {
    if (!(key ** 2 in freqCounter2)) return false;
    if (freqCounter2[key ** 2] !== freqCounter1[key]) return false;
  }
  return true;
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
