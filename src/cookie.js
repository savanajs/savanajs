function Cookie() {
  this.get = (name) => {
    if (!name) return false;

    const newName = name.toString().concat('=');
    const { cookie } = document;
    const split = cookie.split(';');

    let i = 0;

    while (i < split.length) {
      let c = split[i];
      while (c.charAt(0) === ' ') c = c.substring(1);
      if (c.indexOf(newName) !== -1) return decodeURI(c.substring(newName.length, c.length));
      i += 1;
    }

    return '';
  };
  this.exists = (name) => {
    if (!name) return false;

    const newName = name.toString().concat('=');
    const { cookie } = document;
    let exists;

    if (cookie.indexOf(newName) === -1) {
      exists = false;
    } else {
      exists = true;
    }

    return exists;
  };
  this.remove = (name) => {
    if (!name || !this.exists(name)) return false;
    document.cookie = name.toString().concat('=;expires=Thu, 01 Jan 1970 00:00:01 GMT;');
    return true;
  };
  this.removeAll = () => {
    const cookies = document.cookie.split(';');
    let i = 0;

    if (!cookies.length || !document.cookie) return false;
    while (i < cookies.length) {
      const cookie = cookies[i];
      // const eqPos = cookie.indexOf('=');
      // const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
      document.cookie = cookie.toString().concat('=;expires=Thu, 01 Jan 1970 00:00:00 GMT');
      i += 1;
    }
    return true;
  };
  this.set = (name, value, hours, path, domain) => {
    if (!name || !value || !hours) return false;

    const date = new Date();
    date.setTime(date.getTime() + (hours * 1000 * 60 * 60));

    const encodeValue = encodeURI(value);
    let newPath = path || '/';
    const expires = `expires=${date.toGMTString()}`;
    const newDomain = (domain) ? `domain=${domain}` : '';

    newPath = (domain) ? `path=${newPath}` : '';
    document.cookie = `${name.toString()}=${encodeValue};${expires};${newPath};${newDomain}`;

    return `${name.toString()}=${encodeValue};${newPath};${newDomain}`;
  };
}

// Usando na função "require" do NODEJS
if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  module.exports = new Cookie();
}
