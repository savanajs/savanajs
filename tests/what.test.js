/* eslint-disable */

const what = require('../src/what.js');

describe('Smoke test', () => {

  test('Should be exist a lib what', () => {

    expect(what).toBeDefined();

  });

  test('Should be exist a lib browser', () => {

    expect(what.browser).toBeDefined();

  });

  test('Should be exist a lib device', () => {

    expect(what.device).toBeDefined();

  });

});

describe('Test method browser', () => {

  test('Should return false by passed params empty', () => {

    expect(what.browser()).toBeFalsy();

  });

});

describe('Test method device', () => {

  test('Should return false by passed params empty', () => {

    expect(what.device()).toBe('tablet');

  });

});

