function Get(){
  this.getNumberOfString = (str) => {

    if (!str) return '';

    return str.replace(/[^0-9]/g, '');

  }
  this.count = (value) => {

    if (!value) return '';

    if (typeof value == "object") {

      return Object.keys(value).length

    } else if (typeof value == "number") {

      value = value.toString();

    }

    return value.length;

  }
}

// Usando na função "require" do NODEJS
if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  module.exports = new Get();
}
