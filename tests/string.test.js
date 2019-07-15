/* eslint-disable */

const string = require('../src/string.js');

describe('Smoke test', () => {

  test('Should be exist a lib string', () => {

    expect(string).toBeDefined();

  });

  test('Should be exist a lib contain', () => {

    expect(string.contain).toBeDefined();

  });

  test('Should be exist a lib limitLetter', () => {

    expect(string.limitLetter).toBeDefined();

  });

  test('Should be exist a lib limitWord', () => {

    expect(string.limitWord).toBeDefined();

  });

  test('Should be exist a lib trim', () => {

    expect(string.trim).toBeDefined();

  });

});

describe('Test method contain', () => {

  test('Should return false by passed params empty', () => {

    expect(string.contain()).toBeFalsy();

  });

  test('Should return false by value not founded', () => {

    expect(string.contain(['a','b','c'], 'd')).toBeFalsy();

  });

  test('Should return true by founded value', () => {

    expect(string.contain(['a','b','c'], 'b')).toBeTruthy();

  });

});

describe('Test method limitLetter', () => {

  test('Should return false by passed params empty', () => {

    expect(string.limitLetter()).toBeFalsy();

  });

  test('Should return value limited', () => {

    expect(string.limitLetter('hello world', 0, 2)).toEqual('he...');
    expect(string.limitLetter('hello world', 0, 10)).toEqual('hello worl...');
    expect(string.limitLetter('hello', 0, 10)).toEqual('hello');

  });

});

describe('Test method limitWord', () => {

  test('Should return false by passed params empty', () => {

    expect(string.limitWord()).toBeFalsy();

  });

  test('Should return value limited', () => {

    expect(string.limitWord('hello world', 1)).toEqual('hello ...');
    expect(string.limitWord('hello world today', 2)).toEqual('hello world ...');
    expect(string.limitWord('hello', 10)).toEqual('hello');

  });

});

describe('Test method trim', () => {

  test('Should return false by passed params empty', () => {

    expect(string.trim()).toBeFalsy();

  });

  test('Should return a value without space in fist and last', () => {

    expect(string.trim(' Hello ')).toEqual('Hello');

  });

});
