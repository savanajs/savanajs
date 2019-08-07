# SavanaJS - Felina

[![Build Status](https://travis-ci.org/savanajs/savanajs.svg?branch=felina)](https://travis-ci.org/savanajs/savanajs)

Savana is a JavaScript framework that assists in developing web applications using DOM manipulation methods helpers and simple concepts of client-side development.

## Browser Support

This library relies on [Fetch API](https://fetch.spec.whatwg.org/). And this API is supported in the following browsers.

![Chrome](https://cloud.githubusercontent.com/assets/398893/3528328/23bc7bc4-078e-11e4-8752-ba2809bf5cce.png) | ![Firefox](https://cloud.githubusercontent.com/assets/398893/3528329/26283ab0-078e-11e4-84d4-db2cf1009953.png) | ![Opera](https://cloud.githubusercontent.com/assets/398893/3528330/27ec9fa8-078e-11e4-95cb-709fd11dac16.png) | ![Safari](https://cloud.githubusercontent.com/assets/398893/3528331/29df8618-078e-11e4-8e3e-ed8ac738693f.png) | ![IE](https://cloud.githubusercontent.com/assets/398893/3528325/20373e76-078e-11e4-8e3a-1cb86cf506f0.png) |
--- | --- | --- | --- | --- |
39+ ✔ | 42+ ✔ | 29+ ✔ | 10.1+ ✔ | Nope ✘ |

## Installation

Insert in your end body.

```html
<body>
...
</body>
<script src="/dist/savana.min.js"></script>
```

## Methods

Just below we see the documentation and examples of use of framework

### Arrays

Methods of manager of arrays.

#### $savana.array.add(array, value, position)

**Arguments**

| Argument | Type    | Options           |
|----------|---------|-------------------|
|`array *`   |*string* | |
|`value *`   |*string or number* | |
|`position`   |*string* | last, first |


**Add value in last position of array**

```js
 $savana.array.add([1,2,3], 4); // [1,2,3,4]
 $savana.array.add([1,2,3], 4, "last"); // [1,2,3,4]
```

**Add value in first position of array**

```js
 $savana.array.add([1,2,3], 4, "first"); // [4,1,2,3]
```

**Add value in position of array**

```js
 $savana.array.add([1,2,3], 4, 1); // [1,4,2,3]
```

#### $savana.array.remove(array, value)

**Arguments**

| Argument | Type    | Options           |
|----------|---------|-------------------|
|`array *`   |*string* | |
|`value *`   |*string or number* | |

**Remove the value of array**

```js
 $savana.array.remove(['a','b','c'], 'b'); // ['a','c']
```

#### $savana.array.removeAt(array, index)

**Arguments**

| Argument | Type    | Options           |
|----------|---------|-------------------|
|`array *`   |*string* | |
|`index *`   |*number | |

**Remove the index position of array**

```js
 $savana.array.removeAt(['a','b','c'], 1); // ['a','c']
```

#### $savana.array.getIndex(arr, value)

**Arguments**

| Argument | Type    | Options           |
|----------|---------|-------------------|
|`array *`   |*string* | |
|`value *`   |*string or number* | |

**Get index position of array**

```js
 $savana.array.getIndex(['a','b','c'], 'b'); // 1
```

#### $savana.array.search(arr, value, position)

**Arguments**

| Argument | Type    | Options           |
|----------|---------|-------------------|
|`array *`   |*string* | |
|`value *`   |*string or number or NULL* | |
|`position`   |*string* | last, first |

**Get the value of array**

```js
 $savana.array.search(['a','b','c'], 'b'); // b
```

#### $savana.array.searchAt(arr, index)

**Arguments**

| Argument | Type    | Options           |
|----------|---------|-------------------|
|`array *`   |*string* | |
|`index`   |*number* | |

**Get the value by index of array**

```js
 $savana.array.searchAt(['a','b','c'], 1); // b
```


#### $savana.array.intersection(arr1, arr2)

**Arguments**

| Argument | Type    | Options           |
|----------|---------|-------------------|
|`arr1 *`   |*array* | |
|`arr2`   |*array* | |

**Get the value by index of array**

```js
$savana.array.intersection(['a','b','c'], ['b']); // ['b']
$savana.array.intersection([1,2,3,4,5], [3,4]); // [3,4]
```

### Cookie

Methods of manager of cookies.

#### $savana.cookie.get(name)

**Arguments**

| Argument | Type    | Options           |
|----------|---------|-------------------|
|`name *`   |*string* | |

**Get the value of array**

```js
 $savana.cookie.get('fullname'); // John Carter
```

#### $savana.cookie.exists(name)

**Arguments**

| Argument | Type    | Options           |
|----------|---------|-------------------|
|`name *`   |*string* | |

**Verify if cookie exists**

```js
 $savana.cookie.exists('fullname'); // true or false
```

#### $savana.cookie.remove(name, path, domain)

**Arguments**

| Argument | Type    | Options           |
|----------|---------|-------------------|
|`name *`   |*string* | |
|`path`   |*string* | |
|`domain`   |*string* | 

**Remove cookie**

```js
 $savana.cookie.remove("exemple"); // true or false
 $savana.cookie.remove("exemple", "/home", "subdomain.site.com"); // true or false
```

#### $savana.cookie.removeAll()

**Remove all cookies**

```js
 $savana.cookie.removeAll(); // true or false
```

#### $savana.cookie.set(name, value, time, path, domain)

**Arguments**

| Argument | Type    | Options           |
|----------|---------|-------------------|
|`name *`   |*string* | |
|`value *`   |*string or number* | |
|`time *`   |*number* | In hours |
|`path`   |*string* | |
|`domain`   |*string* | 

**Save cookie**

```js
 $savana.cookie.set("exemple", "hello", 2);
 $savana.cookie.set("exemple2", "hello", 2, "/home", "subdomain.site.com");
```

### Date

Methods of manager of date.

#### $savana.date.timestamp()

**Get the timestamp**

```js
$savana.date.timestamp()
```

#### $savana.date.daysDifferenceBetweenDates()

**Get the defference between dates**

```js
$savana.date.daysDifferenceBetweenDates(new Date(2016, 10, 20), new Date(2016, 10, 30))
```

### Get

Methods of manager of get.

#### $savana.get.getNumberOfString(value)

**Arguments**

| Argument | Type    | Options           |
|----------|---------|-------------------|
|`value *`   |*string* | |

**Get number of strings**

```js
$savana.get.getNumberOfString('hello10hello') // 10
```

#### $savana.get.count(value)

**Arguments**

| Argument | Type    | Options           |
|----------|---------|-------------------|
|`value *`   |*string, number or Object* | |

**Get the quantity of letters**

```js
$savana.get.count('hello') // 5
```

**Get the quantity items of array**

```js
$savana.get.count([]) // 0
```

**Get the quantity items of object**

```js
$savana.get.count({}) // 0
```

### Is

Methods of manager of validations.

#### $savana.is.email(email)

**Arguments**

| Argument | Type    | Options           |
|----------|---------|-------------------|
|`email *`   |*string* | |

**Validation of email**

```js
$savana.is.email('email@gmail.com.br'); // true
```

#### $savana.is.number(number)


**Arguments**

| Argument | Type    | Options           |
|----------|---------|-------------------|
|`number *`   |*number* | |

**Validation of number**

```js
$savana.is.number(10); // true
```

#### $savana.is.url(url)

**Arguments**

| Argument | Type    | Options           |
|----------|---------|-------------------|
|`url *`   |*string* | |

**Validation of URL**

```js
$savana.is.url('https://github.com'); // true
```

#### $savana.is.function(value)

**Arguments**

| Argument | Type    | Options           |
|----------|---------|-------------------|
|`value *`   |*function* | |

**Validation of function**

```js
$savana.is.function(function(){}); // true
```

#### $savana.is.object(value)

**Arguments**

| Argument | Type    | Options           |
|----------|---------|-------------------|
|`value *`   |*object* | |

**Validation of object**

```js
$savana.is.object({}); // true
```


#### $savana.is.CPF(value)

**Arguments**

| Argument | Type    | Options           |
|----------|---------|-------------------|
|`value *`   |*string or number* | |

**Validation of CPF**

```js
$savana.is.CPF('12345678909'); // true
```

#### $savana.is.string(value)

**Arguments**

| Argument | Type    | Options           |
|----------|---------|-------------------|
|`value *`   |*string* | |

**Validation of String**

```js
$savana.is.CPF('hello'); // true
```

#### $savana.is.IE()

**Validation of Browser IE**

```js
$savana.is.IE(); // true
```

#### $savana.is.NULL(value)

**Arguments**

| Argument | Type    | Options           |
|----------|---------|-------------------|
|`value *`   |*null* | |

**Validation of String**

```js
$savana.is.NULL(1); // false
$savana.is.NULL(null); // true
```

#### $savana.is.undefined(value)

**Arguments**

| Argument | Type    | Options           |
|----------|---------|-------------------|
|`value *`   |*undefined* | |

**Validation of Undefined**

```js
$savana.is.undefined(1); // false
$savana.is.undefined(undefined); // true
```

#### $savana.is.NAN(value)

**Arguments**

| Argument | Type    | Options           |
|----------|---------|-------------------|
|`value *`   |*string* | |

**Validation of NAN**

```js
$savana.is.NAN(1); // false
$savana.is.NAN('1'); // true
```

### Money

Methods of manager of validations.

#### $savana.money.format(value, dec_point, thousands_sep)

**Arguments**

| Argument | Type    | Options           |
|----------|---------|-------------------|
|`value *`   |*number* | |
|`dec_point *` |*string* | , |
|`thousands_sep *`   |*string* | . |

**Format money**

```js
$savana.money.format('10',',','.'); // 10,00
```

#### $savana.money.priceToFloat(value)

**Arguments**

| Argument | Type    | Options           |
|----------|---------|-------------------|
|`value *`   |*string* | |

**Convert price value to float**

```js
$savana.money.priceToFloat("R$ 100,00"); // 100.00
```

#### $savana.money.bill(value, discount)

**Arguments**

| Argument | Type    | Options           |
|----------|---------|-------------------|
|`value *`   |*string or number* | |
|`discount *`   |*number* | |

**Calculate Billet Value**

```js
$savana.money.bill(2000, 10); // {total: "1.800,00", descount: "200,00"};
$savana.money.bill("R$ 2.000,00", 10); // {total: "1.800,00", descount: "200,00"};
```

#### $savana.money.installment(value, quantity_installment, min_installment)

**Arguments**

| Argument | Type    | Options           |
|----------|---------|-------------------|
|`value *`   |*string or number* | |
|`quantity_installment *`   |*number* | |
|`min_installment *`   |*number* | |

**Calculate of installment**

```js
$savana.money.installment("R$ 380.50", 10, 50); 
//{parc: "7x", parc_number: 7, price: "54,36", price_number: 54.36, juros: null})
$savana.money.installment(380.50, 10, 50); 
//{parc: "7x", parc_number: 7, price: "54,36", price_number: 54.36, juros: null})
```

#### $savana.money.financing(value, quantity_installment, min_installment, interest)

**Arguments**

| Argument | Type    | Options           |
|----------|---------|-------------------|
|`value *`   |*string or number* | |
|`quantity_installment *`   |*number* | |
|`min_installment *`   |*number* | |
|`interest *`   |*number* | |

**Calculate of financing**

```js
$savana.money.financing("R$ 500,00", 10, 100, 2);
// {parc: "5x", parc_number: 5, price: "106,08", price_number: 106.08, juros: "2% a.m"});
$savana.money.money.financing(500.00, 10, 100, 2)); 
//{parc: "5x", parc_number: 5, price: "106,08", price_number: 106.08, juros: "2% a.m"});
```

#### $savana.money.percentalDifference(oldValue, newValue)

**Arguments**

| Argument | Type    | Options           |
|----------|---------|-------------------|
|`oldValue *`   |*string or number* | |
|`newValue *`   |*string or number* | |

**Calculate the value percental Difference**

```js
$savana.money.percentalDifference("R$ 100,00","R$ 50,00");
// {discount: 50, discount_format: "50%"}
$savana.money.percentalDifference(100.00, 50.00); 
// {discount: 50, discount_format: "50%"}
```

#### $savana.money.percentageDiscount(oldValue, newValue)

**Arguments**

| Argument | Type    | Options           |
|----------|---------|-------------------|
|`oldValue *`   |*string or number* | |
|`newValue *`   |*string or number* | |

**Calculate the value percentage discount**

```js
$savana.money.percentageDiscount("R$ 100,00","R$ 50,00");
/*
{
  discount_format: "450,00",
  discount_format_number: 450,
  discount_format_value: "50,00",
  discount_value: 50,
  increase_format: "550,00",
  increase_format_number: 550
}
*/
$savana.money.percentageDiscount(100.00, 50.00); 
/*
{
  discount_format: "450,00",
  discount_format_number: 450,
  discount_format_value: "50,00",
  discount_value: 50,
  increase_format: "550,00",
  increase_format_number: 550
}
*/
```

### Object

Methods of manager of objects.

#### $savana.object.extends(objectValue1, objectValue2)

**Arguments**

| Argument | Type    | Options           |
|----------|---------|-------------------|
|`objectValue1 *`   |*Object* | |
|`objectValue2 *`   |*Object* | |

**Extends a object**

```js
$savana.obj.extends({'firstname': 'John'}, {'lastname': 'Miller'});
// {'firstname': 'John','lastname': 'Miller'}
```

#### $savana.object.create(objectValue)

**Arguments**

| Argument | Type    | Options           |
|----------|---------|-------------------|
|`objectValue *`   |*Object* | |

**Create a object**

```js
$savana.obj.create({'firstname': 'John'});
// {'firstname': 'John'}
```

#### $savana.object.remove(objectValue, itemDelete)

**Arguments**

| Argument | Type    | Options           |
|----------|---------|-------------------|
|`objectValue *`   |*Object* | |
|`itemDelete *`   |*string* | |

**Remove a object item**

```js
$savana.obj.remove({'firstname': 'John','lastname': 'Miller'}, 'lastname');
// {'firstname': 'John'}
```

#### $savana.object.search(objectValue, itemDelete)

**Arguments**

| Argument | Type    | Options           |
|----------|---------|-------------------|
|`objectValue *`   |*Object* | |
|`itemDelete *`   |*string* | |

**Get value by key**

```js
$savana.obj.search({'firstname': 'John','lastname': 'Miller'}, 'lastname');
// Miller
```

#### $savana.object.getKeys(objectValue)

**Arguments**

| Argument | Type    | Options           |
|----------|---------|-------------------|
|`objectValue *`   |*Object* | |

**Get keys**

```js
$savana.obj.getKeys({'firstname': 'John','lastname': 'Miller'});
// ['firstname','lastname']
```

#### $savana.object.getValues(objectValue)

**Arguments**

| Argument | Type    | Options           |
|----------|---------|-------------------|
|`objectValue *`   |*Object* | |

**Get values**

```js
$savana.obj.getValues({'firstname': 'John','lastname': 'Miller'});
// ['John','Miller']
```

#### $savana.object.toArray(objectValue)

**Arguments**

| Argument | Type    | Options           |
|----------|---------|-------------------|
|`objectValue *`   |*Object* | |

**Convert Object to Array**

```js
$savana.obj.toArray({'firstname': 'John'});
// [["firstname", "John"]]
```

### String

Methods of manager of strings.

#### $savana.string.contain(value)

**Arguments**

| Argument | Type    | Options           |
|----------|---------|-------------------|
|`value *`   |*string or array* | |

**Verify if exists the value**

```js
$savana.string.contain(['a','b','c'], 'd'); // true or false
```

#### $savana.string.limitLetter(value, start, end)

**Arguments**

| Argument | Type    | Options           |
|----------|---------|-------------------|
|`value *`   |*string or array* | |
|`start *`   |*number* | |
|`end *`   |*number* | |

**Letter limite**

```js
$savana.string.limitLetter('hello world', 0, 10); // hello worl...
```

#### $savana.string.limitWord(value, end)

**Arguments**

| Argument | Type    | Options           |
|----------|---------|-------------------|
|`value *`   |*string or array* | |
|`end *`   |*number* | |

**Letter limite**

```js
$savana.string.limitWord('hello world', 1); // hello ...
```

#### $savana.string.trim(value)

**Arguments**

| Argument | Type    | Options           |
|----------|---------|-------------------|
|`value *`   |*string* | |

**Spaces remove**

```js
$savana.string.trim(' Hello '); // Hello
```

### To

Methods of manager of convertions.

#### $savana.to.HTML(value)

**Arguments**

| Argument | Type    | Options           |
|----------|---------|-------------------|
|`value *`   |*string* | |

**Convert string to HTML**

```js
$savana.to.HTML('<p>Hello World</p>');
```

#### $savana.to.JSON(value)

**Arguments**

| Argument | Type    | Options           |
|----------|---------|-------------------|
|`value *`   |*string* | |

**Convert string to JSON**

```js
$savana.to.JSON('{"name": "Hello"}'); // {"name": "Hello"}
```

#### $savana.to.string(value)

**Arguments**

| Argument | Type    | Options           |
|----------|---------|-------------------|
|`value *`   |*number or object* | |

**Convert string to JSON**

```js
$savana.to.string({"name": "Hello"}); // {"name": "Hello"}
```

#### $savana.to.XML(value)

**Arguments**

| Argument | Type    | Options           |
|----------|---------|-------------------|
|`value *`   |*string* | |

**Convert string to XML**

```js
$savana.to.XML('<p>Hello World</p>');
```

#### $savana.to.rewrite(value)

**Arguments**

| Argument | Type    | Options           |
|----------|---------|-------------------|
|`value *`   |*string* | |

**Convert string to rewrite**

```js
$savana.to.rewrite('Hello World caça está'); // hello-world-caca-esta
```

#### $savana.to.upper(value)

**Arguments**

| Argument | Type    | Options           |
|----------|---------|-------------------|
|`value *`   |*string* | |

**Convert string to uppercase**

```js
$savana.to.upper('hello world'); // HELLO WORLD
```

#### $savana.to.lower(value)

**Arguments**

| Argument | Type    | Options           |
|----------|---------|-------------------|
|`value *`   |*string* | |

**Convert string to lowercase**

```js
$savana.to.lower('HELLO WORLD'); // hello world
```

### URL

Methods of manager of urls.

#### $savana.url.redirect(url)

**Arguments**

| Argument | Type    | Options           |
|----------|---------|-------------------|
|`url *`   |*string* | |

**Redirect to url**

```js
$savana.url.redirect('http://www.google.com');
```

#### $savana.url.getParams(parameter, url)

**Arguments**

| Argument | Type    | Options           |
|----------|---------|-------------------|
|`parameter *`   |*string* | |
|`url *`   |*string* | |

**Get parameter**

```js
$savana.url.getParams('v','http://www.google.com?v=hello'); // hello
```

#### $savana.url.getCurrent()

**Get the url current**

```js
$savana.url.getCurrent();
```

#### $savana.url.getInfos()

**Get the url infos**

```js
$savana.url.getInfos();
```

### WEB Storage

Methods of manager of storage browser.

#### $savana.storage.create(name, value)

**Arguments**

| Argument | Type    | Options           |
|----------|---------|-------------------|
|`name *`   |*string* | |
|`value *`   |*string or array* | |

**Create**

```js
$savana.webStorage.create('test', [{"name": "John","lastname": "Miller"}]);
$savana.webStorage.create('test2', "John")
```

#### $savana.storage.select(name)

**Arguments**

| Argument | Type    | Options           |
|----------|---------|-------------------|
|`name *`   |*string* | |

**Select**

```js
$savana.webStorage.select('test'); //  [{"name": "John","lastname": "Miller"}]
$savana.webStorage.select('test2'); // John
```

#### $savana.storage.delete(name, index)

**Arguments**

| Argument | Type    | Options           |
|----------|---------|-------------------|
|`name *`   |*string* | |
|`index`   |*number* | |

**Delete storage or item of storage**

```js
$savana.webStorage.delete('test');
$savana.webStorage.delete('test', 0);
```

### What

Methods of manager of urls.

#### $savana.what.browser()

**Get the browser current**

```js
$savana.what.browser(); // Chrome, Firefox, Safari, Opera, Edge, EI7...EI12
```

#### $savana.what.device()

**Get the device in use**

```js
$savana.what.device(); // mobile, tablet ou desktop
```

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags).

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
