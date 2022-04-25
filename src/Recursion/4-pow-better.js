'use strict';

const powRecBetter = (base, power) => {
  if (power > 0) {
    return base * powRecBetter(base, power - 1);
  } else if (power < 0) {
    return powRecBetter(base, power + 1) / base;
  } else {
    return 1;
  }
};

module.exports = powRecBetter;
