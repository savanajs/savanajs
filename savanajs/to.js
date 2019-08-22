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