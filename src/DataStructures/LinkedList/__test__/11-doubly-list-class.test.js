'use strict';

const DoublyLinkedList = require('../11-doubly-list-class');

describe('Doubly Linked List implemented using class', () => {
  it('should create empty Doubly Linked List', () => {
    const dll = new DoublyLinkedList();

    expect(dll).not.toBeNull();
    expect(dll.head).toBeNull();
    expect(dll.tail).toBeNull();
  });

  it('should prepend node to Doubly Linked List', () => {
    const dll = new DoublyLinkedList();

    dll.prepend(3);

    expect(dll.head.value).toBe(3);
    expect(dll.tail.value).toBe(3);
    expect(dll.head.previous).toBeNull();
    expect(dll.head.next).toBeNull();
    expect(dll.tail.previous).toBeNull();
    expect(dll.tail.next).toBeNull();

    dll.prepend(2);
    dll.prepend(1);

    expect(dll.head.value).toBe(1);
    expect(dll.head.previous).toBeNull();
    expect(dll.head.next).not.toBeNull();
    expect(dll.head.next.value).toBe(2);

    expect(dll.head.next.next.value).toBe(3);
    expect(dll.head.next.next.previous).not.toBeNull();
    expect(dll.head.next.next.previous.value).toBe(2);

    expect(dll.tail.value).toBe(3);
    expect(dll.tail.next).toBeNull();
    expect(dll.tail.previous).not.toBeNull();
    expect(dll.tail.previous.value).toBe(2);
  });

});
