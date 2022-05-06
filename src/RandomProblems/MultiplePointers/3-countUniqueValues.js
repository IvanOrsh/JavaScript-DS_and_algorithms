'use strict';

// Implement a function called countUniqueValues,
// which accepts a SORTED array, and counts the
// unique values in the array. There can be negative numbers
// in the array, but it will always be sorted.

// O(n)

const countUniqueValues = arr => {
  if (arr.length === 0) return 0;

  if (arr.length === 1) return 1;

  let counter = 1;
  let current = 0;
  let next = 1;
  while (next < arr.length) {
    if (arr[current] !== arr[next]) {
      current = next;
      // current++;
      // arr[current] = arr[next];
      counter++;
    }
    next++;
  }
  // return current + 1;
  return counter;
};

// Usage

console.log(
  countUniqueValues([1, 1, 1, 1, 1, 1, 1, 1, 1]), // 1
  countUniqueValues([1, 1, 1, 1, 1, 2]), // 2
  countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]), // 7
  countUniqueValues([]), // 0
  countUniqueValues([-2, -1, -1, 0, 1]), // 4
  countUniqueValues([1, 1, 1, 2, 2, 2, 3, 4, 5, 6, 10, 10, 10, 11, 11, 11]) // 8
);
