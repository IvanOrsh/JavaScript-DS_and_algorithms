'use strict';

// Given two positive intergers, find out if the two numbers have
// the same frequency of digits

const digitConverter = digit => {
  const digitMap = {};

  while (digit) {
    const reg = digit % 10;
    digitMap[reg] = (digitMap[reg] || 0) + 1;
    digit = Math.floor(digit / 10);
  }

  return digitMap;
};

const sameFrequency = (num1, num2) => {
  const digitFreqMap1 = digitConverter(num1);
  const digitFreqMap2 = digitConverter(num2);

  if (Object.keys(digitFreqMap1).length !== Object.keys(digitFreqMap2).length) {
    return false;
  }

  for (const key in digitFreqMap1) {
    if (digitFreqMap1[key] !== digitFreqMap2[key]) return false;
  }

  return true;
};

console.log(
  sameFrequency(123, 321),
  sameFrequency(0, 0),
  sameFrequency(0, 120),
  sameFrequency(34, 14), // false
  sameFrequency(3589578, 5879385), // true
  sameFrequency(22, 222) // false
);
