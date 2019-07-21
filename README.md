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
|`array`   |*string* | |
|`value`   |*string or number* | |
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
|`array`   |*string* | |
|`value`   |*string or number* | |
|`position`   |*string* | last, first |

#### $savana.array.getIndex(arr, value)

**Arguments**

| Argument | Type    | Options           |
|----------|---------|-------------------|
|`array`   |*string* | |
|`value`   |*string or number* | |

#### $savana.array.search(arr, value, position)

**Arguments**

| Argument | Type    | Options           |
|----------|---------|-------------------|
|`array`   |*string* | |
|`value`   |*string or number* | |
|`position`   |*string* | last, first |

### Cookie

Methods of manager of cookies.

#### $savana.cookie.get()

**Arguments**

| Argument | Type    | Options           |
|----------|---------|-------------------|
|`array`   |*string* | |
|`value`   |*string or number* | |
|`position`   |*string* | last, first |

#### $savana.cookie.exists()

**Arguments**

| Argument | Type    | Options           |
|----------|---------|-------------------|
|`array`   |*string* | |
|`value`   |*string or number* | |
|`position`   |*string* | last, first |

#### $savana.cookie.remove()

**Arguments**

| Argument | Type    | Options           |
|----------|---------|-------------------|
|`array`   |*string* | |
|`value`   |*string or number* | |
|`position`   |*string* | last, first |

#### $savana.cookie.removeAll()

**Arguments**

| Argument | Type    | Options           |
|----------|---------|-------------------|
|`array`   |*string* | |
|`value`   |*string or number* | |
|`position`   |*string* | last, first |

#### $savana.cookie.set()

**Arguments**

| Argument | Type    | Options           |
|----------|---------|-------------------|
|`array`   |*string* | |
|`value`   |*string or number* | |
|`position`   |*string* | last, first |

### Date

Methods of manager of date.

#### $savana.date.timestamp()

...

#### $savana.date.daysDifferenceBetweenDates()

...

### Get

Methods of manager of get.

#### $savana.get.getNumberOfString()

...

#### $savana.get.count()

...

### Is

Methods of manager of validations.

#### $savana.is.email()

...

#### $savana.is.number()

...

#### $savana.is.url()

...

#### $savana.is.function()

...

#### $savana.is.object()

...

#### $savana.is.CPF()

...

#### $savana.is.string()

...

#### $savana.is.IE()

...

#### $savana.is.NULL()

...

#### $savana.is.undefined()

...

#### $savana.is.NAN()

...

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
