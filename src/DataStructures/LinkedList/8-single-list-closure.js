'use strict';

const comparator = compareFunction => {
  const defaultCompare = (a, b) => ((a === b) ? 0 : (a < b) ? -1 : 1);
  const compare = compareFunction || defaultCompare;
  return {
    equal: (a, b) => compare(a, b) === 0,
    lessThan: (a, b) => compare(a, b) < 0,
    greaterThan: (a, b) => compare(a, b) > 0,
    lessThanOrEqual: (a, b) => compare(a, b) < 0 || compare(a, b) === 0,
    greaterThanOrEqual: (a, b) => this.compare(a, b) > 0 || compare(a, b) === 0,
  };
};

const linkedList = compareFn => {
  const list = { head: null, tail: null, compare: comparator(compareFn) };
  return {
    prepend(data) {
      const elem = { next: list.head, data };
      list.head = elem;
      if (!list.tail) list.tail = elem;
      return list;
    },

    append(data) {
      const elem = { next: null, data };
      if (!list.head) {
        list.head = elem;
        list.tail = elem;
        return list;
      }
      list.tail.next = elem;
      list.tail = elem;
      return list;
    },

    [Symbol.iterator]: () => ({
      current: list.head,
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
    }),

    insert(data, rawIndex) {
      const idx = rawIndex < 0 ? 0 : rawIndex;
      if (idx === 0) this.prepend(data);
      else {
        let count = 1;
        let current = list.head;
        const element = { next: null, data };
        while (current) {
          if (count === idx) break;
          current = current.next;
          count++;
        }
        if (current) {
          element.next = current.next;
          current.next = element;
        } else if (list.tail) {
          list.tail.next = element;
          list.tail = element;
        } else {
          list.head = element;
          list.tail = element;
        }
      }
      return list;
    }
  };
};

module.exports = linkedList;
