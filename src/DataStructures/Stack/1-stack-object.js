'use strict';

const Stack = function(capacity) {
  this._capacity = capacity || Infinity;
  this._storage = {};
  this._size = 0;
};

Stack.prototype.size = function() {
  return this._size;
};

Stack.prototype.isEmpty = function() {
  return this._size === 0;
};

Stack.prototype.push = function(value) {
  if (this._size < this._capacity) {
    this._storage[this._size++] = value;
    return this._size;
  }
  throw new Error('Max capacity already reached. Remove ' +
                  'element before adding a new one.');
};

Stack.prototype.peek = function() {
  if (this.isEmpty()) return null; // this is wrong
  return this._storage[this._size - 1];
};

Stack.prototype.pop = function() {
  if (this.isEmpty()) throw new Error('Empty Stack');
  const res =  this._storage[--this._size];
  delete this._storage[this._size];
  return res;
};

Stack.prototype.contains = function(value) {
  if (this.isEmpty()) return false;
  return Object.values(this._storage).indexOf(value) > -1;
};

Stack.prototype.until = function(value) {
  if (this.isEmpty()) throw new Error('Empty stack');
  if (!this.contains(value)) throw new Error('This value cannot be found');
  return this.size() - Object.values(this._storage).lastIndexOf(value);
};

// sorting stack using recursion
Stack.prototype.sortRec = function() {
  if (!this.isEmpty()) {
    const temp = this.pop();
    this.sortRec();
    this._sortedInsert(temp);
  }
};

Stack.prototype._sortedInsert = function(element) {
  if (this.isEmpty() || element > this.peek()) {
    this.push(element);
  } else {
    const temp = this.pop();
    this._sortedInsert(element);
    this.push(temp);
  }
};

module.exports = Stack;
