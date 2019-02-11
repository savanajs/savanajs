function Money() {
  this.format = (number, decPoint, thousandsSep) => {

    if (!number || isNaN(number) || !decPoint || !thousandsSep) return false;

    const n = !isFinite(+number) ? 0 : +number;
    const decimals = 2;
    const prec = !isFinite(+decimals) ? 0 : Math.abs(decimals);
    const sep = (typeof thousandsSep === 'undefined') ? ',' : thousandsSep;
    const dec = (typeof decPoint === 'undefined') ? '.' : decPoint;
    const s = '';
    const toFixedFix = function (n, prec) {
      const k = Math.pow(10, prec);

      return '' + Math.round(n * k) / k;
    };

    // Fix for IE parseFloat(0.55).toFixed(0) = 0;
    const ss = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.');

    if (ss[0].length > 3) {
      ss[0] = ss[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
    }

    if ((s[1] || '').length < prec) {
      ss[1] = ss[1] || '';
      ss[1] += new Array(prec - ss[1].length + 1).join('0');
    }

    return ss.join(dec);

  };
  this.priceToFloat = (value) => {

    if (!value) return;
    if (!isNaN(value)) return value;

    return parseFloat(parseInt(value.replace(/[^0-9]/g, '')) / 100);

  };
  this.bill = (price, descount) => {

    if (!price || !descount) return false;

    price = this.priceToFloat(price);

    let price_descount;
    const values = {};

    price_descount = (price * descount) / 100;
    price = price - price_descount;

    price = this.format(price, ',', '.');
    price_descount = this.format(price_descount, ',', '.');

    values.total = price;
    values.descount = price_descount;

    return values;

  };
  this.installment = (price, parcMax, valueMin, juros) => {

    if (!price || !parcMax || !valueMin) return false;

    price = this.priceToFloat(price);

    const values = {};

    parcMax = parseInt(parcMax);
    juros = parseFloat(juros);
    valueMin = parseFloat(valueMin);

    const value = price;
    let parcs = parseInt(value / valueMin);
    let item_price;
    let I = "";

    if (parcs > parcMax) {
      parcs = parcMax;
    }

    item_price = value / parcs;

    if (juros === 0 || !juros) {

      if (parcs > 0) {

        values.parc = parcs + "x";
        values.parc_number = parcs;
        values.price = this.format(item_price, ',', '.');
        values.price_number = parseFloat(item_price.toFixed(2));
        values.juros = null;

        return values;

      } else {

        return false;

      }

    } else {

      //valor com juros
      I = juros / 100;
      item_price = (value * Math.pow((1 + I), parcs)) / parcs;

      values.parc = parcs + "x";
      values.parc_number = parcs;
      values.price = this.format(item_price, ',', '.');
      values.price_number = parseFloat(item_price.toFixed(2));
      values.juros = parseFloat(juros) + "% a.m";
      values.juros_number = juros;

      return values;

    }

  };
  this.financing = (price, parcMax, valueMin, juros) => {

    if (!price || !parcMax || !valueMin || !juros) return false;

    price = this.priceToFloat(price);

    const values = {};

    parcMax = parseInt(parcMax);
    juros = parseFloat(juros);
    valueMin = parseFloat(valueMin);

    const value = price;
    let parcs = parseInt(value / valueMin);
    let I = "";

    if (parcs > parcMax) {
      parcs = parcMax;
    }

    //valor com juros
    I = juros / 100;
    const item_price = (value * I * Math.pow((1 + I), parcs)) / (Math.pow((1 + I), parcs) - 1);

    values.parc = parcs + "x";
    values.parc_number = parcs;
    values.price = this.format(item_price, ',', '.');
    values.price_number = parseFloat(item_price.toFixed(2));
    values.juros = parseFloat(juros) + "% a.m";
    values.juros_number = juros;

    return values;

  }
  this.percentalDifference = (oldValue, newValue) => {

    if (!oldValue || !newValue) return false;

    const value = {};

    newValue = this.priceToFloat(newValue);
    oldValue = this.priceToFloat(oldValue);
    value.discount = Math.abs(parseInt((((newValue / oldValue) * 100) - 100)));
    value.discount_format = value.discount + "%";

    return value;

  };
  this.percentageDiscount = (price, percent) => {

    if (!price || !percent) return;

    const values = {};
    const value = this.priceToFloat(price);

    values.discount_value = (percent / 100) * value;
    values.discount_format_value = this.format(values.discount_value, ',', '.');
    values.discount_format_number = value - ((percent / 100) * value);
    values.increase_format_number = value + ((percent / 100) * value);
    values.discount_format = this.format(values.discount_format_number, ',', '.');
    values.increase_format = this.format(values.increase_format_number, ',', '.');

    return values;

  }
}

// Usando na função "require" do NODEJS
if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  module.exports = new Money();
}
