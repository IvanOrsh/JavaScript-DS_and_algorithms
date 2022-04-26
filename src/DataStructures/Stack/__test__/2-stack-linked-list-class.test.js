'use strict';

const Stack = require('../2-stack-linked-lists-class');

describe('Stack implemented using Linked List', () => {
  it('should create empty stack', () => {
    const stack = new Stack();
    expect(stack.last).toBeNull();
  });

  it('should check if stack is empty', () => {
    const stack = new Stack();
    expect(stack.isEmpty()).toBeTruthy();

    stack.push(1);
    expect(stack.isEmpty()).toBeFalsy();

    stack.pop();
    expect(stack.isEmpty()).toBeTruthy();
  });

  it('should push data to stack', () => {
    const stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.push(3);
    expect(stack.last.item).toBe(3);
    expect(stack.last.prev.item).toBe(2);
    expect(stack.last.prev.prev.item).toBe(1);
    expect(stack.last.prev.prev.prev).toBeNull();
  });

  it('should pop data from stack', () => {
    const stack = new Stack();
    expect(stack.pop()).toBeNull();

    for (let i = 0; i < 10; i++) {
      stack.push(i);
    }
    for (let i = 9; i >= 0; i--) {
      expect(stack.pop()).toBe(i);
    }
    expect(stack.pop()).toBeNull();
  });

  it('iteration should work properly', () => {
    const stack = new Stack();
    for (let i = 0; i < 10; i++) {
      stack.push(i);
    }
    expect([...stack].join(',')).toBe('9,8,7,6,5,4,3,2,1,0');
  });

  it('should clone stack', () => {
    const stack = new Stack();
    for (let i = 0; i < 10; i++) {
      stack.push(i);
    }
    const cloned = stack.clone();
    stack.pop();
    stack.pop();

    expect([...cloned].join(',')).toBe('9,8,7,6,5,4,3,2,1,0');
    expect([...stack].join(',')).toBe('7,6,5,4,3,2,1,0');
  });
});
