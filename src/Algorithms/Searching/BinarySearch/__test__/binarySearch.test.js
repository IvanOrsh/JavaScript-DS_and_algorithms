'use strict';

const binarySearch = require('../binarySearch');

describe('binarySearch', () => {
  it('should return index of element in sorted array', () => {
    expect(binarySearch([], 1)).toBe(-1);
    expect(binarySearch([1], 1)).toBe(0);
    expect(binarySearch([1, 2, 3, 4, 5, 6], 3)).toBe(2);
  });

  it('should find index of object in array', () => {
    const compFn = (a, b) => {
      if (a.key === b.key) return 0;
      return a.key - b.key;
    };

    const arr = [
      { key: 1 },
      { key: 3 },
      { key: 7 },
      { key: 11 },
      { key: 14 },
    ];

    expect(binarySearch(arr, { key: 1 }, compFn)).toEqual(0);
    expect(binarySearch(arr, { key: 7 }, compFn)).toEqual(2);
  });

});
