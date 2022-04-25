'use strict';

// flattening arrays only

const flatten = (arr, acc = []) => {
  for (const elem of arr) {
    if (!Array.isArray(elem)) {
      acc.push(elem);
    } else {
      flatten(elem, acc);
    }
  }

  return acc;
};

console.log(flatten([1, 2, [3, 4], [[5, 6], [7, [8, 9]]]]));
