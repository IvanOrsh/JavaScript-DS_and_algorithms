'use strict';

const capitalizeWords = arr => {
  if (arr.length === 1) return [arr[0].toUpperCase()];

  const res = capitalizeWords(arr.slice(0, -1));
  res.push(arr.slice(-1)[0].toUpperCase());
  return res;
};

// Usage

console.log(
  capitalizeWords(['hello', 'word', 'this'])
);
