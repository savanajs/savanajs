'use strict';

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