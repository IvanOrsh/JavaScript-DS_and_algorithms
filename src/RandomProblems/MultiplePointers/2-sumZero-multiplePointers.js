'use strict';

// Write a function called sumZero which accepts a SORTED array of intergers.
// The function should find the FIRST pair where the sum is 0.
// Return an array that includes both values that sum to zero or undefined if a
// pair does not exist.

// O(n)

const sumZero = arr => {
  if (!Array.isArray(arr) || arr.length < 2) return undefined;

  if (arr.length === 2) {
    return (arr[0] + arr[1] === 0) ? [arr[0], arr[1]] : undefined;
  }

  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    const sum = arr[left] + arr[right];
    if (sum === 0) return [arr[left], arr[right]];
    else if (sum > 0) right--;
    else left++;
  }
  return undefined; // don't need that...
};

// Usage

console.log(
  sumZero([]),
  sumZero([1]),
  sumZero([-1, 1]),
  sumZero([1, 2]),
  sumZero([-4, -3, -2, -1, 0, 2, 5]),
  sumZero([-4, -3, -2, -1, 0, 5, 10, 15]),
);
