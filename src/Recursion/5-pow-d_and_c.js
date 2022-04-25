'use strict';

// Divide and Conquer

const powerDnC = (basis, exponent) => {
  if (basis === 1 || basis === 0) return basis;

  if (basis === -1) return exponent % 2 ? -1 : 1;

  if (exponent === 0) return 1;

  if (exponent > 0) {
    const r = powerDnC(basis, Math.floor(exponent / 2));
    return exponent % 2 ? r * r * basis : r * r;
  } else {
    return 1 / powerDnC(basis, -exponent);
  }
};

module.exports = powerDnC;
