'use strict';

function Cookie() {
    var _this = this;

    this.get = function (name) {
        if (!name) return false;

        var newName = name.toString().concat('=');
        var _document = document,
            cookie = _document.cookie;

        var split = cookie.split(';');

        var i = 0;

        while (i < split.length) {
            var c = split[i];

            while (c.charAt(0) === ' ') {
                c = c.substring(1);
            }if (c.indexOf(newName) !== -1) return decodeURI(c.substring(newName.length, c.length));
            i += 1;
        }

        return '';
    };
    this.exists = function (name) {
        if (!name) return false;

        var newName = name.toString().concat('=');
        var _document2 = document,
            cookie = _document2.cookie;

        var exists = void 0;

        if (cookie.indexOf(newName) === -1) {
            exists = false;
        } else {
            exists = true;
        }

        return exists;
    };
    this.remove = function (name, path, domain) {

        if (!name || !_this.exists(name)) return false;

        domain = domain || document.domain;
        path = path || "/";
        document.cookie = name + "=; expires=" + new Date() + "; domain=" + domain + "; path=" + path;

        return true;
    };
    this.removeAll = function () {
        var cookies = document.cookie.split(';');
        var i = 0;

        if (!cookies.length || !document.cookie) return false;
        while (i < cookies.length) {
            var cookie = cookies[i];

            // const eqPos = cookie.indexOf('=');
            // const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
            document.cookie = cookie.toString().concat('=;expires=Thu, 01 Jan 1970 00:00:00 GMT');
            i += 1;
        }
        return true;
    };
    this.set = function (name, value, hours, path, domain) {
        if (!name || !value || !hours) return false;

        var date = new Date();

        date.setTime(date.getTime() + hours * 1000 * 60 * 60);

        var encodeValue = encodeURI(value);
        var newPath = path || '/';
        var expires = 'expires=' + date.toGMTString();
        var newDomain = domain ? 'domain=' + domain : '';

        newPath = domain ? 'path=' + newPath : '';
        document.cookie = name.toString() + '=' + encodeValue + ';' + expires + ';' + newPath + ';' + newDomain;

        return name.toString() + '=' + encodeValue + ';' + newPath + ';' + newDomain;
    };
}

// Usando na função "require" do NODEJS
if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports = new Cookie();
}