'use strict';

const emmitterStack = () => {
  let last = null;
  let length = 0;

  const events = {};
  const emit = (name, ...data) => {
    const event = events[name];
    if (event) event.forEach(fn => fn(...data));
  };

  return {
    on: (name, fn) => {
      const event = events[name];
      if (event) event.push(fn);
      else events[name] = [fn];
    },

    push(data) {
      const prev = last;
      const element = { prev, data };
      last = element;
      if (events['push']) emit('push', data, last);
      length++;
      return last;
    },

    pop() {
      const element = last;
      if (!element) {
        if (events['drain']) emit('drain', last);
        return null;
      } else {
        last = element.prev;
        length--;
        if (events['pop']) emit('pop', element, last);
        return element;
      }
    },

    size() {
      return length;
    },

    clear() {
      last = null;
      length = 0;
      if (events['drain']) emit('drain', last);
    },

    [Symbol.iterator]() {
      return {
        current: last,
        next() {
          const element = this.current;
          if (!element) return {
            done: true,
            value: null
          };
          this.current = element.prev;
          return {
            done: false,
            value: element.data
          };
        }
      };
    }
  };
};

module.exports = emmitterStack();
