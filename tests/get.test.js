/* eslint-disable */

const get = require('../src/get.js');

describe('Smoke test', () => {

  test('Should be exist a lib get', () => {

    expect(get).toBeDefined();

  });

  test('Should be exist a lib timestamp', () => {

    expect(get.getNumberOfString).toBeDefined();

  });

  test('Should be exist a lib count', () => {

    expect(get.count).toBeDefined();

  });

});

describe('Test method getNumberOfString', () => {

  test('Should return false by passed params empty', () => {

    expect(get.getNumberOfString()).toBeFalsy();

  });

  test('Should return of number', () => {

    expect(get.getNumberOfString('hello10hello')).toEqual('10');

  });

});

describe('Test method count', () => {

  test('Should return false by passed params empty', () => {

    expect(get.count()).toBeFalsy();

  });

  test('Should return the value', () => {

    expect(get.count('hello')).toEqual(5);
    expect(get.count(123)).toEqual(3);
    expect(get.count([])).toEqual(0);
    expect(get.count({})).toEqual(0);

  });

});

