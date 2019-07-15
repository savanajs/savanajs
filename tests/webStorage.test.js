/* eslint-disable */

const webStorage = require('../src/webStorage.js');

describe('Smoke test', () => {

  test('Should be exist a lib webStorage', () => {

    expect(webStorage).toBeDefined();

  });

  test('Should be exist a lib create', () => {

    expect(webStorage.create).toBeDefined();

  });

  test('Should be exist a lib select', () => {

    expect(webStorage.select).toBeDefined();

  });

  test('Should be exist a lib delete', () => {

    expect(webStorage.delete).toBeDefined();

  });

});

describe('Test method create', () => {

  test('Should return false by passed params empty', () => {

    expect(webStorage.create()).toBeFalsy();

  });

  test('Should return true by create the object storage', () => {

    expect(webStorage.create('test', [{"name": "John","lastname": "Miller"}])).toBeTruthy();
    expect(webStorage.create('test2', "John")).toBeTruthy();

  });

});

describe('Test method select', () => {

  test('Should return false by passed params empty', () => {

    expect(webStorage.select()).toBeFalsy();

  });

  test('Should return false by passed name do not exists', () => {

    expect(webStorage.select('test3')).toBeFalsy();

  });

  test('Should return object selected in storage', () => {

    expect(webStorage.select('test')).toEqual([{"name": "John", "lastname": "Miller"}]);
    expect(webStorage.select('test2')).toEqual("John");

  });

});

describe('Test method delete', () => {

  test('Should return false by passed params empty', () => {

    expect(webStorage.delete()).toBeFalsy();

  });

  test('Should return false by passed value do not object with position of will delete', () => {

    expect(webStorage.delete('test2', 0)).toBeFalsy();

  });

  test('Should return true by passed params to deleted item', () => {

    expect(webStorage.delete('test', 0)).toBeTruthy();
    expect(webStorage.delete('test2')).toBeTruthy();
    expect(webStorage.select('test')).toEqual([]);
    expect(webStorage.select('test2')).toBeFalsy();

  });

});

