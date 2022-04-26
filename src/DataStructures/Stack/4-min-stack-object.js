'use strict';

const Stack = require('./1-stack-object-proto');

const MinStack = function(capacity) {
  this._capacity = capacity || Infinity;
  this._storage = {};
  this._size = 0;
  this._min = new Stack();
};

MinStack.prototype.size = function() {
  return this._size;
};

MinStack.prototype.isEmpty = function() {
  return this._size === 0;
};

MinStack.prototype.push = function(value) {
  if (this._size >= this.capacity) throw new Error('Max capacity ' +
                    'already reached. Remove element before adding a new one');
  if (this.isEmpty()) {
    this._min.push(value);
  } else if (this._min.peek() < value) {
    this._min.push(this._min.peek());
  } else {
    this._min.push(value);
  }
  this._storage[this._size++] = value;
  return this._size;
};

MinStack.prototype.pop = function() {
  if (this.isEmpty()) return null;
  this._min.pop();
  const res = this._storage[--this._size];
  delete this._storage[this._size];
  return res;
};

MinStack.prototype.peek = function() {
  if (this.isEmpty()) return null;
  return this._storage[this._size - 1];
};

MinStack.prototype.min = function() {
  if (this.isEmpty()) return null;
  return this._min.peek();
};

module.exports = MinStack;
