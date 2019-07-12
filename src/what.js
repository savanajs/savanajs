function What(){
  this.browser = () => {

    if (navigator.appVersion.indexOf("MSIE 12") > -1) {

        return "IE12";

    } else if (navigator.appVersion.indexOf("MSIE 11") > -1) {

        return "IE11";

    } else if (navigator.appVersion.indexOf("MSIE 10") > -1) {

        return "IE10";

    } else if (navigator.appVersion.indexOf("MSIE 9") > -1) {

        return "IE9";

    } else if (navigator.appVersion.indexOf("MSIE 8") > -1) {

        return "IE8";

    } else if (navigator.appVersion.indexOf("MSIE 7") > -1) {

        return "IE7";

    } else if (navigator.userAgent.indexOf('Chrome') > -1) {

        return "Chrome";

    } else if (navigator.userAgent.indexOf('Firefox') > -1) {

        return "Firefox";

    } else if (navigator.userAgent.indexOf('Safari') > -1) {

        return "Safari";

    } else if (navigator.userAgent.toLowerCase().indexOf("op") > -1) {

        return "Opera";

    }

    return false;
  }
  this.device = () => {

    const sizeWidth = window.innerWidth;

    if (sizeWidth >= 1200) {

        return "desktop";

    } else if (sizeWidth >= 550 && sizeWidth < 1200) {

        return "tablet";

    } else {

        return "mobile";

    }

  }
}

// Usando na função "require" do NODEJS
if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  module.exports = new What();
}
