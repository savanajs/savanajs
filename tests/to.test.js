/* eslint-disable */

const to = require('../src/to.js');

describe('Smoke test', () => {

  test('Should be exist a lib TO', () => {

    expect(to).toBeDefined();

  });

  test('Should be exist a method HTML', () => {

    expect(to.HTML).toBeDefined();

  });

  test('Should be exist a method JSON', () => {

    expect(to.JSON).toBeDefined();

  });

  test('Should be exist a method XML', () => {

    expect(to.XML).toBeDefined();

  });

  test('Should be exist a method rewrite', () => {

    expect(to.rewrite).toBeDefined();

  });

  test('Should be exist a method string', () => {

    expect(to.string).toBeDefined();

  });

  test('Should be exist a method upper', () => {

    expect(to.upper).toBeDefined();

  });

  test('Should be exist a method lower', () => {

    expect(to.lower).toBeDefined();

  });

});

describe('Test method HTML', () => {

  test('Should return false by passed params empty', () => {

    expect(to.HTML()).toBeFalsy();

  });

  test('Should return object by passed params html string', () => {

    expect(to.HTML('<p>Hello World</p>')).toBeDefined();
    expect(typeof to.HTML('<p>Hello World</p>')).toBe('object');

  });

});

describe('Test method JSON', () => {

  test('Should return false by passed params empty', () => {

    expect(to.JSON()).toBeFalsy();

  });

  test('Should return object by passed params json string', () => {

    expect(to.HTML('{"name": "Hello"}')).toBeDefined();
    expect(typeof to.JSON('{"name": "Hello"}')).toBe('object');

  });

});

describe('Test method STRING', () => {

  test('Should return false by passed params empty', () => {

    expect(to.string()).toBeFalsy();

  });

  test('Should return String by passed params number', () => {

    expect(to.string(1)).toBeDefined();
    expect(to.string(1)).toBe('1');
    expect(typeof to.string(1)).toBe('string');
    expect(typeof to.string({"name": "Hello"})).toBe('string');
    expect(to.string({"name": "Hello"})).toBe('{"name":"Hello"}');

  });

});

describe('Test method XML', () => {

  test('Should return false by passed params empty', () => {

    expect(to.XML()).toBeFalsy();

  });

  test('Should return Object by passed String', () => {

    expect(to.XML('<p>Hello World</p>')).toBeDefined();
    expect(typeof to.XML('<p>Hello World</p>')).toBe('object');

  });

});

describe('Test method rewrite', () => {

  test('Should return false by passed params empty', () => {

    expect(to.rewrite()).toBeFalsy();

  });

  test('Should return String rewrite by passed String', () => {

    expect(to.rewrite('Hello World caça está')).toBeDefined();
    expect(to.rewrite('Hello World caça está')).toBe('hello-world-caca-esta');

  });

});

describe('Test method uppercase', () => {

  test('Should return false by passed params empty', () => {

    expect(to.upper()).toBeFalsy();

  });

  test('Should return String Uppercase rewrite by passed String', () => {

    expect(to.upper('hello world')).toBeDefined();
    expect(to.upper('hello world')).toBe('HELLO WORLD');

  });

});

describe('Test method lowercase', () => {

  test('Should return false by passed params empty', () => {

    expect(to.lower()).toBeFalsy();

  });

  test('Should return String Lowercase rewrite by passed String', () => {

    expect(to.lower('HELLO WORLD')).toBeDefined();
    expect(to.lower('HELLO WORLD')).toBe('hello world');

  });

});


