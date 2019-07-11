/* eslint-disable */

const is = require('../src/is.js');

describe('Smoke test', () => {

  test('Should be exist a lib Is', () => {

    expect(is).toBeDefined();

  });

  test('Should be exist a method email', () => {

    expect(is.email).toBeDefined();

  });

  test('Should be exist a method number', () => {

    expect(is.number).toBeDefined();

  });

  test('Should be exist a method url', () => {

    expect(is.url).toBeDefined();

  });

  test('Should be exist a method function', () => {

    expect(is.function).toBeDefined();

  });

  test('Should be exist a method object', () => {

    expect(is.object).toBeDefined();

  });

  test('Should be exist a method CPF', () => {

    expect(is.CPF).toBeDefined();

  });

  test('Should be exist a method string', () => {

    expect(is.string).toBeDefined();

  });

  test('Should be exist a method IE', () => {

    expect(is.IE).toBeDefined();

  });

  test('Should be exist a method NULL', () => {

    expect(is.NULL).toBeDefined();

  });

  test('Should be exist a method NAN', () => {

    expect(is.NAN).toBeDefined();

  });

});

describe('Test method Email', () => {

  test('Should return false by passed params empty', () => {

    expect(is.email()).toBeFalsy();

  });

  test('Should return false by passed params email invalid', () => {

    expect(is.email('fdsfdsf4dsfsdfsd')).toBeFalsy();

  });

  test('Should return true by passed params email valid', () => {

    expect(is.email('email@gmail.com.br')).toBeTruthy();

  });

});

describe('Test method Number', () => {

  test('Should return false by passed params empty', () => {

    expect(is.number()).toBeFalsy();

  });

  test('Should return false by passed params string', () => {

    expect(is.number('abc')).toBeFalsy();

  });

  test('Should return true by passed params number', () => {

    expect(is.number(0)).toBeTruthy();
    expect(is.number(1)).toBeTruthy();
    expect(is.number(10)).toBeTruthy();
    expect(is.number(1.5)).toBeTruthy();

  });

});

describe('Test method URL', () => {

  test('Should return false by passed params empty', () => {

    expect(is.url()).toBeFalsy();

  });

  test('Should return false by passed params URL invalid', () => {

    expect(is.url('abc')).toBeFalsy();

  });

  test('Should return true by passed params URL valid', () => {

    expect(is.url('https://github.com')).toBeTruthy();

  });

});

describe('Test method FUNCTION', () => {

  test('Should return false by passed params empty', () => {

    expect(is.function()).toBeFalsy();

  });

  test('Should return false by passed params string', () => {

    expect(is.function('abc')).toBeFalsy();

  });

  test('Should return true by passed params function', () => {

    expect(is.function(function(){})).toBeTruthy();

  });

});

describe('Test method Object', () => {

  test('Should return false by passed params empty', () => {

    expect(is.object()).toBeFalsy();

  });

  test('Should return false by passed params string', () => {

    expect(is.object('abc')).toBeFalsy();
    expect(is.object('1')).toBeFalsy();
    expect(is.object(1)).toBeFalsy();

  });

  test('Should return true by passed params object and array', () => {

    expect(is.object({})).toBeTruthy();
    expect(is.object([])).toBeTruthy();

  });

});

describe('Test method String', () => {

  test('Should return false by passed params empty', () => {

    expect(is.string()).toBeFalsy();

  });

  test('Should return false by passed params not string', () => {

    expect(is.string([])).toBeFalsy();
    expect(is.string({})).toBeFalsy();
    expect(is.string(1)).toBeFalsy();

  });

  test('Should return true by passed params object and array', () => {

    expect(is.string('1')).toBeTruthy();
    expect(is.string('abc')).toBeTruthy();

  });

});

describe('Test method CPF', () => {

  test('Should return false by passed params empty', () => {

    expect(is.CPF()).toBeFalsy();

  });

  test('Should return false by passed params invalid', () => {

    expect(is.CPF('abc')).toBeFalsy();
    expect(is.CPF('00000000000')).toBeFalsy();
    expect(is.CPF('1')).toBeFalsy();
    expect(is.CPF(1)).toBeFalsy();

  });

  test('Should return true by passed params CPF', () => {

    expect(is.CPF(12345678909)).toBeTruthy();
    expect(is.CPF('12345678909')).toBeTruthy();

  });

});

describe('Test method NULL', () => {

  test('Should return false by passed params empty', () => {

    expect(is.NULL()).toBeFalsy();

  });

  test('Should return false by passed params invalid', () => {

    expect(is.NULL('1')).toBeFalsy();
    expect(is.NULL(1)).toBeFalsy();

  });

  test('Should return true by passed params NULL', () => {

    expect(is.NULL(null)).toBeTruthy();

  });

});

describe('Test method Undefined', () => {

  test('Should return false by passed params invalid', () => {

    expect(is.undefined('1')).toBeFalsy();
    expect(is.undefined(1)).toBeFalsy();

  });

  test('Should return true by passed params undefined', () => {

    expect(is.undefined()).toBeTruthy();
    expect(is.undefined(undefined)).toBeTruthy();

  });

});

describe('Test method NAN', () => {

  test('Should return false by passed params number', () => {

    expect(is.NAN(1)).toBeFalsy();
    expect(is.NAN(1.0)).toBeFalsy();

  });

  test('Should return true by passed params NAN', () => {

    expect(is.NAN()).toBeTruthy();
    expect(is.NAN(null)).toBeTruthy();
    expect(is.NAN('a')).toBeTruthy();
    expect(is.NAN('1')).toBeTruthy();
    expect(is.NAN([])).toBeTruthy();
    expect(is.NAN({})).toBeTruthy();

  });

});

describe('Test method IE', () => {

  test('Should return false by not IE', () => {

    expect(is.IE()).toBeFalsy();

  });

});
