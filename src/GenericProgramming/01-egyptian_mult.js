'use strict';

const multiply0 = (n, a) => (n === 1 ? a : multiply0(n - 1, a) + a);

// optimization

const isOdd = n => n & 1;
const half = n => n >> 1;

// #+(n) = floor(log(n)) + (v(n) - 1), v - hammingWeight

const multiply1 = (n, a) => {
  if (n === 1) return a;
  let res = multiply1(half(n), a + a);
  if (isOdd(n)) res += a;
  return res;
};

// multiplicate & accumulate

const multAcc0 = (r, n, a) => {
  if (n === 1) return r + a;
  if (isOdd(n)) return multAcc0(r + a, half(n), a + a);
  return multAcc0(r, half(n), a + a);
};

const multAcc1 = (r, n, a) => {
  if (n === 1) return r + a;
  if (isOdd(n)) r += a;
  return multAcc1(r, half(n), a + a);
};

const multAcc2 = (r, n, a) => {
  if (isOdd(n)) {
    r += a;
    if (n === 1) return r;
  }
  return multAcc1(r, half(n), a + a);
};

const multAcc3 = (r, n, a) => {
  if (isOdd(n)) {
    r += a;
    if (n === 1) return r;
  }
  n = half(n);
  a += a;
  return multAcc3(r, n, a);
};

// iterative

const multAcc4 = (r, n, a) => {
  while (true) {
    if (isOdd(n)) {
      r += a;
      if (n === 1) return r;
    }
    n = half(n);
    a += a;
  }
};

// final

const multiply2 = (n, a) => (n === 1 ? a : multAcc4(a, n - 1, a));

const multiply3 = (n, a) => {
  while (!isOdd(n)) {
    a += a;
    n = half(n);
  }
  if (n === 1) return a;
  return multAcc4(a, n - 1, a);
};

const mutliplyFinal = (n, a) => {
  while (!isOdd(n)) {
    a += a;
    n = half(n);
  }
  if (n === 1) return a;
  // even(n - 1) => n - 1 != 1
  return multAcc4(a, half(n - 1), a + a);
};

// Usage

console.log(multiply0(5, 9));
console.log(multiply1(5, 9));

console.log(multAcc0(0, 4, 6));
console.log(multAcc1(0, 4, 6));
console.log(multAcc2(0, 4, 6));
console.log(multAcc3(0, 4, 6));
console.log(multAcc4(0, 4, 6));

console.log(multiply2(5, 9));
console.log(multiply3(5, 9));
console.log(mutliplyFinal(5, 9));
