'use strict';

const MinStack = require('../4-min-stack-object');

describe('MinStack - stack, implemented using object', () => {
  it('should create an empty minStack', () => {
    const minStack = new MinStack();
    expect(minStack).not.toBeNull();
    expect(minStack._size).toEqual(0);
    expect(minStack._min).not.toBeNull();
    expect(minStack._storage).not.toBeNull();
  });

  it('should push data on minStack', () => {
    const minStack = new MinStack();
    expect(minStack.isEmpty()).toBeTruthy();

    expect(minStack.push(1)).toEqual(1);
    expect(minStack.push(2)).toEqual(2);
    expect(minStack.push(1)).toEqual(3);

    expect(minStack.isEmpty()).toBeFalsy();
    expect(minStack.size()).toEqual(3);
  });

  it('should pop a value from minStack', () => {
    const minStack = new MinStack();
    expect(minStack.pop()).toBeNull();

    expect(minStack.push(1)).toEqual(1);
    expect(minStack.push(2)).toEqual(2);
    expect(minStack.push(3)).toEqual(3);

    expect(minStack.pop()).toEqual(3);
    expect(minStack.pop()).toEqual(2);
    expect(minStack.pop()).toEqual(1);
    expect(minStack.pop()).toBeNull();
  });

  it('should return current min value on minStack', () => {
    const minStack = new MinStack();
    expect(minStack.min()).toBeNull();

    expect(minStack.push(12)).toEqual(1);
    expect(minStack.min()).toEqual(12);

    expect(minStack.push(-10)).toEqual(2);
    expect(minStack.min()).toEqual(-10);

    expect(minStack.pop()).toEqual(-10);
    expect(minStack.min()).toEqual(12);

    expect(minStack.push(100)).toEqual(2);
    expect(minStack.min()).toEqual(12);

    expect(minStack.push(0)).toEqual(3);
    expect(minStack.min()).toEqual(0);
    expect(minStack.push(0)).toEqual(4);
    expect(minStack.min()).toEqual(0);

    expect(minStack.pop()).toEqual(0);
    expect(minStack.min()).toEqual(0);
    expect(minStack.pop()).toEqual(0);
    expect(minStack.min()).toEqual(12);
  });
});
