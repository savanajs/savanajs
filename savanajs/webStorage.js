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