'use strict';

const list = require('../7-single-list-iterable');

describe('Iterable LinkdedList implemented using closure', () => {
  it('should be able to iterate over list', () => {
    const list1 = list();
    const obj1 = { name: 'first' };
    const obj2 = { name: 'second' };
    const obj3 = { name: 'third' };

    list1.push(obj1);
    list1.push(obj2);
    list1.push(obj3);

    expect([...list1].map(el => el.name).toString()).toBe('third,second,first');
    expect(list1.last().data.name).toBe('third');
  });
});
