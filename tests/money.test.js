/* eslint-disable */

const money = require('../src/money.js');

describe('Smoke test', () => {

  test('Should exist a lib Money', () => {

    expect(money).toBeDefined();

  });

  test('Should exist a method format', () => {

    expect(money.format).toBeDefined();

  });

  test('Should exist a method strToFloat', () => {

    expect(money.strToFloat).toBeDefined();

  });

  test('Should exist a method bill', () => {

    expect(money.bill).toBeDefined();

  });

  test('Should exist a method installment', () => {

    expect(money.installment).toBeDefined();

  });

  test('Should exist a method financing', () => {

    expect(money.financing).toBeDefined();

  });

  test('Should exist a method percentalDifference', () => {

    expect(money.percentalDifference).toBeDefined();

  });

  test('Should exist a method percentageDiscount', () => {

    expect(money.percentageDiscount).toBeDefined();

  });

});
