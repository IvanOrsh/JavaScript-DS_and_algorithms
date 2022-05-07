'use strict';

const comparator = compareFunction => {
  const defaultCompare = (a, b) => ((a === b) ? 0 : (a < b) ? -1 : 1);
  const compare = compareFunction || defaultCompare;
  return {
    equal: (a, b) => compare(a, b) === 0,
    lessThan: (a, b) => compare(a, b) < 0,
    greaterThan: (a, b) => compare(a, b) > 0,
    lessThanOrEqual: (a, b) => compare(a, b) < 0 || compare(a, b) === 0,
    greaterThanOrEqual: (a, b) => this.compare(a, b) > 0 || compare(a, b) === 0,
  };
};

module.exports = comparator;
