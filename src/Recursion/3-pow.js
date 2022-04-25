'use strict';

// can't handle negative power...
// iterative solution is much faster...
const pow = (base, power) => {
  if (power === 1) return base;
  return pow(base, power - 1) * base;
};

module.exports = pow;
