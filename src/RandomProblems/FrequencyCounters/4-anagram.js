'use strict';

// Given two strings, write a function to determine if the
// second string is an anagram of the first. An anagram is
// a word, phrase, or name formed by rearranging the letters of another,
// such as cinema, formed from iceman.

const isAnagram = (string1, string2) => {
  if (string1.length !== string2.length) return false;

  if (string1.length === 0) return true;

  const lettersFound = {};
  for (let i = 0; i < string1.length; i++) {
    const char = string1.charAt(i);
    lettersFound[char] = (lettersFound[char] || 0) + 1;
  }

  for (let i = 0; i < string2.length; i++) {
    const char = string2.charAt(i);
    if (!lettersFound[char]) return false;
    else lettersFound[char] -= 1;
  }

  // return Object.values(lettersFound)
  //   .filter(value => value !== 0)
  //   .length === 0;
  return true;
};

// Usage

console.log(
  isAnagram('', '', '\n'), // true
  isAnagram('aaz', 'zza', '\n'), // false
  isAnagram('anagram', 'nagaram', '\n'), // true
  isAnagram('rat', 'car', '\n'), // false
  isAnagram('awesome', 'awesom', '\n'), // false
  isAnagram('qwerty', 'qeywrt', '\n'), // true
  isAnagram('texttwisttime', 'timetwisttext') // true
);
