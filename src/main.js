const cookie = require('./cookie.js');
const money = require('./money.js');
const to = require('./to.js');
const is = require('./is.js');

const Savana = {
  cookie,
  money,
  to,
  is
};


// Usando na função "require" do NODEJS
if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  module.exports = Savana;
}
