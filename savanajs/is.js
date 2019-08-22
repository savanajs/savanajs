'use strict';

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