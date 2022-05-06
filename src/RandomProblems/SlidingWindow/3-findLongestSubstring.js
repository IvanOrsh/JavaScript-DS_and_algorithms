'use strict';

// Function findLongestString accepts a string and returns
// the length of the longest substring with all distinct characters.

const findLongestSubstring = str => {
  let longest = 0;
  const seen = {};
  let start = 0;

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (seen[char]) {
      start = Math.max(start, seen[char]);
    }
    longest = Math.max(longest, i - start + 1);
    seen[char] = i + 1;
  }

  return longest;
};

// Usage

console.log(
  findLongestSubstring('thisisawesome'), // 6
  findLongestSubstring('thecatinthehat'), // 7
  findLongestSubstring('bbbbbb'), // 1
  findLongestSubstring('longestsubstring'), // 8
  findLongestSubstring('thisishowwedoit') // 6
);
