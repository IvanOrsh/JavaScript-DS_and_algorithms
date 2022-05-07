'use strict';

// Write a function called recursiveRange which
// accpets a number and adds up all the numbers from 0 to the
// number passed to function

const recursiveRange = num => {
  if (!num) return 0;
  return num + recursiveRange(num - 1);
};

// Usage

console.log(
  recursiveRange(5),
  recursiveRange(10),
  recursiveRange(12),
);

