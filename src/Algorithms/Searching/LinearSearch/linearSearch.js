'use strict';

const comparatorFunct = require('../../../utils/comparator/comparatorFunction');

const linearSearch = (array, seekElement, comparatorCb) => {
  const comparator = comparatorFunct(comparatorCb);
  const foundIndices = [];

  array.forEach((el, idx) => {
    if (comparator.equal(el, seekElement)) foundIndices.push(idx);
  });

  return foundIndices;
};

module.exports = linearSearch;
