'use strict';

const areThereDuplicates = (...args) => {
  if (args.length === 0) return false;
  return new Set(args).size !== args.length;
};

// Usage

console.log(
  areThereDuplicates(1, 2, 3, 4, 5, 6),
  areThereDuplicates(1, 2, 3, 4, 5, 1),
  areThereDuplicates('a', 'b', 'c', 'c', 'a'),
  areThereDuplicates(1, 2, 'a', 'b', true, false),
  areThereDuplicates(true, true, false, false)
);
