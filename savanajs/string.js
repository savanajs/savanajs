'use strict';

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