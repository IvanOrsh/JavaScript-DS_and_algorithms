'use strict';

const LinkedList = require('../6-single-list-class');

describe('LinkedList', () => {
  it('should create an empty LinkedList', () => {
    const linkedList = new LinkedList();

    expect(linkedList).not.toBeNull();
  });

  it('should prepend node to LinkedList', () => {
    const linkedList = new LinkedList();

    linkedList.prepend(2);
    expect(linkedList.head.toString()).toBe('2');
    expect(linkedList.tail.toString()).toBe('2');

    linkedList.prepend(10);
    expect(linkedList.head.toString()).toBe('10');
    expect(linkedList.tail.toString()).toBe('2');
  });

  it('should append node to LinkedList', () => {
    const linkedList = new LinkedList();

    linkedList.append(1);
    expect(linkedList.head.toString()).toBe('1');
    expect(linkedList.tail.toString()).toBe('1');

    linkedList.append(2);
    expect(linkedList.head.toString()).toBe('1');
    expect(linkedList.tail.toString()).toBe('2');
    expect(linkedList.tail.next).toBeNull();
  });

  it('should convert LinkedList to array', () => {
    const linkedList = new LinkedList();

    linkedList.append(1).append(2).append(3);
    expect(linkedList.toArray().join(',')).toBe('1,2,3');
  });

  it('should insert node to LinkedList', () => {
    const linkedList = new LinkedList();
    linkedList.insert(4, 3);
    expect(linkedList.head.toString()).toBe('4');
    expect(linkedList.tail.toString()).toBe('4');

    linkedList
      .insert(3, 2)
      .insert(2, 1)
      .insert(1, -7)
      .insert(10, 9);

    expect(linkedList.toString()).toBe('1,4,2,3,10');
  });

});
