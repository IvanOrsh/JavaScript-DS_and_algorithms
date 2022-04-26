'use strict';

const Stack = require('../1-stack-object-proto');

describe('Stack implemented using object', () => {

  it('should create an empty stack', () => {
    const stack = new Stack();
    expect(stack).not.toBeNull();

    expect(stack._size).toEqual(0);
    expect(stack._storage).toBeTruthy();
    expect(stack._capacity).toBe(Infinity);

    expect(stack.size()).toEqual(0);
    expect(stack.isEmpty()).toBeTruthy();
  });

  it('should push data on stack', () => {
    const stack = new Stack();
    expect(stack.isEmpty()).toBeTruthy();

    for (let i = 0; i < 10; i++) {
      stack.push(i);
    }

    expect(stack.size()).toEqual(10);
  });

  it('should peek data from stack', () => {
    const stack = new Stack();
    expect(stack.peek()).toBeNull();

    stack.push(1);
    stack.push(2);

    expect(stack.peek()).toEqual(2);
    expect(stack.peek()).toEqual(2);
  });

  it('should pop a value from stack', () => {
    const stack = new Stack();

    stack.push('example');
    stack.push(10);

    expect(stack.pop()).toEqual(10);
    expect(stack.size()).toEqual(1);
    expect(stack.pop()).toEqual('example');
    expect(stack.isEmpty()).toBeTruthy();
    expect(stack.pop()).toBeNull();
  });

  it('check if a value is no stack', () => {
    const stack = new Stack();
    expect(stack.contains('something')).toBeFalsy();

    stack.push('something');
    expect(stack.contains('something')).toBeTruthy();

    const obj = { a: 'a', b: 'b' };
    stack.push(obj);
    expect(stack.contains(obj)).toBeTruthy();
  });

  it('should get the number of pops until you get to a certain value', () => {
    const stack = new Stack();

    stack.push(7);
    stack.push(7);
    stack.push(2);
    stack.push(5);
    stack.push(7);
    stack.push(3);
    stack.push(6);
    stack.push(9);

    expect(stack.until(7)).toEqual(4);
    expect(stack.until(100)).toBeNull();
  });

  it('should sort stack in ascending order', () => {
    const stack = new Stack();
    const unsortedArr = Array.from(
      { length: 100 }, () => Math.floor(Math.random() * 100)
    );
    const max = (a, b) => (a > b ? -1 : 1);
    const sortedArr = Array.from(unsortedArr).sort(max);

    for (const value of unsortedArr) {
      stack.push(value);
    }

    expect(stack.size()).toEqual(100);
    stack.sortRec();

    for (let i = 0; i < stack.size(); i++) {
      expect(stack.pop()).toEqual(sortedArr[i]);
    }
  });

  it('should fill a given stack from a given array', () => {
    const stack = new Stack().fromArray([1, 2, 3, 4, 5]);
    expect(stack.size()).toEqual(5);
  });

  it('should return a string representation of a given stack', () => {
    const stack = new Stack().fromArray([1, 2, 3, 4, 5]);
    expect(stack.toString()).toBe('5,4,3,2,1');
  });
});
