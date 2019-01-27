function Money() {
  this.format = () => true;
  this.strToFloat = () => true;
  this.bill = () => true;
  this.installment = () => true;
  this.financing = () => true;
  this.percentalDifference = () => true;
  this.percentageDiscount = () => true;
}

// Usando na função "require" do NODEJS
if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  module.exports = new Money();
}
