'use strict';

class Stack {
  constructor() {
    this.last = null;
  }

  push(item) {
    const prev = this.last;
    const element = { prev, item };
    this.last = element;
  }

  pop() {
    const element = this.last;
    if (!element) return null;
    this.last = element.prev;
    element.prev = null; // this is probably wrong
    return element.item;
  }

  peek() {
    if (!this.last) return null;
    return this.last.item;
  }

  [Symbol.iterator]() {
    return {
      current: this.last,
      next() {
        const element = this.current;
        if (!element) return {
          done: true,
          value: null
        };
        this.current = element.prev;
        return {
          done: false,
          value: element.item
        };
      }
    };
  }

  clone() {
    const temp = new Stack();
    const cloned = new Stack();
    for (const elem of this) {
      temp.push(elem);
    }
    for (const elem of temp) {
      cloned.push(elem);
    }
    return cloned;
  }

  isEmpty() {
    return !this.last;
  }


}

module.exports = Stack;
