function WebStorage(){
  this.create = (name, value) => {

    if (!name) {

        return;

    }

    if (typeof value == "object") {

        value = JSON.stringify(value);

    }

    window.localStorage.setItem(name, value);

    return true;

  }
  this.select = (name) => {

    if (!name) {

        return;

    }

    // Depois, em outra página ou aba, recupera esse item
    let value = window.localStorage.getItem(name);

    if (value.indexOf("{") > -1 || value.indexOf("[]") > -1) {

        value = JSON.parse(value);

    }

    return value;

  }
  this.delete = () => {

    if (!name) {

        return;

    }

    if (index_for_delete >= 0) {

        const value = this.select(name);

        if (typeof value != "object") {

            return;

        }

        // Remove o item
        value.splice(index_for_delete, 1);

        if (value) {

            this.create(name, value);

        }

        return value;

    } else {

        this.create(name, "");
        localStorage.removeItem(name);

    }

    return false;

  }
}

// Usando na função "require" do NODEJS
if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  module.exports = new WebStorage();
}
