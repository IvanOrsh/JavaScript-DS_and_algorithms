'use strict';

const powRec = require('../3-pow');

describe('power function that uses recursion', () => {
  it('testing power function', () => {
    expect(powRec(2, 3)).toEqual(8);
    expect(powRec(2, 10)).toEqual(Math.pow(2, 10));
  });
});
