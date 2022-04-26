'use strict';

const Queue = require('../1-queue-object');

describe('Queue implemented using object', () => {
  it('should create an empty Queue', () => {
    const queue = new Queue();
    expect(queue).not.toBeNull();
    expect(queue._storage).not.toBeNull();
    expect(queue._head).toEqual(0);
    expect(queue._tail).toEqual(0);
  });

  it('should enqueue data', () => {
    const queue = new Queue();
    expect(queue.size()).toEqual(0);

    expect(queue.enqueue(1)).toEqual(1);
    expect(queue.enqueue(2)).toEqual(2);
    expect(queue.size()).toEqual(2);
  });

  it('should dequeue data from queue', () => {
    const queue = new Queue();
    const arrOfRandomNumbers = Array.from(
      { length: 100 }, () => Math.floor(Math.random() * 100)
    );

    for (const value of arrOfRandomNumbers) {
      queue.enqueue(value);
    }

    expect(queue.size()).toEqual(100);

    for (let i = 0; i < arrOfRandomNumbers.length; i++) {
      expect(queue.dequeue()).toEqual(arrOfRandomNumbers[i]);
    }

    expect(queue.size()).toEqual(0);
  });

});
