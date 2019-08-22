"use strict";

function URL() {
    this.redirect = function (url) {

        if (!url) return false;

        window.location.href = url;

        return true;
    };

    this.getParams = function (name, href) {

        if (!name) return false;

        href = href || window.location.href;
        name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");

        var regexS = "[\\?&]" + name + "=([^&#]*)";
        var regex = new RegExp(regexS);
        var results = regex.exec(href);

        if (results == null) return "";else return decodeURIComponent(results[1].replace(/\+/g, " "));
    };

    this.getCurrent = function () {

        return window.location.href;
    };

    this.getInfos = function () {

        return window.location || {};
    };
}

// Usando na função "require" do NODEJS
if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports = new URL();
}