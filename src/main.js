const cookie = require('./cookie.js');
const money = require('./money.js');
const to = require('./to.js');
const is = require('./is.js');
const url = require('./url.js');
const array = require('./array.js');
const object = require('./object.js');
const date = require('./date.js');
const get = require('./get.js');
const string = require('./string.js');
const what = require('./what.js');
const webStorage = require('./webStorage.js');

const Savana = {
  cookie,
  money,
  to,
  is,
  url,
  array,
  object,
  date,
  get,
  string,
  what,
  webStorage
};


// Usando na função "require" do NODEJS
if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  module.exports = Savana;
}
