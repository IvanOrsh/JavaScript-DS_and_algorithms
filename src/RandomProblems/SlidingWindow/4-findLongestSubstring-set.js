'use strict';

// Function findLongestString accepts a string and returns
// the length of the longest substring with all distinct characters.

const findLongestSubstring = str => {
  let longest = 0;
  const seen = new Set();
  let start = 0;
  let next = 0;
  while (start < str.length && next < str.length) {
    if (!seen.has(str[next])) {
      seen.add(str[next]);
      next++;
      longest = Math.max(longest, next - start);
    } else {
      seen.delete(str[start]);
      start++;
    }
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
