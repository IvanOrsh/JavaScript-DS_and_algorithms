'use strict';

const WeirdStack = function(separator) {
  this.storage = '';
  this.separator = separator || '|'; // maybe this is wrong
  this._size = 0;
};

WeirdStack.prototype.isEmpty = function() {
  return this._size === 0;
};

WeirdStack.prototype.size = function() {
  return this._size;
};

WeirdStack.prototype.push = function(value) {
  this.storage += this.separator + value;
  this._size++;
};

WeirdStack.prototype.clear = function() {
  this.storage = '';
  this._size = 0;
};

WeirdStack.prototype.peek = function() {
  if (this.isEmpty()) return '';
  if (this.size() === 1) {
    const res = this.storage.slice(1);
    return res;
  }
  const lastSeparatorIndex = this.storage.lastIndexOf(this.separator);
  const res = this.storage.slice(lastSeparatorIndex + 1);
  return res;
};

WeirdStack.prototype.pop = function() {
  if (this.isEmpty()) return null;
  if (this._size === 1) {
    const res = this.storage.slice(1);
    this.clear();
    return res;
  }

  const lastSeparatorIndex = this.storage.lastIndexOf(this.separator);
  const res = this.storage.slice(lastSeparatorIndex + 1);
  this.storage = this.storage.slice(0, lastSeparatorIndex);
  this._size--;
  return res;
};

module.exports = WeirdStack;
