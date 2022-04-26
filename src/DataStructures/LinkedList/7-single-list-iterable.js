'use strict';

const list = () => {
  let element;
  return {
    push(data) {
      element = {
        prev: element, data
      };
      return element;
    },

    last: () => element,

    [Symbol.iterator]: () => ({
      current: element,
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
    })
  };
};

module.exports = list;
