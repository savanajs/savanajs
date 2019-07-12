function String(){
  this.contain = (target, str) => {

    if (!target || !max_qtd) return false;

    return (!target.indexOf(str));

  }
  this.limitLetter = (str, first_qtd, max_qtd) => {

    if (!str || !max_qtd) return '';

    const dot = "...";

    if (str.length > max_qtd) {
        return str.substring(first_qtd, max_qtd) + dot;
    } else {
        return str.substring(first_qtd, max_qtd);
    }

  }
  this.limitWord = (str, max_qtd) => {

    if (!str || !max_qtd) return '';

    const dot = "...";
    const word = str.split(" ");
    let words = "";

    if (max_qtd < word.length) {

        for (let cont = 0; cont <= (max_qtd - 1); cont++) {

            words += word[cont] + " ";

        }

        return words + dot;

    } else {

        return str;

    }

  }
  this.trim = (str) => {

    if (!str) return "";

    return str.trim();

  }
}

// Usando na função "require" do NODEJS
if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  module.exports = new String();
}
