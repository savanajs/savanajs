'use strict';

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