'use strict';

// Write a function (recursive) called stringifyNumbers
// which takes in an object and finds all of the values which
// are numbers and converts them to strings.

const stringifyNumbers = (obj, newObj = {}) => {
  for (const key in obj) {
    if (typeof obj[key] === 'number') {
      newObj[key] = obj[key].toString();
    } else if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
      newObj[key] = stringifyNumbers(obj[key]);
    } else {
      newObj[key] = obj[key];
    }
  }
  return newObj;
};

// Usage

console.log(stringifyNumbers({
  name: 'Peter',
  age: 24,
  'number of kids': 4,
  dog: false,
  'random numbers': [1, 2, 3, 4, 5],
  'nested object': {
    name: 'Some name',
    number: 33,
    'another nested object': {
      value: 27
    }
  }
}));
