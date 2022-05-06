'use strict';

// Given an array of integers and a number, write a function
// called maxSubarraySum, which finds the maximum of a subarray
// with the length of the number passed to the function

const maxSubarraySum = (arr, n) => {
  if (arr.length < n) return null;

  let total = 0;
  for (let i = 0; i < n; i++) {
    total += arr[i];
  }
  let currentTotal = total;
  for (let i = n; i < arr.length; i++) {
    currentTotal += arr[i] - arr[i - n];
    total = Math.max(total, currentTotal);
  }

  return total;
};

// Usage

console.log(
  maxSubarraySum([100, 200, 300, 400], 2), // 700
  maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4),  // 39
  maxSubarraySum([-3, 4, 0, -2, 6, -1], 2), // 5
  maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2), // 5
  maxSubarraySum([2, 3], 3) // null
);

