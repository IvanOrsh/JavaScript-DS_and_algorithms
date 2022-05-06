'use strict';

// Given a sorted array of integers and a target average, determine if
// there is a pair of values in the array where the average of the pair
// equals the target average.
// There may be more than one pair that matches the average target.

const compareFloats = (num1, num2) => Math.abs(num1 - num2) < Number.EPSILON;

const getAvg = (num1, num2) => (num1 + num2) / 2;

const averagePair = (arr, targetAvg) => {
  if (arr.length < 2) return false;

  if (arr.length === 2) return compareFloats(getAvg(arr[0], arr[1]), targetAvg);

  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    const avg = getAvg(arr[left], arr[right]);
    if (compareFloats(avg, targetAvg)) return true;
    else if (avg > targetAvg) right--;
    else left++;
  }
  return false;
};

// Usage

console.log(
  averagePair([2], 2), // false
  averagePair([1, 2, 3], 2.5), // true
  averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8), // true
  averagePair([-1, 0, 3, 4, 5, 6], 4.1), // false
  averagePair([], 4) // false
);
