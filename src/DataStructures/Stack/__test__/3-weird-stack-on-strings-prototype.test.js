'use strict';

const WeirdStack = require('../3-weird-stack-on-strings-prototype');

describe('WeirdStack implemented using strings', () => {
  it('should create an empty stack', () => {
    const stack = new WeirdStack('|');

    expect(stack).not.toBeNull();
    expect(stack._size).toEqual(0);
    expect(stack.storage).toEqual('');
    expect(stack.separator).toEqual('|');

    expect(stack.size()).toEqual(0);
    expect(stack.isEmpty()).toBeTruthy();
    expect(stack.peek()).toEqual('');
  });

  it('should peek data from stack', () => {
    const stack = new WeirdStack('|');
    expect(stack.peek()).toBeFalsy();

    stack.push(1);
    stack.push(2);

    expect(stack.peek()).toEqual('2');
    expect(stack.peek()).toEqual('2');
  });

  it('should check if stack is empty', () => {
    const stack = new WeirdStack('|');
    expect(stack.isEmpty()).toBeTruthy();

    stack.push(1);
    expect(stack.isEmpty()).toBeFalsy();

    stack.pop();
    expect(stack.isEmpty()).toBeTruthy();
  });

  it('should check the size of the stack', () => {
    const stack = new WeirdStack('|');
    expect(stack.size()).toBe(0);

    for (let i = 0; i < 10; i++) {
      stack.push(i);
    }
    expect(stack.size()).toBe(10);

    for (let i = 9; i >= 0; i--) {
      stack.pop();
    }
    expect(stack.size()).toBe(0);
  });

  it('should push data to the stack', () => {
    const stack = new WeirdStack();
    expect(stack.size()).toBe(0);

    for (let i = 0; i < 10; i++) {
      stack.push(i);
    }
    expect(stack.size()).toBe(10);
  });

  it('should pop a value from stack', () => {
    const stack = new WeirdStack();

    stack.push(1);
    stack.push(2);

    expect(stack.pop()).toBe('2');
    expect(stack.pop()).toBe('1');
    expect(() => stack.pop()).toThrow('Stack is empty');
  });
});
