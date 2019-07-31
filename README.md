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
<script src="/lib/savana.min.js"></script>
```

## Methods

lorem....

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

#### $savana.array.remove(array, value, position)

**Arguments**

| Argument | Type    | Options           |
|----------|---------|-------------------|
|`array *`   |*string* | |
|`value *`   |*string or number* | |
|`position`   |*string* | last, first |

**Remove the value of array**

```js
 $savana.array.remove(['a','b','c'], 'b'); // ['a','c']
```

**Remove the index position of array**

```js
 $savana.array.remove(['a','b','c'], null, 1); // ['a','c']
```

#### $savana.array.getIndex(arr, value)

**Arguments**

| Argument | Type    | Options           |
|----------|---------|-------------------|
|`array *`   |*string* | |
|`value *`   |*string or number* | |

**Get index position of array**

```js
 $savana.array.add([1,2,3], 2); // 1
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

**Get the value by index of array**

```js
 $savana.array.search(['a','b','c'], null, 1); // b
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
|`name`   |*string* | |
|`path`   |*string* | |
|`domain`   |*string* | 

**Remove cookie**

```js
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
 $savana.cookie.remove("exemple", "hello", 2);
 $savana.cookie.remove("exemple2", "hello", 2, "/home", "subdomain.site.com");
```

**Arguments**

| Argument | Type    | Options           |
|----------|---------|-------------------|
|`array`   |*string* | |
|`value`   |*string or number* | |
|`position`   |*string* | last, first |

### Date

Methods of manager of date.

#### $savana.date.timestamp()

** Get the timestamp **

```js
$savana.date.timestamp()
```

#### $savana.date.daysDifferenceBetweenDates()

**  Get the defference between dates **

```js
$savana.date.daysDifferenceBetweenDates(new Date(2016, 10, 20), new Date(2016, 10, 30))
```

### Get

Methods of manager of get.

#### $savana.get.getNumberOfString()

**Arguments**

| Argument | Type    | Options           |
|----------|---------|-------------------|
|`value`   |*string* | |

**Get number of strings**

```js
$savana.date.getNumberOfString('hello10hello') // 10
```

#### $savana.get.count()

**Arguments**

| Argument | Type    | Options           |
|----------|---------|-------------------|
|`value`   |*string or Object* | |

** Get the quantity of letters  **

```js
$savana.date.count('hello') // 5
```

** Get the quantity items of array  **

```js
$savana.date.count([]) // 0
```

** Get the quantity items of object  **

```js
$savana.date.count({}) // 0
```

### Is

Methods of manager of validations.

#### $savana.is.email(email)

**Arguments**

| Argument | Type    | Options           |
|----------|---------|-------------------|
|`email`   |*string* | |

**Validation of email**

```js
$savana.is.email('email@gmail.com.br'); // true
```

#### $savana.is.number(number)


**Arguments**

| Argument | Type    | Options           |
|----------|---------|-------------------|
|`number`   |*number* | |

**Validation of number**

```js
$savana.is.number(10); // true
```

#### $savana.is.url(url)

**Arguments**

| Argument | Type    | Options           |
|----------|---------|-------------------|
|`url`   |*string* | |

**Validation of URL**

```js
$savana.is.url('https://github.com'); // true
```

#### $savana.is.function(value)

**Arguments**

| Argument | Type    | Options           |
|----------|---------|-------------------|
|`value`   |*function* | |

**Validation of function**

```js
$savana.is.function(function(){}); // true
```

#### $savana.is.object(value)

**Arguments**

| Argument | Type    | Options           |
|----------|---------|-------------------|
|`value`   |*object* | |

**Validation of object**

```js
$savana.is.object({}); // true
```


#### $savana.is.CPF(value)

**Arguments**

| Argument | Type    | Options           |
|----------|---------|-------------------|
|`value`   |*string or number* | |

**Validation of CPF**

```js
$savana.is.CPF('12345678909'); // true
```

#### $savana.is.string(value)

**Arguments**

| Argument | Type    | Options           |
|----------|---------|-------------------|
|`value`   |*string* | |

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
|`value`   |*null* | |

**Validation of String**

```js
$savana.is.NULL(1); // false
$savana.is.NULL(null); // true
```

#### $savana.is.undefined(value)

**Arguments**

| Argument | Type    | Options           |
|----------|---------|-------------------|
|`value`   |*undefined* | |

**Validation of Undefined**

```js
$savana.is.undefined(1); // false
$savana.is.undefined(undefined); // true
```

#### $savana.is.NAN(value)

**Arguments**

| Argument | Type    | Options           |
|----------|---------|-------------------|
|`value`   |*string* | |

**Validation of NAN**

```js
$savana.is.NAN(1); // false
$savana.is.NAN('1'); // true
```

### Money

Methods of manager of validations.

#### $savana.money.format()

...

#### $savana.money.priceToFloat()

...

#### $savana.money.bill()

...

#### $savana.money.installment()

...

#### $savana.money.financing()

...

#### $savana.money.percentalDifference()

...

#### $savana.money.percentageDiscount()

...

### Object

Methods of manager of objects.

#### $savana.object.extends()

...

#### $savana.object.create()

...

#### $savana.object.remove()

...

#### $savana.object.search()

...

#### $savana.object.getKeys()

...

#### $savana.object.getValues()

...

#### $savana.object.toArray()

...

### String

Methods of manager of strings.

#### $savana.string.contain()

...

#### $savana.string.limitLetter()

...

#### $savana.string.limitWord()

...

#### $savana.string.trim()

...

### To

Methods of manager of convertions.

#### $savana.to.HTML()

...

#### $savana.to.JSON()

...

#### $savana.to.string()

...

#### $savana.to.XML()

...

#### $savana.to.rewrite()

...

#### $savana.to.upper()

...

#### $savana.to.lower()

...

### URL

Methods of manager of urls.

#### $savana.url.redirect()

...

#### $savana.url.getParams()

...

#### $savana.url.getCurrent()

...

#### $savana.url.getInfos()

...

### WEB Storage

Methods of manager of urls.

#### $savana.storage.create()

...

#### $savana.storage.select()

...

#### $savana.storage.delete()

...

### What

Methods of manager of urls.

#### $savana.what.browser()

...

#### $savana.what.device()

...

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags).

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
