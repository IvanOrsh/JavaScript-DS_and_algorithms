'use strict';

const LinkedListNode = require('../2-single-class');

describe('Linked List Node', () => {
  it('should create a node with a given value', () => {
    const node = new LinkedListNode(1);

    expect(node.value).toBe(1);
    expect(node.next).toBeNull();
  });

  it('should create a node with an object as a value', () => {
    const nodeValue = { value: 1, key: 'someKey' };
    const node = new LinkedListNode(nodeValue);

    expect(node.value.value).toBe(1);
    expect(node.value.key).toBe('someKey');
    expect(node.next).toBeNull();
  });

  it('should link nodes together', () => {
    const node2 = new LinkedListNode(2);
    const node1 = new LinkedListNode(1, node2);

    expect(node1.next).toBeDefined();
    expect(node2.next).toBeNull();
    expect(node1.value).toBe(1);
    expect(node1.next.value).toBe(2);
  });

  it('should convert node to string', () => {
    const node = new LinkedListNode(1);

    expect(node.toString()).toBe('1');

    node.value = 'string';
    expect(node.toString()).toBe('string');
  });
});
