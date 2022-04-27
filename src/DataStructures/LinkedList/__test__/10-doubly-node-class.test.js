'use strict';

const DoublyLinkedListNode = require('../10-doubly-node-class');

describe('Dobly Linked List Node', () => {
  it('should create doubly linked list node with value', () => {
    const node = new DoublyLinkedListNode(1);
    expect(node.value).toBe(1);
    expect(node.next).toBeNull();
    expect(node.previous).toBeNull();
  });

  it('should link nodes together', () => {
    const node2 = new DoublyLinkedListNode(2);
    const node1 = new DoublyLinkedListNode(1, node2);
    const node3 = new DoublyLinkedListNode(3, node1, node2);

    expect(node1.next).toBeDefined();
    expect(node1.previous).toBeNull();
    expect(node2.next).toBeNull();
    expect(node2.previous).toBeNull();
    expect(node3.next).toBeDefined();
    expect(node3.previous).toBeDefined();
    expect(node1.value).toBe(1);
    expect(node1.next.value).toBe(2);
    expect(node3.next.value).toBe(1);
    expect(node3.previous.value).toBe(2);
  });
});
