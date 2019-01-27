function Cookie() {
  this.exists = () => false;
  this.set = () => false;
  this.get = () => false;
  this.remove = () => false;
  this.removeAll = () => false;
}

module.exports = new Cookie();
