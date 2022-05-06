'use strict';

// Write a function called sumZero which accepts a SORTED array of intergers.
// The function should find the FIRST pair where the sum is 0.
// Return an array that includes both values that sum to zero or undefined if a
// pair does not exist.

// naive -> o(n^2) time complexity

const sumZero = arr => {
  if (!Array.isArray(arr) || arr.length < 2) return undefined;

  if (arr.length === 2) {
    return (arr[0] + arr[1] === 0) ? [arr[0], arr[1]] : undefined;
  }

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        return [arr[i], arr[j]];
      }
    }
  }

  return undefined;
};

// Usage

console.log(
  sumZero([]),
  sumZero([1]),
  sumZero([-1, 1]),
  sumZero([1, 2]),
  sumZero([-4, -3, -2, -1, 0, 2, 5])
);
