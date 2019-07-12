function URL(){
  this.redirect = (url) => {

    if (!url) return false;

    window.location.href = url;

    return true;

  }

  this.getParams = (name, href) => {

    if (!name) return false;

    href = href || window.location.href;
    name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");

    const regexS = "[\\?&]" + name + "=([^&#]*)";
    const regex = new RegExp(regexS);
    const results = regex.exec(href);

    if (results == null)
        return "";
    else
        return decodeURIComponent(results[1].replace(/\+/g, " "));

  }

  this.getCurrent = () => {

    return window.location.href;

  }

  this.getInfos = () => {

    return window.location || {};

  }
}

// Usando na função "require" do NODEJS
if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  module.exports = new URL();
}
