'use strict';

function Node(list, data) {
  this.list = list;
  this.data = data;
  this.prev = null;
  this.next = null;
}

function DoublyLinkedList() {
  this.first = null;
  this.last = null;
  this.length = 0;
}

DoublyLinkedList.prototype.append = function(data) {
  const node = new Node(this, data);
  node.prev = this.last;
  if (this.length === 0) this.first = node;
  else this.last.next = node;
  this.last = node;
  this.length++;
  return node;
};

DoublyLinkedList.prototype.deleteLast = function() {
  if (!this.last) return null;
  const deletedLast = this.last;

  if (this.first === this.last) {
    this.first = null;
    this.last = null;
  } else {
    this.last = this.last.prev;
    this.last.next = null;
  }

  deletedLast.list = null;
  deletedLast.next = null;
  deletedLast.prev = null;
  this.length--;
  return deletedLast.data;
};

DoublyLinkedList.prototype.clone = function() {
  const cloned = new DoublyLinkedList();
  let currentNode = this.first;
  while (currentNode) {
    cloned.append(currentNode.data);
    currentNode = currentNode.next;
  }
  return cloned;
};

DoublyLinkedList.prototype[Symbol.iterator] = function() {
  return {
    current: this.first,
    next() {
      const element = this.current;
      if (!element) return {
        done: true,
        value: null
      };
      this.current = element.next;
      return {
        done: false,
        value: element.data
      };
    }
  };
};

module.exports = DoublyLinkedList;
