'use strict';

// Write a recursive function called nestedEvenSum.
// Return the sum of all even numbers in an object which may contain
// nested objects.

const nestedEvenSum = (obj, sum = 0) => {
  for (const key in obj) {
    if (typeof obj[key] === 'object') {
      sum += nestedEvenSum(obj[key]);
    } else if (typeof obj[key] === 'number' && obj[key] % 2 === 0) {
      sum += obj[key];
    }
  }
  return sum;
};

// Usage

console.log(nestedEvenSum({
  persons: {
    personOne: {
      name: 'Dave',
      age: 24
    },
    personTwo: {
      name: 'John',
      age: 33
    },
    personThree: {
      name: 'Bill',
      age: 88
    },
  },
  animal: {
    name: 'goat',
    legs: 4
  }
}));
