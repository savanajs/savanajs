const cookie = require('./cookie.js');
const money = require('./money.js');

const Savana = {
  cookie,
  money,
};

// Usando na função "require" do NODEJS
if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  module.exports = Savana;
}
