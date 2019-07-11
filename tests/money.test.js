/* eslint-disable */

const money = require('../src/money.js');

describe('Smoke test', () => {

  test('Should exist a lib Money', () => {

    expect(money).toBeDefined();

  });

  test('Should exist a method format', () => {

    expect(money.format).toBeDefined();

  });

  test('Should exist a method priceToFloat', () => {

    expect(money.priceToFloat).toBeDefined();

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

describe('Test method money format', () => {

  test("should return false by passed params empty", () => {

    expect(money.format()).toBeFalsy();
    expect(money.format(100)).toBeFalsy();
    expect(money.format("", ",")).toBeFalsy();
    expect(money.format("hello", ",", ".")).toBeFalsy();
    expect(money.format(null, ",", ".")).toBeFalsy();
    expect(money.format(false, ",", ".")).toBeFalsy();
    expect(money.format(undefined, ",", ".")).toBeFalsy();

  });

  test("should return the value format in price", () => {

    expect(money.format(1, ",", ".")).toBe("1,00");
    expect(money.format(10, ",", ".")).toBe("10,00");
    expect(money.format(100, ",", ".")).toBe("100,00");
    expect(money.format(1000, ",", ".")).toBe("1.000,00");
    expect(money.format(2599, ",", ".")).toBe("2.599,00");
    expect(money.format(2599.99, ",", ".")).toBe("2.599,99");
    expect(money.format(10000, ",", ".")).toBe("10.000,00");
    expect(money.format(100000, ",", ".")).toBe("100.000,00");
    expect(money.format(1000000, ",", ".")).toBe("1.000.000,00");

  });

});

describe('Test method money priceToFloat', () => {

  test("should return false by passed params empty or invalids", () => {

    expect(money.priceToFloat()).toBeFalsy();
    expect(money.priceToFloat(false)).toBeFalsy();
    expect(money.priceToFloat(null)).toBeFalsy();
    expect(money.priceToFloat(undefined)).toBeFalsy();
    expect(money.priceToFloat(100)).toBe(100);
    expect(money.priceToFloat("100")).toBe("100");

  });

  test("should return the value convert in float number", () => {

    expect(money.priceToFloat("R$ 100,00")).not.toBeNaN();
    expect(money.priceToFloat("R$ 100,00")).toBe(100);
    expect(money.priceToFloat("R$ 1,50")).toBe(1.5);
    expect(money.priceToFloat("R$ 10,50")).toBe(10.5);
    expect(money.priceToFloat("R$ 100,50")).toBe(100.5);
    expect(money.priceToFloat("R$ 1000,50")).toBe(1000.5);
    expect(money.priceToFloat("R$ 4599,99")).toBe(4599.99);

  });

});

describe('Test method money bill', () => {

  test("should return false by passed params invalids", () => {

    expect(money.bill()).toBeFalsy();
    expect(money.bill(null)).toBeFalsy();
    expect(money.bill(undefined)).toBeFalsy();
    expect(money.bill(false)).toBeFalsy();
    expect(money.bill(100)).toBeFalsy();
    expect(money.bill("", 10)).toBeFalsy();
    expect(money.bill("", 10)).toBeFalsy();

  });

  test("should return a object of values", () => {

    expect(money.bill(2000, 10)).toMatchObject({total: "1.800,00", descount: "200,00"});
    expect(money.bill("R$ 2.000,00", 10)).toMatchObject({total: "1.800,00", descount: "200,00"});
    expect(money.bill(200, 10)).toMatchObject({total: "180,00", descount: "20,00"});
    expect(money.bill(20, 10)).toMatchObject({total: "18,00", descount: "2,00"});

  });

});

describe('Test method money installment', () => {

  test("should return false by passed params invalids", () => {

    expect(money.installment()).toBeFalsy();
    expect(money.installment(null, 10)).toBeFalsy();
    expect(money.installment(null, 10, 100)).toBeFalsy();
    expect(money.installment(null, 10, 100, 2)).toBeFalsy();
    expect(money.installment(false, 10, 100, 2)).toBeFalsy();
    expect(money.installment(undefined, 10, 100, 2)).toBeFalsy();

  });

  test("should return a object of values", () => {

    expect(money.installment("R$ 380.50", 10, 50)).toMatchObject({parc: "7x", parc_number: 7, price: "54,36", price_number: 54.36, juros: null});
    expect(money.installment(380.50, 10, 50)).toMatchObject({parc: "7x", parc_number: 7, price: "54,36", price_number: 54.36, juros: null});
    expect(money.installment(380.50, 10, 50, 5)).toMatchObject({parc: "7x", parc_number: 7, price: "76,49", price_number: 76.49, juros: "5% a.m"});
    expect(money.installment(380.50, 1, 50, 5)).toMatchObject({parc: "1x", parc_number: 1, price: "399,53", price_number: 399.53, juros: "5% a.m"});
    expect(money.installment(380.50, 0, 50)).toBeFalsy();

  });

});

describe('Test method money financing', () => {

  test("should return false by passed params invalids", () => {

    expect(money.financing()).toBeFalsy();
    expect(money.financing(null, 10)).toBeFalsy();
    expect(money.financing(null, 10, 100)).toBeFalsy();
    expect(money.financing(null, 10, 100, 2)).toBeFalsy();
    expect(money.financing(false, 10, 100, 2)).toBeFalsy();
    expect(money.financing(undefined, 10, 100, 2)).toBeFalsy();
    expect(money.financing(undefined, 10, 100, 2, 5)).toBeFalsy();

  });

  test("should return a object of values", () => {

    expect(money.financing("R$ 500,00", 10, 100, 2)).toMatchObject({parc: "5x", parc_number: 5, price: "106,08", price_number: 106.08, juros: "2% a.m"});
    expect(money.financing(500.00, 10, 100, 2)).toMatchObject({parc: "5x", parc_number: 5, price: "106,08", price_number: 106.08, juros: "2% a.m"});
    expect(money.financing(500.00, 1, 100, 2)).toMatchObject({parc: "1x", parc_number: 1, price: "510,00", price_number: 510.00, juros: "2% a.m"});

  });

});

describe('Test method money percentalDifference', () => {

  test("should return false by passed params invalids", () => {

    expect(money.percentalDifference()).toBeFalsy();
    expect(money.percentalDifference(null, null)).toBeFalsy();
    expect(money.percentalDifference(false, false)).toBeFalsy();
    expect(money.percentalDifference(undefined, undefined)).toBeFalsy();
    expect(money.percentalDifference(10, null)).toBeFalsy();
    expect(money.percentalDifference(null, 5)).toBeFalsy();

  });

  test("should return a object of values", () => {

    expect(money.percentalDifference("R$ 100,00","R$ 50,00")).toMatchObject({discount: 50, discount_format: "50%"});
    expect(money.percentalDifference("R$ 1.000,00","R$ 500,00")).toMatchObject({discount: 50, discount_format: "50%"});
    expect(money.percentalDifference(100.00, 50.00)).toMatchObject({discount: 50, discount_format: "50%"});
    expect(money.percentalDifference(1000.00, 500.00)).toMatchObject({discount: 50, discount_format: "50%"});

  });

});

describe('Test method money percentageDiscount', () => {

  test("should return false by passed params invalids", () => {

    expect(money.percentageDiscount()).toBeFalsy();
    expect(money.percentageDiscount(null, null)).toBeFalsy();
    expect(money.percentageDiscount(false, false)).toBeFalsy();
    expect(money.percentageDiscount(undefined, undefined)).toBeFalsy();
    expect(money.percentageDiscount(10, null)).toBeFalsy();
    expect(money.percentageDiscount(null, 5)).toBeFalsy();

  });

  test("should return a object of values", () => {

    expect(money.percentageDiscount("R$ 500,00", 10)).toMatchObject(
        {
          discount_format: "450,00",
          discount_format_number: 450,
          discount_format_value: "50,00",
          discount_value: 50,
          increase_format: "550,00",
          increase_format_number: 550
        }
    );

    expect(money.percentageDiscount(500.00, 10)).toMatchObject(
      {
        discount_format: "450,00",
        discount_format_number: 450,
        discount_format_value: "50,00",
        discount_value: 50,
        increase_format: "550,00",
        increase_format_number: 550
      }
    );

  });

});
