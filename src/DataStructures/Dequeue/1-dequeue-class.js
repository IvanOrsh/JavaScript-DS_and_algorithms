'use strict';

class Dequeue {
  constructor() {
    this.first = null;
    this.last = null;
  }

  push(item) {
    const last = this.last;
    const element = { prev: last, next: null, item };
    if (last) {
      last.next = element;
      this.last = element;
    } else {
      this.first = element;
      this.last = element;
    }
  }

  pop() {
    const element = this.last;
    if (!element) return null;
    if (this.first === element) {
      this.first = null;
      this.last = null;
    } else {
      this.last = element.prev;
      this.last = null;
    }
    return element.item;
  }

  unshift(item) {
    const first = this.first;
    const element = { prev: null, next: first, item };
    if (first) {
      first.prev = element;
      this.first = element;
    } else {
      this.first = element;
      this.last = element;
    }
  }

  shift() {
    const element = this.first;
    if (!element) return null;
    if (this.last === element) {
      this.first = null;
      this.last = null;
    } else {
      this.first = element.next;
      this.first.perv = null;
    }
    return element.item;
  }

  [Symbol.iterator]() {
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
          value: element.item
        };
      }
    };
  }
}

module.exports = Dequeue;
