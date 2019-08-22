

let cookie = require('./cookie.js');
let money = require('./money.js');
let to = require('./to.js');
let is = require('./is.js');
let url = require('./url.js');
let array = require('./array.js');
let object = require('./object.js');
let date = require('./date.js');
let get = require('./get.js');
let string = require('./string.js');
let what = require('./what.js');
let webStorage = require('./webStorage.js');

let Savana = {
  cookie: cookie,
  money: money,
  to: to,
  is: is,
  url: url,
  array: array,
  object: object,
  date: date,
  get: get,
  string: string,
  what: what,
  webStorage: webStorage
};

// Usando na função "require" do NODEJS
if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  module.exports = Savana;
}
