'use strict';

const powDnC = require('../5-pow-d_and_c');

describe('testing divide-conquer power function', () => {
  it('should calculate power properly', () => {
    expect(powDnC(2, 0)).toEqual(1);
    expect(powDnC(2, 3)).toEqual(Math.pow(2, 3));
    expect(powDnC(2, 10)).toEqual(Math.pow(2, 10));
    expect(powDnC(2, -2)).toBeCloseTo(Math.pow(2, -2));
    expect(powDnC(10, -20)).toBeCloseTo(Math.pow(10, -20));
  });
});
