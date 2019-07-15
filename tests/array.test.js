/* eslint-disable */

const arr = require('../src/array.js');

describe('Smoke test', () => {

  test('Should be exist a lib Array', () => {

    expect(arr).toBeDefined();

  });

  test('Should be exist a lib Array', () => {

    expect(arr.add).toBeDefined();

  });

  test('Should be exist a lib Array', () => {

    expect(arr.remove).toBeDefined();

  });

  test('Should be exist a lib Array', () => {

    expect(arr.getIndex).toBeDefined();

  });

  test('Should be exist a lib Array', () => {

    expect(arr.search).toBeDefined();

  });

});

describe('Test method add', () => {

  test('Should be return false by passed params empty', () => {

    expect(arr.add()).toBeFalsy();
    expect(arr.add([])).toBeFalsy();

  });

  test('Should be add a value in last position of array', () => {

    expect(arr.add([1,2,3], 5)).toEqual([1, 2, 3, 5]);
    expect(arr.add([1,2,3], 5, 'last')).toEqual([1, 2, 3, 5]);

  });

  test('Should be add a value in first position of array', () => {

    expect(arr.add([1,2,3], 5, 'first')).toEqual([5, 1, 2, 3]);

  });

  test('Should be add a value in position of array', () => {

    expect(arr.add([1,2,3], 5, 1)).toEqual([1, 5, 2, 3]);

  });

});

describe('Test method remove', () => {

  test('Should be return false by passed params empty', () => {

    expect(arr.remove()).toBeFalsy();

  });

  test('Should be remove the item in array', () => {

    expect(arr.remove(['a','b','c'], 'b')).toEqual(['a', 'c']);
    expect(arr.remove(['a','b','c'], null, 1)).toEqual(['a', 'c']);
    expect(arr.remove(['a','b','c'])).toEqual(['a','b','c']);

  });

});

describe('Test method getIndex', () => {

  test('Should be return false by passed params empty', () => {

    expect(arr.getIndex()).toBeFalsy();

  });

  test('Should be return the index position of array', () => {

    expect(arr.getIndex(['a','b','c'], 'b')).toEqual(1);
    expect(arr.getIndex(['a','b','c'], 'd')).toEqual(-1);

  });

});

describe('Test method search', () => {

  test('Should be return false by passed params empty', () => {

    expect(arr.search()).toBeFalsy();

  });

  test('Should be return the value searched', () => {

    expect(arr.search(['a','b','c'], 'b')).toEqual('b');
    expect(arr.search(['a','b','c'], null, 1)).toEqual('b');
    expect(arr.search(['a','b','c'])).toEqual(['a', 'b', 'c']);

  });

});
