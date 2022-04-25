'use strict';

const powRec = require('../4-pow-better');

describe('testing improved version of recursive power function', () => {
  it('should calculate power properly', () => {
    expect(powRec(2, 0)).toEqual(1);
    expect(powRec(2, 3)).toEqual(Math.pow(2, 3));
    expect(powRec(2, 10)).toEqual(Math.pow(2, 10));
    expect(powRec(2, -2)).toBeCloseTo(Math.pow(2, -2));
    expect(powRec(10, -20)).toBeCloseTo(Math.pow(10, -20));
  });
});
