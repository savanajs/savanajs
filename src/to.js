function To(){
  this.HTML = (str) => {

    if (!str) return false;

    const tmp = document.implementation.createHTMLDocument();

    tmp.body.innerHTML = str;

    return tmp.body.children;

  }
  this.JSON = (str) => {

    if (!str) return false;

    return JSON.parse(str);

  }
  this.string = (str) => {

    if (!str) return false;

    if (typeof str === 'object') {

      return JSON.stringify(str);

    }

    return String(str);

  }
  this.XML = (str) => {

    if (!str) return false;

    const parser = new DOMParser();

    return parser.parseFromString(str, "text/xml");

  }
  this.rewrite = (str) => {

    if (!str) return;

    return str.toLowerCase().trim()
    .replace(/[áàãâä]/g, "a")
    .replace(/[éèẽêë]/g, "e")
    .replace(/[íìĩîï]/g, "i")
    .replace(/[óòõôö]/g, "o")
    .replace(/[úùũûü]/g, "u")
    .replace(/ç/g, "c")
    .replace(/(\s|_)+/, " ")
    .replace(/(^-+|-+$)/, "")
    .replace(/[^a-z0-9]+/g, '-');
    
  }
  this.upper = (str) => {

    if (!str) return;
    
    return str.toUpperCase();

  }
  this.lower = (str) => {

    if (!str) return;
    
    return str.toLowerCase();

  }
}

// Usando na função "require" do NODEJS
if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  module.exports = new To();
}
