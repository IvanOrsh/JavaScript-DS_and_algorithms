'use strict';

const comparatorFunct = require('../../../utils/comparator/comparatorFunction');

const jumpSearch = (sortedArray, seekElement, comparatorCb) => {
  const comparator = comparatorFunct(comparatorCb);
  const arraySize = sortedArray.length;

  if (!arraySize) {
    return -1;
  }

  const jumpSize = Math.floor(Math.sqrt(arraySize));

  let blockStart = 0;
  let blockEnd = jumpSize;
  while (
    comparator.greaterThan(
      seekElement,
      sortedArray[Math.min(blockEnd, arraySize) - 1]
    )
  ) {
    blockStart = blockEnd;
    blockEnd += jumpSize;

    if (blockStart > arraySize) {
      return -1;
    }
  }

  // Do linear search for seekElement in subarray starting from blockStart
  let currentIndex = blockStart;
  while (currentIndex < Math.min(blockEnd, arraySize)) {
    if (comparator.equal(sortedArray[currentIndex], seekElement)) {
      return currentIndex;
    }

    currentIndex += 1;
  }

  return -1;
};

module.exports = jumpSearch;
