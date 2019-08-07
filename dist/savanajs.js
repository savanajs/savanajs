(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["$savana"] = factory();
	else
		root["$savana"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 12);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function Array() {
  var _this = this;

  this.add = function (arr, value, position) {

    if (!arr || (typeof arr === 'undefined' ? 'undefined' : _typeof(arr)) !== 'object' || !value) return false;

    if (position === undefined || position == 'last') {

      arr.push(value);
    } else if (position === undefined || position == 'first') {

      arr.unshift(value);
    } else if (typeof position === 'number') {

      arr.splice(position, 0, value);
    }

    return arr;
  };
  this.remove = function (arr, value, position) {

    if (!arr || (typeof arr === 'undefined' ? 'undefined' : _typeof(arr)) !== 'object') return false;

    if (value) {

      var index = arr.indexOf(value);

      if (index !== -1) {

        arr.splice(index, 1);
      }
    } else if (position >= 0) {

      arr.splice(position, 1);
    }

    return arr;
  };
  this.removeAt = function (arr, position) {

    return _this.remove(arr, null, position);
  };
  this.getIndex = function (arr, value) {

    if (!arr || (typeof arr === 'undefined' ? 'undefined' : _typeof(arr)) !== 'object') return false;

    return arr.indexOf(value);
  };
  this.search = function (arr, value, position) {

    if (!arr || (typeof arr === 'undefined' ? 'undefined' : _typeof(arr)) !== 'object') return false;

    if (value) {

      var index = _this.getIndex(arr, value);

      if (index !== -1) {

        return arr[index];
      }
    } else if (position >= 0) {

      return arr[position];
    }

    return arr;
  };
  this.searchAt = function (arr, position) {

    return _this.search(arr, null, position);
  };
  this.intersection = function (arr_a, arr_b) {

    if ((typeof arr_a === 'undefined' ? 'undefined' : _typeof(arr_a)) != "object" || (typeof arr_b === 'undefined' ? 'undefined' : _typeof(arr_b)) != "object") return false;

    var arr = new Set(arr_b);

    return arr_a.filter(function (item) {
      return arr.has(item);
    });
  };
}

// Usando na função "require" do NODEJS
if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  module.exports = new Array();
}

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function Cookie() {
  var _this = this;

  this.get = function (name) {
    if (!name) return false;

    var newName = name.toString().concat('=');
    var _document = document,
        cookie = _document.cookie;

    var split = cookie.split(';');

    var i = 0;

    while (i < split.length) {
      var c = split[i];

      while (c.charAt(0) === ' ') {
        c = c.substring(1);
      }if (c.indexOf(newName) !== -1) return decodeURI(c.substring(newName.length, c.length));
      i += 1;
    }

    return '';
  };
  this.exists = function (name) {
    if (!name) return false;

    var newName = name.toString().concat('=');
    var _document2 = document,
        cookie = _document2.cookie;

    var exists = void 0;

    if (cookie.indexOf(newName) === -1) {
      exists = false;
    } else {
      exists = true;
    }

    return exists;
  };
  this.remove = function (name, path, domain) {

    if (!name || !_this.exists(name)) return false;

    domain = domain || document.domain;
    path = path || "/";
    document.cookie = name + "=; expires=" + new Date() + "; domain=" + domain + "; path=" + path;

    return true;
  };
  this.removeAll = function () {
    var cookies = document.cookie.split(';');
    var i = 0;

    if (!cookies.length || !document.cookie) return false;
    while (i < cookies.length) {
      var cookie = cookies[i];

      // const eqPos = cookie.indexOf('=');
      // const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
      document.cookie = cookie.toString().concat('=;expires=Thu, 01 Jan 1970 00:00:00 GMT');
      i += 1;
    }
    return true;
  };
  this.set = function (name, value, hours, path, domain) {
    if (!name || !value || !hours) return false;

    var date = new Date();

    date.setTime(date.getTime() + hours * 1000 * 60 * 60);

    var encodeValue = encodeURI(value);
    var newPath = path || '/';
    var expires = 'expires=' + date.toGMTString();
    var newDomain = domain ? 'domain=' + domain : '';

    newPath = domain ? 'path=' + newPath : '';
    document.cookie = name.toString() + '=' + encodeValue + ';' + expires + ';' + newPath + ';' + newDomain;

    return name.toString() + '=' + encodeValue + ';' + newPath + ';' + newDomain;
  };
}

// Usando na função "require" do NODEJS
if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  module.exports = new Cookie();
}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function DateClass() {

  this.timestamp = function () {

    return new Date().getTime();
  };

  this.daysDifferenceBetweenDates = function (date_start, date_end) {

    if (!date_start || !date_end) return;

    if (date_start.getTime() <= date_end.getTime()) {

      var dif = Date.UTC(date_start.getYear(), date_start.getMonth(), date_start.getDate(), 0, 0, 0) - Date.UTC(date_end.getYear(), date_end.getMonth(), date_end.getDate(), 0, 0, 0);

      return Math.abs(dif / 1000 / 60 / 60 / 24);
    } else {

      return 0;
    }
  };
}

// Usando na função "require" do NODEJS
if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  module.exports = new DateClass();
}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function Get() {
  this.getNumberOfString = function (str) {

    if (!str) return '';

    return str.replace(/[^0-9]/g, '');
  };
  this.count = function (value) {

    if (!value) return '';

    if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) == "object") {

      return Object.keys(value).length;
    } else if (typeof value == "number") {

      value = value.toString();
    }

    return value.length;
  };
}

// Usando na função "require" do NODEJS
if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  module.exports = new Get();
}

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function Is() {
  this.email = function (value) {

    if (!value) return false;

    var filter = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;

    if (filter.test(value)) {

      return true;
    }

    return false;
  };
  this.number = function (value) {

    if (typeof value != 'number') return false;

    return true;
  };
  this.url = function (value) {

    if (!value) return false;

    var regexp = /^((http|https|ftp|ftps):\/\/)?([a-z0-9-]+\.)?[a-z0-9-]+\.[a-z0-9]{2,4}(\.[a-z0-9]{2,4})?(\/.*)?$/i;

    return regexp.test(value);
  };
  this.function = function (value) {

    if (!value || typeof value != 'function') return false;

    return true;
  };
  this.object = function (value) {

    if (!value || (typeof value === 'undefined' ? 'undefined' : _typeof(value)) != 'object') return false;

    return true;
  };
  this.CPF = function (value) {

    if (!value) return false;

    var strCPF = value.toString().replace(/[^0-9]/g, '');
    var Soma = void 0;
    var Resto = void 0;

    Soma = 0;

    if (strCPF == "00000000000") return false;

    for (var i = 1; i <= 9; i++) {
      Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (11 - i);
    }Resto = Soma * 10 % 11;

    if (Resto == 10 || Resto == 11) Resto = 0;

    if (Resto != parseInt(strCPF.substring(9, 10))) return false;

    Soma = 0;

    for (var _i = 1; _i <= 10; _i++) {
      Soma = Soma + parseInt(strCPF.substring(_i - 1, _i)) * (12 - _i);
    }Resto = Soma * 10 % 11;

    if (Resto == 10 || Resto == 11) Resto = 0;

    if (Resto != parseInt(strCPF.substring(10, 11))) return false;

    return true;
  };
  this.string = function (value) {

    if (!value || typeof value != 'string') return false;

    return true;
  };
  this.IE = function () {

    var browser = navigator.userAgent.toLowerCase();

    return browser.indexOf('msie') != -1 ? true : false;
  };
  this.NULL = function (value) {

    if (value !== null) return false;

    return true;
  };
  this.undefined = function (value) {

    if (value !== undefined) return false;

    return true;
  };
  this.NAN = function (value) {

    return typeof value !== 'number';
  };
}

// Usando na função "require" do NODEJS
if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  module.exports = new Is();
}

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function Money() {
  var _this = this;

  this.format = function (number, decPoint, thousandsSep) {

    if (!number || isNaN(number) || !decPoint || !thousandsSep) return false;

    var n = !isFinite(+number) ? 0 : +number;
    var decimals = 2;
    var prec = !isFinite(+decimals) ? 0 : Math.abs(decimals);
    var sep = typeof thousandsSep === 'undefined' ? ',' : thousandsSep;
    var dec = typeof decPoint === 'undefined' ? '.' : decPoint;
    var s = '';
    var toFixedFix = function toFixedFix(n, prec) {
      var k = Math.pow(10, prec);

      return '' + Math.round(n * k) / k;
    };

    // Fix for IE parseFloat(0.55).toFixed(0) = 0;
    var ss = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.');

    if (ss[0].length > 3) {
      ss[0] = ss[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
    }

    if ((s[1] || '').length < prec) {
      ss[1] = ss[1] || '';
      ss[1] += new Array(prec - ss[1].length + 1).join('0');
    }

    return ss.join(dec);
  };
  this.priceToFloat = function (value) {

    if (!value) return;
    if (!isNaN(value)) return value;

    return parseFloat(parseInt(value.replace(/[^0-9]/g, '')) / 100);
  };
  this.bill = function (price, descount) {

    if (!price || !descount) return false;

    price = _this.priceToFloat(price);

    var price_descount = void 0;
    var values = {};

    price_descount = price * descount / 100;
    price = price - price_descount;

    price = _this.format(price, ',', '.');
    price_descount = _this.format(price_descount, ',', '.');

    values.total = price;
    values.descount = price_descount;

    return values;
  };
  this.installment = function (price, parcMax, valueMin, juros) {

    if (!price || !parcMax || !valueMin) return false;

    price = _this.priceToFloat(price);

    var values = {};

    parcMax = parseInt(parcMax);
    juros = parseFloat(juros);
    valueMin = parseFloat(valueMin);

    var value = price;
    var parcs = parseInt(value / valueMin);
    var item_price = void 0;
    var I = "";

    if (parcs > parcMax) {
      parcs = parcMax;
    }

    item_price = value / parcs;

    if (juros === 0 || !juros) {

      values.parc = parcs + "x";
      values.parc_number = parcs;
      values.price = _this.format(item_price, ',', '.');
      values.price_number = parseFloat(item_price.toFixed(2));
      values.juros = null;

      return values;
    } else {

      //valor com juros
      I = juros / 100;
      item_price = value * Math.pow(1 + I, parcs) / parcs;

      values.parc = parcs + "x";
      values.parc_number = parcs;
      values.price = _this.format(item_price, ',', '.');
      values.price_number = parseFloat(item_price.toFixed(2));
      values.juros = parseFloat(juros) + "% a.m";
      values.juros_number = juros;

      return values;
    }
  };
  this.financing = function (price, parcMax, valueMin, juros) {

    if (!price || !parcMax || !valueMin || !juros) return false;

    price = _this.priceToFloat(price);

    var values = {};

    parcMax = parseInt(parcMax);
    juros = parseFloat(juros);
    valueMin = parseFloat(valueMin);

    var value = price;
    var parcs = parseInt(value / valueMin);
    var I = "";

    if (parcs > parcMax) {
      parcs = parcMax;
    }

    //valor com juros
    I = juros / 100;
    var item_price = value * I * Math.pow(1 + I, parcs) / (Math.pow(1 + I, parcs) - 1);

    values.parc = parcs + "x";
    values.parc_number = parcs;
    values.price = _this.format(item_price, ',', '.');
    values.price_number = parseFloat(item_price.toFixed(2));
    values.juros = parseFloat(juros) + "% a.m";
    values.juros_number = juros;

    return values;
  };
  this.percentalDifference = function (oldValue, newValue) {

    if (!oldValue || !newValue) return false;

    var value = {};

    newValue = _this.priceToFloat(newValue);
    oldValue = _this.priceToFloat(oldValue);
    value.discount = Math.abs(parseInt(newValue / oldValue * 100 - 100));
    value.discount_format = value.discount + "%";

    return value;
  };
  this.percentageDiscount = function (price, percent) {

    if (!price || !percent) return;

    var values = {};
    var value = _this.priceToFloat(price);

    values.discount_value = percent / 100 * value;
    values.discount_format_value = _this.format(values.discount_value, ',', '.');
    values.discount_format_number = value - percent / 100 * value;
    values.increase_format_number = value + percent / 100 * value;
    values.discount_format = _this.format(values.discount_format_number, ',', '.');
    values.increase_format = _this.format(values.increase_format_number, ',', '.');

    return values;
  };
}

// Usando na função "require" do NODEJS
if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  module.exports = new Money();
}

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function ObjectClass() {
  this.extends = function (obj1, obj2) {

    if (!obj1 || (typeof obj1 === 'undefined' ? 'undefined' : _typeof(obj1)) !== 'object' || !obj2 || (typeof obj2 === 'undefined' ? 'undefined' : _typeof(obj2)) !== 'object') return false;

    return Object.assign(obj1, obj2);
  };
  this.create = function (obj) {

    if (!obj || (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) !== 'object') return false;

    return Object.create(obj);
  };
  this.remove = function (obj, key) {

    if (!obj || (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) !== 'object' || !key) return false;

    delete obj[key];

    return obj;
  };
  this.search = function (obj, keyValue) {

    if (!obj || (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) !== 'object' || !keyValue) return false;

    var newValue = {};

    for (var key in obj) {

      if (key == keyValue) {

        newValue = obj[key];

        break;
      }
    }

    return newValue;
  };
  this.getKeys = function (obj) {

    if (!obj || (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) !== 'object') return false;

    return Object.keys(obj);
  };
  this.getValues = function (obj) {

    if (!obj || (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) !== 'object') return false;

    return Object.values(obj);
  };
  this.toArray = function (obj) {

    if (!obj || (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) !== 'object') return false;

    return Object.entries(obj);
  };
}

// Usando na função "require" do NODEJS
if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  module.exports = new ObjectClass();
}

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function String() {
  this.contain = function (target, str) {

    if (!target || !str) return false;

    return ~target.indexOf(str) ? true : false;
  };
  this.limitLetter = function (str, first_qtd, max_qtd) {

    if (!str || !max_qtd) return '';

    var dot = "...";

    if (str.length > max_qtd) {

      return str.substring(first_qtd, max_qtd) + dot;
    } else {

      return str.substring(first_qtd, max_qtd);
    }
  };
  this.limitWord = function (str, max_qtd) {

    if (!str || !max_qtd) return '';

    var dot = "...";
    var word = str.split(" ");
    var words = "";

    if (max_qtd < word.length) {

      for (var cont = 0; cont <= max_qtd - 1; cont++) {

        words += word[cont] + " ";
      }

      return words + dot;
    } else {

      return str;
    }
  };
  this.trim = function (str) {

    if (!str) return "";

    return str.trim();
  };
}

// Usando na função "require" do NODEJS
if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  module.exports = new String();
}

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function To() {
  this.HTML = function (str) {

    if (!str) return false;

    var tmp = document.implementation.createHTMLDocument();

    tmp.body.innerHTML = str;

    return tmp.body.children;
  };
  this.JSON = function (str) {

    if (!str) return false;

    return JSON.parse(str);
  };
  this.string = function (str) {

    if (!str) return false;

    if ((typeof str === "undefined" ? "undefined" : _typeof(str)) === 'object') {

      return JSON.stringify(str);
    }

    return String(str);
  };
  this.XML = function (str) {

    if (!str) return false;

    var parser = new DOMParser();

    return parser.parseFromString(str, "text/xml");
  };
  this.rewrite = function (str) {

    if (!str) return;

    return str.toLowerCase().trim().replace(/[áàãâä]/g, "a").replace(/[éèẽêë]/g, "e").replace(/[íìĩîï]/g, "i").replace(/[óòõôö]/g, "o").replace(/[úùũûü]/g, "u").replace(/ç/g, "c").replace(/(\s|_)+/, " ").replace(/(^-+|-+$)/, "").replace(/[^a-z0-9]+/g, '-');
  };
  this.upper = function (str) {

    if (!str) return;

    return str.toUpperCase();
  };
  this.lower = function (str) {

    if (!str) return;

    return str.toLowerCase();
  };
}

// Usando na função "require" do NODEJS
if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  module.exports = new To();
}

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function URL() {
  this.redirect = function (url) {

    if (!url) return false;

    window.location.href = url;

    return true;
  };

  this.getParams = function (name, href) {

    if (!name) return false;

    href = href || window.location.href;
    name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");

    var regexS = "[\\?&]" + name + "=([^&#]*)";
    var regex = new RegExp(regexS);
    var results = regex.exec(href);

    if (results == null) return "";else return decodeURIComponent(results[1].replace(/\+/g, " "));
  };

  this.getCurrent = function () {

    return window.location.href;
  };

  this.getInfos = function () {

    return window.location || {};
  };
}

// Usando na função "require" do NODEJS
if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  module.exports = new URL();
}

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function WebStorage() {
    var _this = this;

    this.create = function (name, value) {

        if (!name) {

            return;
        }

        if ((typeof value === "undefined" ? "undefined" : _typeof(value)) == "object") {

            value = JSON.stringify(value);
        }

        window.localStorage.setItem(name, value);

        return true;
    };
    this.select = function (name) {

        if (!name) {

            return;
        }

        // Depois, em outra página ou aba, recupera esse item
        var value = window.localStorage.getItem(name);

        if (!value) return false;

        if (value.indexOf("{") > -1 || value.indexOf("[]") > -1) {

            value = JSON.parse(value);
        }

        return value;
    };
    this.delete = function (name, index_for_delete) {

        if (!name) {

            return;
        }

        if (index_for_delete >= 0) {

            var value = _this.select(name);

            if ((typeof value === "undefined" ? "undefined" : _typeof(value)) != "object") {

                return false;
            }

            // Remove o item
            value.splice(index_for_delete, 1);

            if (value) {

                _this.create(name, value);
            }

            return true;
        } else {

            _this.create(name, "");
            localStorage.removeItem(name);

            return true;
        }
    };
}

// Usando na função "require" do NODEJS
if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports = new WebStorage();
}

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function What() {
    this.browser = function () {

        if (navigator.appVersion.indexOf("MSIE 12") > -1) {

            return "IE12";
        } else if (navigator.appVersion.indexOf("MSIE 11") > -1) {

            return "IE11";
        } else if (navigator.appVersion.indexOf("MSIE 10") > -1) {

            return "IE10";
        } else if (navigator.appVersion.indexOf("MSIE 9") > -1) {

            return "IE9";
        } else if (navigator.appVersion.indexOf("MSIE 8") > -1) {

            return "IE8";
        } else if (navigator.appVersion.indexOf("MSIE 7") > -1) {

            return "IE7";
        } else if (navigator.userAgent.indexOf('Chrome') > -1) {

            return "Chrome";
        } else if (navigator.userAgent.indexOf('Firefox') > -1) {

            return "Firefox";
        } else if (navigator.userAgent.indexOf('Safari') > -1) {

            return "Safari";
        } else if (navigator.userAgent.toLowerCase().indexOf("op") > -1) {

            return "Opera";
        } else if (navigator.appVersion.indexOf("Edge") > -1) {

            return "Edge";
        }

        return false;
    };
    this.device = function () {

        var sizeWidth = window.innerWidth;

        if (sizeWidth >= 1200) {

            return "desktop";
        } else if (sizeWidth >= 550 && sizeWidth < 1200) {

            return "tablet";
        } else {

            return "mobile";
        }
    };
}

// Usando na função "require" do NODEJS
if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports = new What();
}

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var cookie = __webpack_require__(1);
var money = __webpack_require__(5);
var to = __webpack_require__(8);
var is = __webpack_require__(4);
var url = __webpack_require__(9);
var array = __webpack_require__(0);
var object = __webpack_require__(6);
var date = __webpack_require__(2);
var get = __webpack_require__(3);
var string = __webpack_require__(7);
var what = __webpack_require__(11);
var webStorage = __webpack_require__(10);

var Savana = {
  cookie: cookie,
  money: money,
  to: to,
  is: is,
  url: url,
  array: array,
  object: object,
  date: date,
  get: get,
  string: string,
  what: what,
  webStorage: webStorage
};

// Usando na função "require" do NODEJS
if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  module.exports = Savana;
}

/***/ })
/******/ ]);
});
//# sourceMappingURL=savanajs.js.map