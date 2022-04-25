'use strict';

const balancedParens = require('../5-balanced-parenthesis');

describe('Tesing balancedParen function', () => {
  it('should check whether a given string has balanced parenthesis', () => {
    expect(balancedParens('sqrt(5*(3+8)/(4-2))')).toBeTruthy();
    expect(balancedParens('Math.min(5,(6-3))(')).toBeFalsy();
    expect(balancedParens('(5+3*[1-1*(2+3)])')).toBeTruthy();
    expect(balancedParens('(5+3*[1-1*(2+3)]}')).toBeFalsy();
    expect(balancedParens('{(}(())')).toBeFalsy();
    expect(balancedParens('{()}(())')).toBeTruthy();
  });
});

