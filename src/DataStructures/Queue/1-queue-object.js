'use strict';

// Operations:
// peek()
// size()
// enqueue(value)
// dequeue()
// contains(value)
// until(value)

const Queue = function(capacity) {
  this._capacity = capacity ||  Infinity;
  this._storage = {};
  this._head = 0;
  this._tail = 0;
};

Queue.prototype.size = function() {
  return this._tail - this._head;
};

Queue.prototype.peek = function() {
  return this._storage[this._head];
};

Queue.prototype.enqueue = function(value) {
  if (this.size() >= this._capacity) {
    throw new Error('Max capacity already reached');
  }

  this._storage[this._tail++] = value;
  return this.size();
};

Queue.prototype.dequeue = function() {
  if (this.size() === 0) throw new Error('Empty Queue');

  const res = this._storage[this._head];
  delete this._storage[this._head];
  if (this._head < this._tail) this._head++;

  return res;
};

module.exports = Queue;
