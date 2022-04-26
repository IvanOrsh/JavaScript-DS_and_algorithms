'use strict';

const DoublyLinkedList = require('../9-doubly-proto');

describe('Doubly Linked Lists implemented using prototypes', () => {
  it('should create empty Doubly Linked List', () => {
    const dLinkedList = new DoublyLinkedList();
    expect(dLinkedList.length).toBe(0);
    expect(dLinkedList).not.toBeNull();
    expect(dLinkedList.first).toBeNull();
    expect(dLinkedList.last).toBeNull();
  });

  it('should append node to Doubly Linked List', () => {
    const dLinkedList = new DoublyLinkedList();
    dLinkedList.append(1);
    dLinkedList.append(2);
    expect(dLinkedList.length).toBe(2);
    expect(dLinkedList.first.data).toBe(1);
    expect(dLinkedList.last.data).toBe(2);
    expect(dLinkedList.last.next).toBeNull();
  });

  it('should delete last node in Doubly Linked List', () => {
    const dLinkedList = new DoublyLinkedList();
    dLinkedList.append(1);
    dLinkedList.append(2);
    dLinkedList.append(3);
    expect(dLinkedList.length).toBe(3);

    expect(dLinkedList.deleteLast()).toBe(3);
    expect(dLinkedList.length).toBe(2);
    expect(dLinkedList.last.data).toBe(2);
    expect(dLinkedList.last.next).toBeNull();

    expect(dLinkedList.deleteLast()).toBe(2);
    expect(dLinkedList.deleteLast()).toBe(1);
    expect(dLinkedList.length).toBe(0);
    expect(dLinkedList.first).toBeNull();
    expect(dLinkedList.last).toBeNull();

    expect(dLinkedList.deleteLast()).toBeNull();
  });

  it('should clone Doubly Linked List', () => {
    const dLinkedList = new DoublyLinkedList();
    dLinkedList.append(1);
    dLinkedList.append(2);
    dLinkedList.append(3);
    dLinkedList.append(4);

    const cloned = dLinkedList.clone();

    dLinkedList.deleteLast();
    dLinkedList.deleteLast();

    expect(dLinkedList.length).toBe(2);
    expect([...dLinkedList].join(',')).toBe('1,2');

    expect(cloned.length).toBe(4);
    expect([...cloned].join(',')).toBe('1,2,3,4');
  });
});
