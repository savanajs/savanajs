/* eslint-disable */

const obj = require('../src/object.js');

describe('Smoke test', () => {

  test('Should be exist a lib Object', () => {

    expect(obj).toBeDefined();

  });

  test('Should be exist a lib extends', () => {

    expect(obj.extends).toBeDefined();

  });

  test('Should be exist a lib create', () => {

    expect(obj.create).toBeDefined();

  });

  test('Should be exist a lib remove', () => {

    expect(obj.remove).toBeDefined();

  });

  test('Should be exist a lib search', () => {

    expect(obj.search).toBeDefined();

  });

  test('Should be exist a lib getKeys', () => {

    expect(obj.getKeys).toBeDefined();

  });

  test('Should be exist a lib getValues', () => {

    expect(obj.getValues).toBeDefined();

  });

  test('Should be exist a lib toArray', () => {

    expect(obj.toArray).toBeDefined();

  });

});

describe('Test method extends', () => {

  test('Should be return false by passed params empty', () => {

    expect(obj.extends()).toBeFalsy();
    expect(obj.extends({})).toBeFalsy();

  });

  test('Should be return the object with other object', () => {

    expect(obj.extends({'firstname': 'John'}, {'lastname': 'Miller'})).toEqual({'firstname': 'John','lastname': 'Miller'});
    expect(obj.extends({}, {'lastname': 'Miller'})).toEqual({'lastname': 'Miller'});
    expect(obj.extends({'firstname': 'John'}, {})).toEqual({'firstname': 'John'});

  });

});

describe('Test method create', () => {

  test('Should be return false by passed params empty', () => {

    expect(obj.create()).toBeFalsy();

  });

  test('Should be return a new object', () => {

    var new_obj = obj.create({'firstname': 'John'});

    expect(new_obj.firstname).toEqual('John');

  });

});

describe('Test method remove', () => {

  test('Should be return false by passed params empty', () => {

    expect(obj.remove()).toBeFalsy();
    expect(obj.remove({})).toBeFalsy();

  });

  test('Should be return a new object with item removed', () => {

    expect(obj.remove({'firstname': 'John','lastname': 'Miller'}, 'lastname')).toEqual({'firstname': 'John'});

  });

});

describe('Test method search', () => {

  test('Should be return false by passed params empty', () => {

    expect(obj.search()).toBeFalsy();
    expect(obj.search({})).toBeFalsy();

  });

  test('Should be return a item searched', () => {

    expect(obj.search({'firstname': 'John','lastname': 'Miller'}, 'lastname')).toEqual('Miller');

  });

});

describe('Test method getKeys', () => {

  test('Should be return false by passed params empty', () => {

    expect(obj.getKeys()).toBeFalsy();

  });

  test('Should be return the keys of object', () => {

    expect(obj.getKeys({'firstname': 'John','lastname': 'Miller'})).toEqual(['firstname','lastname']);

  });

});

describe('Test method getValues', () => {

  test('Should be return false by passed params empty', () => {

    expect(obj.getValues()).toBeFalsy();

  });

  test('Should be return the values of object', () => {

    expect(obj.getValues({'firstname': 'John','lastname': 'Miller'})).toEqual(['John','Miller']);

  });

});

describe('Test method toArray', () => {

  test('Should be return false by passed params empty', () => {

    expect(obj.toArray()).toBeFalsy();

  });

  test('Should be return the index position of object', () => {

    expect(obj.toArray({'firstname': 'John'})).toEqual([["firstname", "John"]]);

  });

})
