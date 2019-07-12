function Is(){
  this.email = (value) => {

    if (!value) return false;

    const filter = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    
    if (filter.test(value)) {

        return true;

    } 

    return false;
    
  }
  this.number = (value) => {

    if (typeof value != 'number') return false;

    return true;
    
  }
  this.url = (value) => {

    if (!value) return false;

    const regexp = /^((http|https|ftp|ftps):\/\/)?([a-z0-9-]+\.)?[a-z0-9-]+\.[a-z0-9]{2,4}(\.[a-z0-9]{2,4})?(\/.*)?$/i;
    
    return regexp.test(value);
    
  }
  this.function = (value) => {

    if (!value || typeof value != 'function') return false;

    return true;
    
  }
  this.object = (value) => {

    if (!value || typeof value != 'object') return false;

    return true;
    
  }
  this.CPF = (value) => {

    if (!value) return false;

    const strCPF = value.toString().replace(/[^0-9]/g, '');
    let Soma;
    let Resto;

    Soma = 0;

    if (strCPF == "00000000000") return false;

    for (let i = 1; i <= 9; i++) Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (11 - i);
    
    Resto = (Soma * 10) % 11;

    if ((Resto == 10) || (Resto == 11)) Resto = 0;

    if (Resto != parseInt(strCPF.substring(9, 10))) return false;

    Soma = 0;

    for (let i = 1; i <= 10; i++) Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (12 - i);
    
    Resto = (Soma * 10) % 11;

    if ((Resto == 10) || (Resto == 11)) Resto = 0;

    if (Resto != parseInt(strCPF.substring(10, 11))) return false;

    return true;
    
  }
  this.string = (value) => {

    if (!value || typeof value != 'string') return false;

    return true;
    
  }
  this.IE = () => {

    const browser = navigator.userAgent.toLowerCase();

    return (browser.indexOf('msie') != -1) ? true : false;
    
  }
  this.NULL = (value) => {

    if (value !== null) return false;

    return true;
    
  }
  this.undefined = (value) => {

    if (value !== undefined) return false;

    return true;
    
  }
  this.NAN = (value) => {

    return (typeof value !== 'number');
    
  }
}

// Usando na função "require" do NODEJS
if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  module.exports = new Is();
}
