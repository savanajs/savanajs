const cookie = require('./cookie.js');

const Savana = {
  cookie,
};

// Usando na função "require" do NODEJS
if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  module.exports = Savana;
}
