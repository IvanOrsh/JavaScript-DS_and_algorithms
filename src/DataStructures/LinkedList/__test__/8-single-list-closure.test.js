'use strict';

const linkedList = require('../8-single-list-closure');

describe('Linked List implemented using closure', () => {
  it('should create empty Linked List', () => {
    const list = linkedList();
    expect([...list].length).toBe(0);
  });

  it('should append node to Linked List', () => {
    const list = linkedList();
    list.append(1);
    list.append(2);
    expect([...list].toString()).toBe('1,2');
  });

  it('should prepend node to Linked List', () => {
    const list = linkedList();
    list.prepend(2);
    list.append(1);
    list.prepend(3);
    expect([...list].toString()).toBe('3,2,1');
  });

  it('should insert node to Linked List', () => {
    const list = linkedList();
    list.insert(4, 3);
    list.insert(3, 2);
    list.insert(2, 1);
    list.insert(1, -7);
    list.insert(10, 9);
    expect([...list].toString()).toBe('1,4,2,3,10');
  });

});
