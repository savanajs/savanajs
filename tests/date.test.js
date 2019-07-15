/* eslint-disable */

const date = require('../src/date.js');

describe('Smoke test', () => {

  test('Should be exist a lib date', () => {

    expect(date).toBeDefined();

  });

  test('Should be exist a lib timestamp', () => {

    expect(date.timestamp).toBeDefined();

  });

  test('Should be exist a lib daysDifferenceBetweenDates', () => {

    expect(date.daysDifferenceBetweenDates).toBeDefined();

  });

});

describe('Test method timestamp', () => {

  test('Should return the value', () => {

    expect(date.timestamp()).toBeDefined();
    expect(typeof date.timestamp()).toEqual('number');

  });

});

describe('Test method daysDifferenceBetweenDates', () => {

  test('Should return false by passed params empty', () => {

    expect(date.daysDifferenceBetweenDates()).toBeFalsy();
    expect(date.daysDifferenceBetweenDates(new Date(2016, 10, 20))).toBeFalsy();

  });

  test('Should return the value', () => {

    expect(date.daysDifferenceBetweenDates(new Date(2016, 10, 20), new Date(2016, 10, 30))).toBe(10);
    expect(date.daysDifferenceBetweenDates(new Date(2016, 10, 30), new Date(2016, 10, 20))).toBe(0);
    expect(typeof date.daysDifferenceBetweenDates(new Date(2016, 10, 20), new Date(2016, 10, 30))).toEqual('number');

  });

});

