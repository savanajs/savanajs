'use strict';

function Example() {
  this.method = function () {};
}

// Usando na função "require" do NODEJS
if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  module.exports = new Example();
}