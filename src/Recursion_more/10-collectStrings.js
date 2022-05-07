'use strict';

// Write a function (recursive) called collectStrings which accepts
// an object and returns an array of all the values in
// the object that have a typeof string.

const collectString = obj => {
  let res = [];
  for (const key in obj) {
    if (typeof obj[key] === 'string') res.push(obj[key]);
    else if (typeof obj[key] === 'object') {
      res = [...res, ...collectString(obj[key])];
    }
  }
  return res;
};

// Usage

console.log(
  collectString(
    {
      name: 'Peter',
      age: 28,
      wife: {
        name: 'Loise',
        age: 25
      },
    }
  )
);
