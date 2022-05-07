'use strict';

const comparatorFunct = require('../../../utils/comparator/comparatorFunction');

const binarySearch = (arr, seekElement, comparatorCb) => {
  const comparator = comparatorFunct(comparatorCb);

  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    const middle = start + Math.floor((end - start) / 2);
    if (comparator.equal(arr[middle], seekElement)) return middle;

    if (comparator.lessThan(arr[middle], seekElement)) start = middle + 1;
    else end = middle - 1;
  }

  return -1;
};

module.exports = binarySearch;
