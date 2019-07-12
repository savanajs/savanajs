/* eslint-disable */

const url = require('../src/url.js');

describe('Smoke test', () => {

  test('Should be exist a lib URL', () => {

    expect(url).toBeDefined();

  });

  test('Should be exist a getParams', () => {

    expect(url.getParams).toBeDefined();

  });

  test('Should be exist a getCurrent', () => {

    expect(url.getCurrent).toBeDefined();

  });

  test('Should be exist a getInfos', () => {

    expect(url.getInfos).toBeDefined();

  });

});

describe('Test method redirect', () => {

  test('Should return false by passed params empty', () => {

    expect(url.redirect()).toBeFalsy();

  });

  test('Should return true by passed params url', () => {

    expect(url.redirect('http://www.google.com')).toBeTruthy();

  });

});

describe('Test method getParams', () => {

  test('Should return false by passed params empty', () => {

    expect(url.getParams()).toBeFalsy();

  });

  test('Should return the value hello by passed param v and url http://www.google.com?v=hello', () => {

    expect(url.getParams('v','http://www.google.com?v=hello')).toBe('hello');

  });

  test('Should return the value empty by passed param v and url without params http://www.google.com', () => {

    expect(url.getParams('v','http://www.google.com')).toBe('');

  });

});

describe('Test method getCurrent', () => {

  test('Should return the value http://www.website.com', () => {

    expect(url.getCurrent()).toBe('http://localhost/');

  });

});

describe('Test method getInfos', () => {

  test('Should return the value object', () => {

    expect(typeof url.getInfos()).toBe('object');

  });

});
