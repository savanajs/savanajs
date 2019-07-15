function Array(){

  this.add = (arr, value, position) => {

    if (!arr || typeof arr !== 'object' || !value) return false;

    if (position === undefined || position == 'last') {

      arr.push(value);

    } else if (position === undefined || position == 'first')  {

      arr.unshift(value);

    } else if (typeof position === 'number') {

      arr.splice(position, 0, value);

    }

    return arr;

  }
  this.remove = (arr, value, position) => {

    if (!arr || typeof arr !== 'object') return false;

    if (value) {

      const index = arr.indexOf(value);

      if (index !== -1) { 
        
        arr.splice(index, 1);

      }

    } else if (position >= 0) {

      arr.splice(position, 1);

    }

    return arr;

  }
  this.getIndex = (arr, value) => {

    if (!arr || typeof arr !== 'object') return false;

    return arr.indexOf(value);

  }
  this.search = (arr, value, position) => {

    if (!arr || typeof arr !== 'object') return false;

    if (value) {

      const index = this.getIndex(arr, value);

      if (index !== -1) { 
        
        return arr[index];

      }

    } else if (position >= 0) {

      return arr[position];

    }

    return arr;

  }
}

// Usando na função "require" do NODEJS
if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  module.exports = new Array();
}
