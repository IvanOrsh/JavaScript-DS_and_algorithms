'use strict';

const Dequeue = require('../1-dequeue-class');

describe('Dequeue implemented using class', () => {
  it('should create empty Dequeue', () => {
    const dequeue = new Dequeue();
    expect(dequeue).not.toBeNull();
    expect(dequeue.first).toBeNull();
    expect(dequeue.last).toBeNull();
  });

  it('should append (push) item to Dequeue', () => {
    const dequeue = new Dequeue();
    dequeue.push(1);
    expect(dequeue.first).not.toBeNull();
    expect(dequeue.last).not.toBeNull();
    expect(dequeue.first.item).toBe(1);
    expect(dequeue.first.prev).toBeNull();
    expect(dequeue.first.next).toBeNull();
    expect(dequeue.last.item).toBe(1);
    expect(dequeue.last.prev).toBeNull();
    expect(dequeue.last.next).toBeNull();

    dequeue.push(2);
    dequeue.push(3);
    expect(dequeue.first.item).toBe(1);
    expect(dequeue.first.prev).toBeNull();
    expect(dequeue.first.next.item).toBe(2);
    expect(dequeue.last.item).toBe(3);
    expect(dequeue.last.prev.item).toBe(2);
    expect(dequeue.last.next).toBeNull();
  });

  it('should be able to iterate over Dequeue', () => {
    const dequeue = new Dequeue();
    dequeue.push(0);
    dequeue.push(1);
    dequeue.push(2);
    dequeue.push(3);
    expect([...dequeue].join(',')).toBe('0,1,2,3');
  });

});
