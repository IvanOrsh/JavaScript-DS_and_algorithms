'use strict';

const Stack = require('./1-stack-object-proto');

const idxOpenParen = item => ['(', '[', '{'].indexOf(item);
const idxClosingParen = item => [')', ']', '}'].indexOf(item);

const balancedParens = stringToCheck => {
  const parenthesisStack = new Stack();
  for (let i = 0; i < stringToCheck.length; i++) {
    const ch = stringToCheck.charAt(i);
    if (idxOpenParen(ch) > -1) parenthesisStack.push(ch);

    if (idxClosingParen(ch) > -1) {
      if (parenthesisStack.isEmpty()) {
        console.log('unbalanced');
      }

      const parenFromStack = parenthesisStack.peek();
      if (idxOpenParen(parenFromStack) === idxClosingParen(ch)) {
        parenthesisStack.pop();
      }
    }
  }

  return parenthesisStack.isEmpty();
};

module.exports = balancedParens;
