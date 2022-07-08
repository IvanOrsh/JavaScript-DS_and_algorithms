'use strict';

const DoublyLinkedListNode = require('./10-doubly-node-class');
const Comparator = require('../../utils/comparator/Comparator');

class DoublyLinkedList {
  constructor(compareFn) {
    this.head = null;
    this.tail = null;
    this.compare = new Comparator(compareFn);
  }

  prepend(value) {
    const newNode = new DoublyLinkedListNode(value, this.head);
    if (this.head) this.head.previous = newNode;
    this.head = newNode;
    if (!this.tail) this.tail = newNode;
    return this;
  }

  append(value) {
    const newNode = new DoublyLinkedListNode(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      return this;
    }
    this.tail.next = newNode;
    newNode.previous = this.tail;
    this.tail = newNode;
    return this;
  }
}

module.exports = DoublyLinkedList;
