/* eslint-disable */

const arr = require('../src/array.js');

describe('Smoke test', () => {

  test('Should be exist a lib Array', () => {

    expect(arr).toBeDefined();

  });

  test('Should be exist a lib Array add', () => {

    expect(arr.add).toBeDefined();

  });

  test('Should be exist a lib Array remove', () => {

    expect(arr.remove).toBeDefined();

  });

  test('Should be exist a lib Array removeAt', () => {

    expect(arr.removeAt).toBeDefined();

  });

  test('Should be exist a lib Array getIndex', () => {

    expect(arr.getIndex).toBeDefined();

  });

  test('Should be exist a lib Array search', () => {

    expect(arr.search).toBeDefined();

  });

  test('Should be exist a lib Array searchAt', () => {

    expect(arr.searchAt).toBeDefined();

  });

  test('Should be exist a lib Array intersection', () => {

    expect(arr.intersection).toBeDefined();

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
    expect(arr.remove(['a','b','c'])).toEqual(['a','b','c']);

  });

  test('Should be remove the item in array by index', () => {

    expect(arr.removeAt(['a','b','c'], 1)).toEqual(['a', 'c']);

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
    expect(arr.search(['a','b','c'])).toEqual(['a', 'b', 'c']);

  });

  test('Should be return the value searched by index', () => {

    expect(arr.searchAt(['a','b','c'], 1)).toEqual('b');

  });

});

describe('Test method intersection', () => {

  test('Should be return false by passed params empty', () => {

    expect(arr.intersection()).toBeFalsy();
    expect(arr.intersection(1)).toBeFalsy();
    expect(arr.intersection(1,2)).toBeFalsy();
    expect(arr.intersection('a')).toBeFalsy();
    expect(arr.intersection('a','b')).toBeFalsy();

  });

  test('Should be return the value intersection', () => {

    expect(arr.intersection(['a','b','c'], ['b'])).toEqual(['b']);
    expect(arr.intersection([1,2,3,4,5], [3,4])).toEqual([3,4]);

  });

});
