'use strict';

// Write a function called reverse which accepts a string
// and returns a new string in reverse.

const reverse = str => {
  if (str.length <= 1) return str;
  return str[str.length - 1] + reverse(str.slice(0, -1));
  // return reverse(str.slice(1)) + str[0];
};

// Usage

console.log(
  reverse('hello'),
  reverse('whatever'),
  reverse(''),
  reverse('o'),
  reverse('xxxthis'),
);
