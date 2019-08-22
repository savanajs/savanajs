'use strict';

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