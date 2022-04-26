'use strict';

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
  }

  enqueue(item) {
    const last = this.last;
    const element = { next: null, item };
    if (last) {
      last.next = element;
      this.last = element;
    } else {
      this.first = element;
      this.last = element;
    }
  }

  dequeue() {
    const element = this.first;
    if (!element) return null;
    if (this.last === element) {
      this.first = null;
      this.last = null;
    } else {
      this.first = element.next;
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

const queue = new Queue();
for (let i = 0; i < 10; i++) {
  queue.enqueue(i);
}
// console.dir(queue, {depth: 7});
console.log(queue.first.next.next);
console.log([...queue]);
queue.dequeue();
console.log([...queue]);

// module.exports = Queue;
