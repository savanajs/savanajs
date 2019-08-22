'use strict';

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