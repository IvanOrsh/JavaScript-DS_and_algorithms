'use strict';

const linearSearch = require('../linearSearch');

describe('linearSearch', () => {
  it('should find index of number in array', () => {
    const arr = [-1, 0, 10, 2, 3, 2, 2, 0, 3];

    expect(linearSearch(arr, 0)).toEqual([1, 7]);
    expect(linearSearch(arr, 100)).toEqual([]);
    expect(linearSearch(arr, 2)).toEqual([3, 5, 6]);
  });

  it('should find index of object in array', () => {
    const compFn = (a, b) => {
      if (a.key === b.key) return 0;
      return a.key - b.key;
    };

    const arr = [
      { key: 1 },
      { key: 2 },
      { key: 9 },
      { key: 1 },
      { key: 2 },
    ];

    expect(linearSearch(arr, { key: 1 }, compFn)).toEqual([0, 3]);
    expect(linearSearch(arr, { key: 2 }, compFn)).toEqual([1, 4]);
  });
});
