'use strict';

class LinkedListNode {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }

  toString(cb) {
    return cb ? cb(this.value) : `${this.value}`;
  }
}

module.exports = LinkedListNode;
