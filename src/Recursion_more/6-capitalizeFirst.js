'use strict';

// Write a recursive function called capitalizeFirst.
// Given an array of strings, capitalize the first letter
// of each string in the array.

const capitalizeFirst = (arr, res = []) => {
  if (arr.length === 0) return res;

  res.push(arr[0].charAt(0).toUpperCase() + arr[0].slice(1));
  res = [...res, ...capitalizeFirst(arr.slice(1))];
  return res;
};

// Usage

console.log(
  capitalizeFirst(['hello', 'this', 'is', 'awesome']),
);
