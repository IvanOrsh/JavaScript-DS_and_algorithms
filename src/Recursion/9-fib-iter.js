'use strict';

const fibonacci2 = n => {
  let a = 1;
  let b = 0;
  let c = 0;
  while (n > 0) {
    c = a + b;
    b = a;
    a = c;
    n--;
  }
  return b;
};

console.log(fibonacci2(14));
