function ObjectClass(){
  this.extends = (obj1, obj2) => {

    if (!obj1 || typeof obj1 !== 'object' || !obj2 || typeof obj2 !== 'object') return false;

    return Object.assign(obj1, obj2);

  }
  this.create = (obj) => {

    if (!obj || typeof obj !== 'object') return false;

    return Object.create(obj)

  }
  this.remove = (obj, key) => {

    if (!obj || typeof obj !== 'object' || !key) return false;

    delete obj[key];

    return obj;

  }
  this.search = (obj, keyValue) => {

    if (!obj || typeof obj !== 'object' || !keyValue) return false;

    let newValue = {};

    for (let key in obj) {

      if (key == keyValue) {

        newValue = obj[key];

        break;

      }

    }

    return newValue;

  }
  this.getKeys = (obj) => {

    if (!obj || typeof obj !== 'object') return false;

    return Object.keys(obj);

  }
  this.getValues = (obj) => {

    if (!obj || typeof obj !== 'object') return false;

    return Object.values(obj);

  }
  this.toArray = (obj) => {

    if (!obj || typeof obj !== 'object') return false;

    return Object.entries(obj);

  }
}

// Usando na função "require" do NODEJS
if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  module.exports = new ObjectClass();
}
