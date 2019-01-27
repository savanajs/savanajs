/* eslint-disable */

const cookie = require('../src/cookie.js');

describe('Smoke test', () => {

  test("Should exists the cookie lib", () => {

    expect(cookie).toBeDefined();

  });

  test("Should exist the method set", () => {

    expect(cookie.set).toBeDefined();

  });

  test("Should exist the method get", () => {

    expect(cookie.get).toBeDefined();

  });

  test("Should exist the method exists", () => {

    expect(cookie.exists).toBeDefined();

  });

  test("Should exist the method remove", () => {

    expect(cookie.remove).toBeDefined();

  });

  test("Should exist the method removeAll", () => {

    expect(cookie.removeAll).toBeDefined();

  });

});

describe('Test method set ', () => {

  test("Should return false by passed empty params", () => {

    expect(cookie.set()).toBeFalsy();
    expect(cookie.set('test')).toBeFalsy();
    expect(cookie.set('test', 'hello')).toBeFalsy();

  });

  test("Should return the value(s) registed in cookie", () => {

    expect(cookie.set("exemple", "hello", 2, "/home", "subdomain.site.com")).toBe("exemple=hello;path=/home;domain=subdomain.site.com");
    expect(cookie.set("exemple", "hello", 2)).toBe("exemple=hello;;");
    expect(cookie.set("exemple", "hello", "2")).toBe("exemple=hello;;");
    expect(cookie.set("exemple2", "hello", 2)).toBe("exemple2=hello;;");

  });

});

describe('Test method get', () => {

  test('Should return false by passed empty params', () => {

    expect(cookie.get()).toBeFalsy();

  });

  test('Should return the value by passed the name cookie', () => {

    expect(cookie.get("exemple")).toBe("hello");
    expect(cookie.get("exemple2")).toBe("hello");

  });

  test('Should return empty by not exists name cookie', () => {

    expect(cookie.get("exemple1")).toBe('');
    expect(cookie.get(123)).toBe('');

  });

});

describe('Test method exists', () => {

  test('Should return false by passed empty params', () => {

    expect(cookie.exists()).toBeFalsy();

  });

  test('Should return true by passed name cookie exists', () => {

    expect(cookie.exists('exemple')).toBeTruthy();

  });

  test('Should return false by passed name cookie not exists', () => {

    expect(cookie.exists('exemple1')).toBeFalsy();
    expect(cookie.exists(123)).toBeFalsy();

  });

});

describe('Test method remove', () => {

  test('Should return false by passed empty params', () => {

    expect(cookie.remove()).toBeFalsy();

  });

  test('Should return true by passed name cookie exists', () => {

    expect(cookie.remove('exemple')).toBeTruthy();
    expect(cookie.exists('exemple')).toBeFalsy();

  });

  test('Should return false by passed name cookie not exists', () => {

    expect(cookie.remove('exemple1')).toBeFalsy();
    expect(cookie.remove(123)).toBeFalsy();

  });

});

describe('Test method removeAll', () => {

  test('Should remove all cookies', () => {

    expect(cookie.set("exemple", "hello", 2)).toBe("exemple=hello;;");
    expect(cookie.removeAll()).toBeTruthy();
    expect(cookie.exists('exemple')).toBeFalsy();

    expect(cookie.set("exemple", "hello", 2)).toBe("exemple=hello;;");
    expect(cookie.set("exemple2", "hello", 2)).toBe("exemple2=hello;;");
    expect(cookie.removeAll()).toBeTruthy();
    expect(cookie.exists('exemple')).toBeFalsy();
    expect(cookie.exists('exemple2')).toBeFalsy();

  });

  test('Should returned error by not exists cookies', () => {

    expect(cookie.removeAll()).toBeFalsy();

  });

});

