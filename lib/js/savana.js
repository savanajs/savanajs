/*
Savana JS
Build wildest web applications with Savanajs
Created By Rafael Cruz
Contact: projetosavanajs@gmail.com
Version: Hyena Beta 0.0.1
Release: 05/12/2015
Framework JavaScript
Brazil, São Paulo
*/

/*
The MIT License (MIT)
Copyright (c) 2016 Savana JS
......................................................................................................

Permission is hereby granted, free of charge, to any person obtaining a copy of this software 
and associated documentation files (the "Software"), to deal in the Software without restriction, 
including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, 
and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, 
subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial 
portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT 
LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. 
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, 
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE 
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

/*
 * Sumary
 *--------------------------------------------------------------------------------------------------------------------
 * 1 ---- DOM - $savana(selector).fn();
 *
 * 1.1 -- done ........................................ Initiator standard framework
 * 1.2 -- onLoad ...................................... Initiator Framework after the onload window
 * 1.3 -- on .......................................... Call events. (click, hover, change, keyup, etc)
 * 1.4 --    .......................................... 
 * 1.5 -- each ........................................ Get an HTML element set
 * 1.6 -- push ........................................ Insert content within HTML elements
 * 1.7 -- destroy ..................................... Remove HTML elements
 * 1.8 -- addClass .................................... Add a class in the HTML element
 * 1.9 -- toggleClass ................................. Add or remove a class element if it exists or not
 * 1.10 - hasClass .................................... Add or remove a class in the target elements
 * 1.11 - removeClass ................................. Retira uma classe nos elementos alvo
 * 1.12 - attr ........................................ Add attributes in HTML elements
 * 1.13 - removeAttr .................................. Remover atributos em elementos HTML
 * 1.14 - styles ...................................... Add CSS styles of the elements
 * 1.15 - parent ...................................... Find the father of one element
 * 1.16 - parents ..................................... Find the father of one element
 * 1.17 - insert ...................................... Insert HTML content before or after said members
 * 1.18 - wrap ........................................ Insert a parent element for an element
 * 1.19 - exchange .................................... Change an HTML element by another HTML element
 * 1.20 - copy ........................................ Copy an HTML element
 * 1.21 - changeTo .................................... Change an HTML element place
 * 1.22 - animate ..................................... Insert class animations in element - Plugin CSS by Daniel Eden
 * 1.23 - hide ........................................ Hide HTML elements
 * 1.24 - show ........................................ Show elements
 * 1.25 - serialize ................................... Catch values and forms of field names automatically
 * 1.26 - find ........................................ Search elements within elements
 * 1.27 - child ....................................... Search the sons of elements
 * 1.28 - eq .......................................... Search element by its position
 * 1.29 - first ....................................... Search element in the first position
 * 1.30 - last ........................................ Search element in the last position
 * 1.31 - isChecked ................................... Check if a checkbox or radio element is checked
 * 1.32 - isSelected .................................. Checks whether a checkbox or radio element is selected
 * 1.33 - size ........................................ Returns the size in width and height of an element
 * 1.34 - position .................................... Returns the X and Y of an element
 * 1.36 - isEmpty ..................................... Verify that the contents of an element is empty
 * 1.37 - delegate .................................... Call events dynamics. (click, hover, change, keyup, etc)
 * 1.38 - scroll ...................................... Initiator Framework after page scroll.
 * 1.39 - load ........................................ Get content from an external page
 
 * 2 ---- HELPERS - savana.fn();
 *
 * 2.1 --- removeAllSpaces ............................ Remove the empty spaces of an occurrence
 * 2.2 --- getNumberOfString .......................... Just pick numbers from one occurrence
 * 2.3 --- config...................................... Config default to show debugs and alerts
 * 2.4 --- toJSON ..................................... String conversion JSON
 * 2.5 --- toXML ...................................... String conversion to XML
 * 2.6 --- Async ...................................... Asynchronous makes access to other files with promise. (Does not work in earlier versions of IE9)
 * 2.7 --- URL ........................................ Returns the current url browser
 * 2.8 --- params ..................................... Returns an array of the parameters divided by "/" in the URL
 * 2.9 --- have ....................................... Checks for a specific value in an array or text
 * 2.10 -- isFunction ................................. Checks if the occurrence is a function
 * 2.11 -- isObject ................................... Checks whether the occurrence is an object
 * 2.12 -- isString ................................... Checks if the occurrence is a string
 * 2.13 -- isCPF ...................................... Checks if the occurrence is a CPF
 * 2.14 -- formatMoney ................................ Converts a number in monetary format
 * 2.15 -- rewrite .................................... Remove spaces and special characters in strings
 * 2.16 -- isEmail .................................... Checks whether an email address is valid
 * 2.17 -- isNumber ................................... Checks if the occurrence is a number
 * 2.18 -- isLetter ................................... Checks whether the occurrence are letters
 * 2.19 -- isURL ...................................... Checks if the occurrence is a URL
 * 2.20 -- convertMoneyToFloat ........................ Monetary value of conversion to float
 * 2.21 -- getValueBill ............................... String conversion JSON
 * 2.22 -- installment ................................ Take the value of the installment
 * 2.23 -- financing .................................. Financing with interest
 * 2.24 -- upperAllFirstLetter ........................ Leave the first letter of each word capitalized
 * 2.25 -- setCookie .................................. Record cookie in the browser
 * 2.26 -- getCookie .................................. Take the value of the cookie in the browser
 * 2.27 -- deleteCookie ............................... Delete the browser cookie
 * 2.28 -- isIE ....................................... Verify if the browser is IE
 * 2.29 -- percent .................................... Returns the percentage of a discount
 * 2.30 -- discountPercent ............................ Calculating a percentage discount
 * 2.31 -- limitLetter ................................ Limit letters in a string
 * 2.32 -- limitWord .................................. Limiting words in a string
 * 2.33 -- dialogClose ................................ Limiting words in a string
 * 2.34 -- strUpper ................................... String conversion to uppercase
 * 2.35 -- strLower ................................... String conversion to uppercase
 * 2.36 -- messageBox ................................. Alert box to the user
 * 2.37 -- loadPreloader .............................. Loads the loader
 * 2.38 -- showPreloader .............................. Open the loader
 * 2.39 -- hidePreloader .............................. Close loader
 * 2.40 -- loadAlert .................................. Loads the custom alert
 * 2.41 -- alert ...................................... Opens the custom alert
 * 2.42 -- confirm .................................... Open a box confirmation to the User
 * 2.43 -- loadConfirm ................................ Load the box confirmation
 * 2.44 -- extend ..................................... Is the object inherit characteristics from another object
 * 2.45 -- now ........................................ Returns the number of seconds since 1970
 * 2.46 -- getParams .................................. Returns a parameter value in the url
 * 2.47 -- urlCurrent ................................. Returns the current url of the page
 * 2.48 -- redirect ................................... Does redirect to another page
 * 2.49 -- now ........................................ Take milliseconds
 * 2.50 -- today ...................................... Get current date and time
 * 2.51 -- eventStop .................................. Cancel a default event
 * 2.52 -- modal(Load, Close e Open) .................. Load, closes and opens a modal
 * 2.53 -- whatDevice (desktop, tablet and mobile) .... Show the device of user
 * 2.54 -- whatBrowser ................................ Show the device of user
 * 2.55 -- objToJSON .................................. Convert object to JSON
 * 2.56 -- ajax ....................................... Asynchronous makes access to other
 * 2.57 -- createClass ................................ Create objects in script in a simpler form
 * 2.58 -- convertHTML ................................ Convert a content string to HTML
 * 2.59 -- daysDifferenceBetweenDates ................. Returns the day difference between a start date and end date
 * 2.60 -- date ....................................... Return of day, month, year, minutes, seconds and hours;
*/

(function($savana, undefined) {

    // Default settings of the framework
    var config = {
        debug: true,
        alert: true
    }

    var clear = {
        console: function(){
            if(arguments.length == 0 && !config.debug){       
                console.log = function(){};
                console.info = function(){};
                console.error = function(){};  
                console.warn = function(){}; 
                console.debug = function(){};
                console.dir = function(){};
                console.dirxml = function(){};
                console.group = function(){};
                console.groupEnd = function(){};
                console.trace = function(){};
                console.time = function(){};
                console.profile = function(){};
            }else {
                for (var i = 0; i < arguments.length; i++){
                    if (arguments[i] == "log") {
                        console.log = function(){};
                    }else if(arguments[i] == "info"){
                        console.info = function(){};
                    }else if(arguments[i] == "error"){
                        console.error = function(){};
                    }else if(arguments[i] == "warn"){
                        console.warn = function(){};
                    }else if(arguments[i] == "debug"){
                        console.debug = function(){};
                    }else if(arguments[i] == "dir"){
                        console.dir = function(){};
                    }else if(arguments[i] == "dirxml"){
                        console.dirxml = function(){};
                    }else if(arguments[i] == "group"){
                        console.group = function(){};
                    }else if(arguments[i] == "groupEnd"){
                        console.groupEnd = function(){};
                    }else if(arguments[i] == "trace"){
                        console.trace = function(){};
                    }else if(arguments[i] == "time"){
                        console.time = function(){};
                    }else if(arguments[i] == "profile"){
                        console.profile = function(){};
                    }
                }
            }
        },
        alert: function(){
            if(!config.alert)
              alert = function(){};

            return null;
        }
    }

    // --------------------------------------------------------------------------------------
    // Privates methods
    // --------------------------------------------------------------------------------------

    // Checks whether the browser is IE
    var isIE = function() {
        var myNav = navigator.userAgent.toLowerCase();
        return (myNav.indexOf('msie') != -1) ? true : false;
    }

    // Checks whether the element has the class to then add it
    var elementWithClasses = function(element, array_classes) {
        if (!element || !array_classes) return;
        var classes = "";
        for (var c = 0, len = array_classes.length; c < len; c++) {
            classes += "." + array_classes[c];
        }
        element += classes;
        return element;
    }

    // Checks whether the element has the ID to then add it
    var elementWithID = function(element, id) {
        if (!element || !id) return;
        element += "#" + id;
        return element;
    }

    // Create CORS settings for AJAX
    function createCORSRequest(method, url, xhr) {
        if ("withCredentials" in xhr) {
            // XHR for Chrome/Firefox/Opera/Safari.
            xhr.open(method, url, true);
        } else if (typeof XDomainRequest != "undefined") {
            // XDomainRequest for IE.
            xhr = new XDomainRequest();
            xhr.open(method, url);
        } else {
            // CORS not supported.
            xhr = null;
        }
        return xhr;
    }

    // Request of ajax with Promise
    var request = function(configs) {

        return new Promise(function(resolve, reject) {
            // By Quirksmode - http://www.quirksmode.org/js/xmlhttp.html
            var req = createXMLHTTPObject();
            var _key;
            var dataType = configs.dataType;
            var _resp;
            var array_headers = [];

            if (!req) return;

            var type = (configs.type) ? configs.type : "GET";
            req.open(type, configs.url, true);
            //req.setRequestHeader('User-Agent', 'XMLHTTP/1.0');

            if (type) {
                if (config.headers) {
                    var qty = savana.countObj(config.headers);
                    if (qty) {
                        for (var key in config.headers) {
                            if (typeof config.headers[key] != 'string') continue;
                            array_headers[key] = config.headers[key];
                        }
                    }
                }
                //http.withCredentials = true; // to support sending cookies with CORS // Header Padrão
            }

            //req.setRequestHeader('Content-type', 'application/x-www-form-urlencoded'); // Header Padrão
            req.onreadystatechange = function() {

                if (req.readyState != 4) return;
                if (req.status != 200 && req.status != 304 && req.status != 204) {
                    console.error(req.statusText + " " + req.responseURL);
                    console.error('HTTP error ' + req.status);
                    console.error(req.response);
                    reject(req);
                }

                switch (dataType) {
                    case "json":
                        _resp = savana.toJSON(req.response);
                        break;
                    case "xml":
                        _resp = savana.toXML(req.response);
                        break;
                    case "html":
                        _resp = savana.convertHTML(req.response);
                        break;
                    case "string":
                        _resp = req.response;
                        break;
                    default:
                        _resp = savana.toJSON(req.response);

                }

                resolve(_resp);

            };

            // Set headers
            if (savana.countObj(array_headers)) {
                for (i in array_headers) {
                    if (typeof array_headers[i] != 'string') continue;
                    if (array_headers[i]) {
                        req.setRequestHeader(i, array_headers[i]);
                    }
                }
            }

            req.send(config.data || null);

        });

    };

    // Request of ajax with Ajax Default
    var sendRequest = function(config) {

        var http = "";
        var req = createXMLHTTPObject();
        var xhr = new XMLHttpRequest();
        var dataType = config.dataType;
        var type = (config.type) ? config.type : "GET";
        var array_headers = [];

        /*
        BROWSER COMPATIBILITY
        Chrome 8+, Firefox 6+, IE10+, Opera 11.5+, Safari 6+
        */

        if (config.async) {
            http = xhr;
        } else {
            http = req;
        }

        createCORSRequest(type, config.url, http);
        http.responseType = "text";
        //req.setRequestHeader('User-Agent','XMLHTTP/1.0');   

        if (type) {
            if (config.headers) {
                var qty = savana.countObj(config.headers);
                if (qty) {
                    for (var key in config.headers) {
                        if (typeof config.headers[key] != 'string') continue;
                        array_headers[key] = config.headers[key];
                    }
                }
            }
            //http.withCredentials = true; // to support sending cookies with CORS // Header Padrão
        }

        http.onreadystatechange = function() {

            if (http.readyState != 4) return;

            if (http.status != 200 && http.status != 304 && http.status != 204) {
                // alert('HTTP error ' + req.status);
                config.error(http);
                return;
            }

            switch (dataType) {
                case "json":
                    _resp = savana.toJSON(http.response);
                    break;
                case "xml":
                    _resp = savana.toXML(http.response);
                    break;
                case "html":
                    _resp = savana.convertHTML(http.response);
                    break;
                case "string":
                    _resp = http.response;
                    break;
                default:
                    _resp = savana.toJSON(http.response);
                    break;
            }

            config.success(_resp);

        }

        if (http.readyState == 4) return;
        if (http.upload && type != "GET") {
            http.upload.onprogress = function(e) {
                if (e.lengthComputable) {
                    if (config.progress)
                        config.progress(Math.floor((e.loaded / e.total) * 100));
                }
            }
            http.upload.onloadstart = function(e) {
                if (config.progress)
                    config.progress(0);
            }
            http.upload.onloadend = function(e) {
                if (config.progress)
                    config.progress(100);
            }
        } else {
            http.onprogress = function(e) {
                if (e.lengthComputable) {
                    if (config.progress)
                        config.progress(Math.floor((e.loaded / e.total) * 100));
                }
            }
            http.onloadstart = function(e) {
                if (config.progress)
                    config.progress(0);
            }
            http.onloadend = function(e) {
                if (config.progress)
                    config.progress(100);
            }
        }

        // if(config.data && config.data != "{}"){
        //    if(savana.have(config.data, "{") && 
        //       savana.have(config.data, "}") && 
        //       savana.have(config.data, ":") && 
        //       type != "GET"
        //    ){
        //      array_headers['Content-type'] = 'application/json; charset=UTF-8';
        //    }else{
        //      array_headers['Content-type'] = 'application/x-www-form-urlencoded; charset=UTF-8';
        //    }

        // }

        // Set headers
        if (savana.countObj(array_headers)) {
            for (i in array_headers) {
                if (typeof array_headers[i] != 'string') continue;
                if (array_headers[i]) {
                    http.setRequestHeader(i, array_headers[i]);
                }
            }
        }

        http.send(config.data || null);

        return null;

    }

    var createXMLHTTPObject = function() {

        var XMLHttpFactories = [

            function() {
                return new XMLHttpRequest();
            },
            function() {
                return new ActiveXObject("Msxml2.XMLHTTP");
            },
            function() {
                return new ActiveXObject("Msxml3.XMLHTTP");
            },
            function() {
                return new ActiveXObject("Microsoft.XMLHTTP");
            }
        ];

        var xmlhttp = false;
        var _quantity_items = XMLHttpFactories.length;

        for (var i = 0; i < _quantity_items; i++) {
            try {
                xmlhttp = XMLHttpFactories[i]();
            } catch (e) {
                continue;
            }
            break;
        }

        return xmlhttp;

    };

    // Start Framework
    var $savana = function(params, content, isChild, position) {
        return new Savana(params, content, isChild, position);
    };

    // Assign our $savana object to global window object.
    var Savana = function(params, content, isChild, position) {
        var selector = $savana.fn.selector(params, content, isChild);
        var len = (selector.length === undefined) ? 1 : selector.length;

        if (position !== undefined) {
            len = (position >= 0) ? position : len;
            len = (position === 0) ? 1 : len;
        }

        for (var member in this) delete this[member];

        this.length = len;
        this.exist = (len) ? true : false;
        this.selector = params;

        // Add selector to object for method chaining
        if (len) {
            if (position !== undefined) {
                for (var i = 0; i <= this.length; i++) {
                    this[i] = selector[i];
                }
            } else {
                for (var i = 0; i < this.length; i++) {
                    this[i] = selector[i];
                }
            }
        } else {
            this[0] = selector;
        }
        return this;
    };

    $savana.fn = Savana.prototype = {
        done: function(fn) {
            if (document.readyState != 'loading') {
                window.setTimeout(function() {
                    fn(event);
                }, 0);
            } else if (document.addEventListener) {
                document.addEventListener('DOMContentLoaded', function(events) {
                    fn(events)
                });
            } else {
                window.setTimeout(function() {
                    fn(event);
                }, 0);
            }
            return null;

        },
        onload: function(fn) {
            this[0].onload = function(events) {
                fn(events);
            };
            return null;
        },
        scroll: function(fn) {
            this[0].onscroll = function(events) {
                fn(events);
            };
        },
        on: function(evt, fn) {

            if (!evt) return;
            var _callback = fn || false; // Check if exist a callback
            var _len = this.length;
            var el = this;
            for (var count = 0; count < _len; count++) {
                this[count].addEventListener(evt, function(events) {
                    if (savana.isFunction(_callback)) {
                        fn.call(this, events)
                    }
                }, false);
            }
            return this;

        },
        delegate: function(eventName, selector, fn) {

            var element = document.querySelector(this.selector);
            element.addEventListener(eventName, function(event) {
                var possibleTargets = element.querySelectorAll(selector);
                var target = event.target;

                for (var i = 0, l = possibleTargets.length; i < l; i++) {
                    var el = target;
                    var p = possibleTargets[i];

                    while (el && el !== element) {
                        if (el === p) {
                            fn.call(el, event);
                            return this;
                        }

                        el = el.parentNode;
                    }
                }
            });

            return false;

        },
        content: function(type, value) {

            if (!type) return;

            var _len = this.length;
            var _type = type || "text";

            if (value || typeof value === 'string') {
                switch (_type) {
                    case "text":
                        while (_len--) {

                            if (this[_len])
                                this[_len].textContent = value;
                        }
                        break;
                    case "val":
                        while (_len--) {
                            if (this[_len])
                                this[_len].value = value;
                        }
                        break;
                    case "html":
                        while (_len--) {
                            if (this[_len]) {
                                this[_len].innerHTML = value;
                            }
                        }
                        break;
                }
                return this;

            } else {

                var content;
                switch (_type) {
                    case "text":
                        while (_len--) {
                            content = (this[_len].innerText) ? this[_len].innerText : this[_len].textContent;
                        }
                        break;
                    case "val":
                        while (_len--) {
                            content = this[_len].value;
                        }
                        break;
                    case "html":
                        while (_len--) {
                            content = this[_len].innerHTML;
                        }
                        break;
                }
                return content;

            }

        },
        html: function(value) {

            if (value) {
                this.content("html", value);
                return this;
            } else {
                return this.content("html");
            }

        },
        text: function(value) {

            if (value) {
                this.content("text", value);
                return this;
            } else {
                return this.content("text");
            }

        },
        val: function(value) {

            if (value) {
                this.content("val", value);
                return this;
            } else {
                return this.content("val");
            }

        },
        each: function(fn) {

            if (!fn) return;
            var _len = this.length;
            for (var count = 0; count < _len; count++) {
                fn.call(this[count], window);
            }
            return this;

        },
        push: function(html, where, fn) {

            if (!html) return;
            var _callback = fn || false;
            var _where = (where == "before") ? "afterbegin" : "beforeend";
            var _len = this.length;
            for (var i = 0; i < _len; i++) {
                this[i].insertAdjacentHTML(_where, html);
            }
            if ($savana.fn.isFunction(_callback)) {
                fn.call(this, window);
            }
            return this;

        },
        destroy: function(fn) {

            var _callback = fn || false;
            var _len = this.length;
            for (var i = 0; i < _len; i++) {
                this[i].parentNode.removeChild(this[i]);
            }
            if ($savana.fn.isFunction(_callback)) fn.call(this, window);;
            return this;

        },
        addClass: function(className) {

            if (!className) return;
            var _len = this.length;
            var space;
            if (_len) {
                for (var i = 0; i < _len; i++) {
                    if (!savana.have(this[i].className, className)) {
                        this[i].setAttribute('class', this[i].className + " " + className);
                        if (!isIE()) {
                            this[i].setAttribute('class', this[i].className.trim());
                        }
                    }
                }
            }

            return this;

        },
        toggleClass: function(className) {

            if (!className) return;
            var _len = this.length;
            if (_len) {
                for (var count = 0; count < _len; count++) {
                    if ($savana(this[count]).hasClass(className)) {
                        $savana(this[count]).removeClass(className);
                    } else {
                        $savana(this[count]).addClass(className);
                    }
                }
            }
            return this;

        },
        hasClass: function(classNameToTestFor) {

            if(!classNameToTestFor) return;

            var classNames = this[0].className.split(' ');
            if (classNames) {
                for (var i = 0; i < classNames.length; i++) {
                    if (classNames[i].toLowerCase() == classNameToTestFor.toLowerCase()) {
                        return true;
                    }
                }
            } else {
                return;
            }

        },
        removeClass: function(className) {

            if (!className) return;
            var _len = this.length;
            if (_len) {
                for (var i = 0; i < _len; i++) {
                    if (this[i].className) {
                        this[i].className = this[i].className.replace(className, '');
                    }
                }
            }
            return this;

        },
        attr: function(attribute, value) {

            if (!attribute) return;
            var _len = this.length;
            for (var c = 0; c < _len; c++) {
                if (value) {
                    this[c].setAttribute(attribute, value);
                    return this;
                } else {
                    return this[c].getAttribute(attribute);
                }
            }

        },
        removeAttr: function(attribute) {

            if (!attribute) return;
            var _len = this.length;
            for (var i = 0; i < _len; i++) {
                this[i].removeAttribute(attribute);
            }
            return this;

        },
        styles: function(styles) {

            if (!styles) return;
            var _len = this.length;
            for (var count = 0; count <= _len; count++) {
                if (this[count])
                    this[count].setAttribute("style", styles);
            }
            return this;

        },
        parent: function() {

            return $savana(this[0].parentNode);

        },
        parents: function(selector_parent) {

            if (!selector_parent) return;
            var parents = [];
            var p = this[0].parentNode;
            var selector_target = "";

            while (p !== null) {
                var o = p;
                parents.push(o);
                p = o.parentNode;
            }

            for (var c = 0, len = parents.length; c < len; c++) {

                if (savana.have(elementWithClasses(savana.strLower(parents[c].nodeName), parents[c].classList), selector_parent)) {
                    selector_target = parents[c];
                    break;
                } else if (savana.have(elementWithID(savana.strLower(parents[c].nodeName), savana.strLower(parents[c].id)), selector_parent)) {
                    selector_target = parents[c];
                    break;
                } else {
                    if (savana.strUpper(parents[c].nodeName) == savana.strUpper(selector_parent)) {
                        selector_target = parents[c];
                        break;
                    }
                }
            }

            return $savana(selector_target); // returns an Array []

        },
        insert: function(new_element, where) {

            if (!new_element) return;
            var _where = where || "before";
            var _len = this.length;
            for (var c = 0; c < _len; c++) {
                if (_where == "before") {
                    this[c].insertAdjacentHTML('beforeBegin', new_element);
                } else if (_where == "after") {
                    this[c].insertAdjacentHTML('afterEnd', new_element);
                }
            }

            return this;

        },
        wrap: function(top, bottom) {

            if (!top || !bottom) return;
            var _len = this.length;
            for (var i = 0; i < _len; i++) {
                this[i].outerHTML = top + this[i].outerHTML + bottom;
            }
            return this;

        },
        exchange: function(new_html) {

            if (!new_html) return;
            var _len = this.length;
            for (var i = 0; i < _len; i++) {
                this[i].outerHTML = new_html;
            }
            return this;

        },
        copy: function() {
            if(!this.length) return "The element not exists";
               return this[0].cloneNode(true).outerHTML;
        },
        changeTo: function(element_target, where) {
            if (!element_target || !where) return;
            var self = this[0];
            var _copy = $savana(self).copy();
            $savana(element_target).insert(_copy, where);
            self.outerHTML = "";
            return this;
        },
        animate: function(effect, fn) {

            // Plugin CSS by Daniel Eden - https://daneden.github.io/animate.css/
            /*Efeitos:
                bounce, flash, pulse, rubberBand, shake, swing, tada, wobble, jello
                bounceIn, bounceInDown, bounceInLeft, bounceInRight, bounceInUp, bounceOut
                bounceOutDown, bounceOutLeft, bounceOutRight, bounceOutUp, fadeIn, fadeInDown
                fadeInDownBig, fadeInLeft, fadeInLeftBig, fadeInRight, fadeInRightBig, fadeInUp
                fadeInUpBig, fadeOut, fadeOutDown, fadeOutDownBig, fadeOutLeft, fadeOutLeftBig
                fadeOutRight, fadeOutRightBig, fadeOutUp, fadeOutUpBig, flipInX, flipInY
                flipOutX, flipOutY, lightSpeedIn, lightSpeedOut, rotateIn, rotateInDownLeft
                rotateInDownRight, rotateInUpLeft, rotateInUpRight, rotateOut, rotateOutDownLeft
                rotateOutDownRight, rotateOutUpLeft, rotateOutUpRight, hinge, rollIn, rollOut
                zoomIn, zoomInDown, zoomInLeft, zoomInRight, zoomInUp, zoomOut, zoomOutDown
                zoomOutLeft, zoomOutRight, zoomOutUp, slideInDown, slideInLeft, slideInRight
                slideInUp, slideOutDown, slideOutLeft, slideOutRight, slideOutUp
          */

            if (!effect) return;

            var _callback = fn || false;
            var _len = this.length;

            for (var i = 0; i < _len; i++) {
                $savana(this[i]).addClass("animated").addClass(effect);
            }

            if ($savana.fn.isFunction(_callback)) fn.call(this, window);
            return this;

        },
        hide: function() {
            var _len = this.length;
            // Here we simply loop through our object (self) and set the css to display none. 
            //If you got more that 1 node from DOM selected with querySelectorAll, you would hide them all.
            for (var i = 0; i < _len; i++) {
                this[i].style.display = 'none';
            }
            return this;
        },
        show: function() {
            var _len = this.length;
            for (var i = 0; i < _len; i++) {
                this[i].style.display = 'block';
            }

            return this;
        },
        serialize: function(isObj, getAllInpusOfForm, ruleClassValidation) {

            var form = this[0];
            getAllInpusOfForm = getAllInpusOfForm || false;

            isObj = isObj || true;
            var evt = window.event;
            var list = {};
            var field, query = '';
            if (typeof form == 'object' && form.nodeName == "FORM") {
                for (var i = form.elements.length - 1; i >= 0; i--) {
                    field = form.elements[i];
                    if (field.name && field.type != 'file' && field.type != 'reset') {
                        if (field.type == 'select-multiple') {
                            for (var j = form.elements[i].options.length - 1; j >= 0; j--) {
                                if (field.options[j].selected) {
                                    if (!isObj) {
                                        query += '&' + field.name + "=" + field.options[j].value;
                                    } else {
                                        if (ruleClassValidation) {
                                            if (savana.have(field.className, ruleClassValidation)) {
                                                list[field.name] = field.options[j].value;
                                            }
                                        } else {
                                            list[field.name] = field.options[j].value;
                                        }

                                    }
                                }
                            }
                        } else {
                            if ((field.type != 'submit' && field.type != 'button') || evt.target == field) {
                                if ((field.type != 'checkbox' && field.type != 'radio') || field.checked || getAllInpusOfForm) {
                                    if (!isObj) {
                                        query += '&' + field.name + "=" + field.value;
                                    } else {
                                        if (ruleClassValidation) {
                                            if (savana.have(field.className, ruleClassValidation)) {
                                                list[field.name] = field.value;
                                            }
                                        } else {
                                            list[field.name] = field.value;
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }

            if (isObj) {
                return list;
            } else {
                return query.substr(1);
            }

        },
        find: function(selector) {

            if (!selector) return;
            return $savana(selector, this[0]);

        },
        child: function(selector) {

            if (!selector) return;
            return $savana(selector, this[0], true);

        },
        eq: function(position) {

            position = position || 0;
            return $savana(this[position], "", false, position);

        },
        first: function() {
            return $savana(this[0], "", false, 0);
        },
        last: function() {
            return $savana(this[this.length - 1], "", false, this.length - 1);
        },
        isChecked: function() {

            if (this[0].checked) {
                return true;
            } else {
                return;
            }

        },
        isSelected: function() {

            if (!$savana(this[0]).isEmpty("val")) {
                return true;
            } else {
                return;
            }

        },
        size: function() {

            var width = this[0].offsetWidth;
            var height = this[0].offsetHeight;

            return {
                w: width,
                h: height
            };

        },
        position: function() {

            var xPosition = 0;
            var yPosition = 0;
            var _len = this.length;

            for (var i = 0; i < _len; i++) {
                xPosition += (this[i].offsetLeft - this[i].scrollLeft + this[i].clientLeft);
                yPosition += (this[i].offsetTop - this[i].scrollTop + this[i].clientTop);
                this[i] = this[i].offsetParent;
            }

            return {
                x: xPosition,
                y: yPosition
            };

        },
        isEmpty: function(type) {

            if (!type) return;
            var content = $savana(this[0]).content(type);
            if (content) {
                if (savana.removeAllSpaces(content).length) {
                    return false;
                } else {
                    return true;
                }
            } else {
                return true;
            }

        },
        clearForm: function() {

            var _len = this.length;
            for (var i = 0; i < _len; i++) {
                this[i].reset();
            }

            return this;

        },
        load: function(url, element, fn) {

            if (!url) return;
            var _callback = fn || false;

            savana.ajax({
                url: url,
                type: 'GET',
                dataType: 'html',
                success: function(resp) {

                    if ($savana.fn.isFunction(_callback)) {
                        if (element) {
                            fn($savana(resp).find(element).copy());
                        } else {
                            fn($savana(resp).html());
                        }
                    }

                },
                error: function(error) {
                    console.error("Error load");
                    console.error(error);
                }
            });

            return;

        },

        /* HELPERS */
        //----------------------------------------------

        removeAllSpaces: function(str) {
            if (!str) return;
            return str.replace(/\s/g, "");
        },
        convertHTML: function(str) {
            if (!str) return;
            var parser = new DOMParser();
            return parser.parseFromString(str, "text/html");
        },
        config: function(configs) {
            config = savana.extend(config, configs);
            clear.console();
            clear.alert();
            return null;
        },
        getNumberOfString: function(str) {
            if (!str) return;
            return str.replace(/[^0-9]/g, '');
        },
        toJSON: function(str) {
            if (!str) return;
            return JSON.parse(str);
        },
        objToJSON: function(obj) {
            if (!obj) return;
            return JSON.stringify(obj)
        },
        toXML: function(str) {
            if (!str) return;
            var parser = new DOMParser();
            return parser.parseFromString(str, "text/xml");
        },
        async: function(configs) {
            if (!configs) return;
            return request(configs);
        },
        ajax: function(config) {
            if (!config) return;
            return sendRequest(config);
        },
        url: function() {
            return window.location;
        },
        now: function() {
            var date = new Date();
            return date.getTime();
        },
        today: function(type) {

            var date = new Date();

            if (type == "date") {
                return date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear();
            } else if (type == "time") {

                var hours = date.getHours();
                if (hours < 10) hours = '0' + hours;

                var minutes = date.getMinutes();
                if (minutes < 10) minutes = '0' + minutes;

                var seconds = date.getSeconds();
                if (seconds < 10) seconds = '0' + seconds;

                return hours + ":" + minutes + ":" + seconds;

            }

        },
        date: function(date){

            var date;
            if(date){ date = new Date(date); }else{ date = new Date(); }
            return {
                day: date.getDate(), 
                month: date.getMonth(), 
                month_with_zero: (date.getMonth() < 10 && date.getMonth() > 0) ? '0'+date.getMonth() : date.getMonth(), 
                year: date.getFullYear(), 
                year_prefix: parseInt(date.getFullYear().toString().substr(2,4)), 
                hours: date.getHours(), 
                minutes: date.getMinutes(), 
                seconds: date.getSeconds(),
                miliseconds: date.getTime()
            };

        },
        urlCurrent: function() {
            return window.location.href;
        },
        dateServeToDateUser: function (dataServer) {
            // 2016-07-14T14:50:38.117' to 14/07/2016 11:50:38
            if(!dataServer) return;
            var now = new Date(dataServer);
            var year = "" + now.getFullYear();
            var month = "" + (now.getMonth() + 1); if (month.length == 1) { month = "0" + month; }
            var day = "" + now.getDate(); if (day.length == 1) { day = "0" + day; }
            var hour = "" + now.getHours(); if (hour.length == 1) { hour = "0" + hour; }
            var minute = "" + now.getMinutes(); if (minute.length == 1) { minute = "0" + minute; }
            var second = "" + now.getSeconds(); if (second.length == 1) { second = "0" + second; }
            return day + "/" + month + "/" + year + " " + hour + ":" + minute + ":" + second;
        },
        redirect: function(url) {
            if (!url) return;
            window.location.href = url;
            return null;
        },
        params: function(isRouter) {
            isRouter = isRouter || true;
            var params = this.url().hash.split("/");
            if (isRouter) params.shift();
            return params;
        },
        have: function(struct, compare, split) {

            var existInArray = false;

            if (struct && compare) {

                if (split) {
                    struct = struct.split("/");

                    for (var cont = 0, len = struct.length; cont < len; cont++) {
                        if (struct[cont] == compare) {

                            existInArray = true;
                            break;

                        }
                    }

                    return existInArray;

                } else {

                    if (struct.toString().indexOf(compare) > -1) {
                        return true;
                    } else {
                        return false;
                    }

                }

            } else {
                return false;
            }

        },
        isFunction: function(str) {

            if (typeof str == "function") {
                return true;
            } else {
                return;
            }

        },
        isObject: function(str) {

            if (typeof str == "object") {
                return true;
            } else {
                return;
            }

        },
        isString: function(str) {

            if (typeof str == "string") {
                return true;
            } else {
                return;
            }

        },
        isCPF: function(CPF) {

            if (!CPF) return;

            var strCPF = savana.getNumberOfString(CPF);

            var Soma;
            var Resto;
            Soma = 0;
            if (strCPF == "00000000000") return;
            for (i = 1; i <= 9; i++) Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (11 - i);
            Resto = (Soma * 10) % 11;
            if ((Resto == 10) || (Resto == 11)) Resto = 0;
            if (Resto != parseInt(strCPF.substring(9, 10))) return;
            Soma = 0;
            for (i = 1; i <= 10; i++) Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (12 - i);
            Resto = (Soma * 10) % 11;
            if ((Resto == 10) || (Resto == 11)) Resto = 0;
            if (Resto != parseInt(strCPF.substring(10, 11))) return;
            return true;

        },
        formatMoney: function(number, decimals, dec_point, thousands_sep, symbol) {

            if (!number || !decimals || !dec_point || !thousands_sep || !symbol) return;

            number = (number + '').replace(',', '').replace(' ', '');
            var n = !isFinite(+number) ? 0 : +number,
                prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
                sep = (typeof thousands_sep === 'undefined') ? ',' : thousands_sep,
                dec = (typeof dec_point === 'undefined') ? '.' : dec_point,
                s = '',
                toFixedFix = function(n, prec) {
                    var k = Math.pow(10, prec);
                    return '' + Math.round(n * k) / k;
                };
            // Fix for IE parseFloat(0.55).toFixed(0) = 0;
            s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.');
            if (s[0].length > 3) {
                s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
            }
            if ((s[1] || '').length < prec) {
                s[1] = s[1] || '';
                s[1] += new Array(prec - s[1].length + 1).join('0');
            }

            return symbol + " " + s.join(dec);

        },
        rewrite: function(str) {

            if (!str) return;

            if (!isIE()) {
                return str.toLowerCase().trim()
                    .replace(/[áàãâä]/g, "a")
                    .replace(/[éèẽêë]/g, "e")
                    .replace(/[íìĩîï]/g, "i")
                    .replace(/[óòõôö]/g, "o")
                    .replace(/[úùũûü]/g, "u")
                    .replace(/ç/g, "c")
                    .replace(/(\ |_)+/, " ")
                    .replace(/(^-+|-+$)/, "")
                    .replace(/[^a-z0-9]+/g, '-');
            } else {
                return str.toLowerCase()
                    .replace(/[áàãâä]/g, "a")
                    .replace(/[éèẽêë]/g, "e")
                    .replace(/[íìĩîï]/g, "i")
                    .replace(/[óòõôö]/g, "o")
                    .replace(/[úùũûü]/g, "u")
                    .replace(/ç/g, "c")
                    .replace(/(\ |_)+/, " ")
                    .replace(/(^-+|-+$)/, "")
                    .replace(/[^a-z0-9]+/g, '-');
            }
        },
        isEmail: function(email) {

            if (!email) return;
            var filtro = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
            if (filtro.test(email)) {
                return true;
            } else {
                return;
            }
            
        },
        isNumber: function(number) {

            if (!isNaN(number)) {
                return true;
            } else {
                return;
            }

        },
        isLetter: function(x) {

            var regex = /^[a-zA-Z\s]+$/;

            if (x.match(regex)) {
                return true;
            } else {
                return;
            }

        },
        isURL: function(url) {

            if (!url) return;
            var regexp = /^((http|https|ftp|ftps):\/\/)?([a-z0-9\-]+\.)?[a-z0-9\-]+\.[a-z0-9]{2,4}(\.[a-z0-9]{2,4})?(\/.*)?$/i;
            return regexp.test(url);

        },
        convertMoneyToFloat: function(vl, symbol) {

            if (!vl || !symbol) return;
            return parseFloat(vl.replace(".", "").replace(",", ".").replace(symbol, "").replace(symbol + " ", ""));

        },
        getValueBill: function(price, descount, symbol) {

            if (!price || !descount || !symbol) return;

            var valor_desc, vl = [];
            var product_price = savana.convertMoneyToFloat(price, symbol);

            if (product_price && descount) {

                valor_desc = (product_price * descount) / 100;    
                valor_desc = valor_desc;
                product_price = product_price - valor_desc;

                product_price = savana.formatMoney(product_price, 2, ',', '.', symbol);
                valor_desc = savana.formatMoney(valor_desc, 2, ',', '.', symbol);

                vl.total = product_price;
                vl.descount = valor_desc;
                vl.porcent_descount = descount;

                return vl;
            }

        },
        installment: function(price, parcmax, juros, valmin, symbol) {

            if (!price || !parcmax || !valmin || !symbol) return;

            var val = [];

            parcmax = parseInt(parcmax);
            juros = parseFloat(juros);
            valmin = parseFloat(valmin);

            var vl = savana.convertMoneyToFloat(price, symbol);
            var parcs = parseInt(vl / valmin);
            var item_price;
            var I = "";

            if (parcs > parcmax) {
                parcs = parcmax;
            }

            item_price = vl / parcs;

            if (juros === 0) {

                if (parcs > 0) {

                    val.parc = parcs + "x";
                    val.parc_number = parcs;
                    val.vl = savana.formatMoney(item_price, 2, ',', '.', symbol);
                    val.vl_number = item_price;
                    val.juros = null;

                    return val;

                } else {
                    return;
                }

            } else {

                //valor com juros
                I = juros / 100;
                item_price = (vl * Math.pow((1 + I), parcs)) / parcs;

                if (parcs > 0) {

                    val.parc = parcs + "x";
                    val.parc_number = parcs;
                    val.val = savana.formatMoney(item_price, 2, ',', '.', symbol);
                    val.vl_number = item_price;
                    val.juros = parseFloat(juros) + "% a.m";
                    val.juros_number = juros;

                    return val;

                } else {
                    return;
                }

            }

        },
        financing: function(price, parcmax, juros, valmin, symbol) {

            if (!price || !parcmax || !valmin || !juros || !symbol) return;

            var val = [];

            parcmax = parseInt(parcmax);
            juros = parseFloat(juros);
            valmin = parseFloat(valmin);

            var vl = savana.convertMoneyToFloat(price, symbol);
            var parcs = parseInt(vl / valmin);
            var item_price;
            var I = "";

            if (parcs > parcmax) {
                parcs = parcmax;
            }

            item_price = vl / parcs;

            if (juros) {

                I = juros / 100;
                item_price = (vl * I * Math.pow((1 + I), parcs)) / (Math.pow((1 + I), parcs) - 1);

                if (parcs > 0) {

                    val.parc = parcs + "x";
                    val.parc_number = parcs;
                    val.vl = savana.formatMoney(item_price, 2, ',', '.', symbol);
                    val.vl_number = item_price;
                    val.juros = parseFloat(juros) + "% a.m";
                    val.juros_number = juros;

                    return val;

                } else {
                    return;
                }

            } else {
                return;
            }

        },
        upperAllFirstLetter: function(text) {
            if (!text) return;
            var loweredText = text.toLowerCase();
            var words = loweredText.split(" ");
            for (var a = 0; a < words.length; a++) {
                var w = words[a];
                var firstLetter = w[0];
                if (firstLetter) {
                    w = firstLetter.toUpperCase() + w.slice(1);
                    words[a] = w;
                }
            }
            return words.join(" ");
        },
        setCookie: function(name, value, times, path) {
            if (!name || !value || !times) return;
            path = path || "/"
            var d = new Date();
            d.setTime(d.getTime() + (times * 1000 * 60 * 60));
            var expires = "expires=" + d.toGMTString();
            var path = "path=" + path;
            document.cookie = name + "=" + value + ";" + expires + ";" + path + ";";
            return true;
        },
        getCookie: function(name) {
            if (!name) return;
            name += "=";
            var ca = document.cookie.split(';');
            for (var i = 0; i < ca.length; i++) {
                var c = ca[i];
                while (c.charAt(0) == ' ') c = c.substring(1);
                if (c.indexOf(name) != -1) return c.substring(name.length, c.length);
            }
            return "";
        },
        deleteCookie: function(name) {
            if (!name) return;
            savana.setCookie(name, "", -1);
            return "";
        },
        percent: function(oldValue, newValue, symbol) {

            if (!oldValue || !newValue || !symbol) return;

            var x = [];
            newValue = savana.convertMoneyToFloat(newValue, symbol);
            oldValue = savana.convertMoneyToFloat(oldValue, symbol);
            x.discount = Math.abs(parseInt((((newValue / oldValue) * 100) - 100)));
            x.discount_format = x.discount + "%";
            return x;
        },
        discountPercent: function(percent, value, symbol) {

            if (!percent || !value || !symbol) return;

            var x = [];
            value = savana.convertMoneyToFloat(value, symbol);
            x.discount_price = (percent / 100) * value;
            x.total_price_with_discount = value - ((percent / 100) * value);
            x.total_price_with_increase = value + ((percent / 100) * value);
            x.discount_price_format = savana.formatMoney(x.discount_price, 2, ',', '.', symbol);
            x.total_price_with_discount_format = savana.formatMoney(x.total_price_with_discount, 2, ',', '.', symbol);
            x.total_price_with_increase_format = savana.formatMoney(x.total_price_with_increase, 2, ',', '.', symbol);
            return x;
        },
        limitLetter: function(str, first_qtd, max_qtd) {

            if (!str || !max_qtd) return;

            var dot = "...";
            if (str.length > max_qtd) {
                return str.substring(first_qtd, max_qtd) + dot;
            } else {
                return str.substring(first_qtd, max_qtd);
            }

        },
        limitWord: function(str, max_qtd) {

            if (!str || !max_qtd) return;

            var dot = "...";
            var word = str.split(" ");
            var words = "";

            if (max_qtd < word.length) {
                for (var cont = 0; cont <= (max_qtd - 1); cont++) {
                    words += word[cont] + " ";
                }
                return words + dot;
            } else {
                return str;
            }

        },
        dialogClose: function(fn) {

            var _callback = fn || false;

            $savana(".ht-header .ht-close-thik, .ht-footer a.ht-popup-btn-confirm").on("click", function(e) {

                $savana(".ht-popup-area, .ht-popup-bg").animate("fadeOut", function() {

                    $savana(".ht-popup-area, .ht-popup-bg").hide();
                    $savana(".ht-popup-area, .ht-popup-bg").removeClass("animated");
                    $savana(".ht-popup-area, .ht-popup-bg").removeClass("fadeIn");
                    $savana(".ht-popup-area, .ht-popup-bg").removeClass("fadeOut");

                });

                savana.eventStop(e);

                if (savana.isFunction(_callback))
                    fn(true);

            });

            $savana(".ht-footer a.ht-popup-btn-not-confirm").on("click", function(e) {

                $savana(".ht-popup-area, .ht-popup-bg").animate("fadeOut", function() {

                    $savana(".ht-popup-area, .ht-popup-bg").hide();
                    $savana(".ht-popup-area, .ht-popup-bg").removeClass("animated");
                    $savana(".ht-popup-area, .ht-popup-bg").removeClass("fadeIn");
                    $savana(".ht-popup-area, .ht-popup-bg").removeClass("fadeOut");

                });

                savana.eventStop(e);

                if (savana.isFunction(_callback))
                    fn(false);

            });

        },
        strUpper: function(str) {
            if (!str) return;
            return str.toUpperCase();
        },
        eventStop: function(e) {
            if (!e) return;
            e.preventDefault ? e.preventDefault() : (e.returnValue = false);
        },
        strLower: function(str) {
            if (!str) return;
            return str.toLowerCase();
        },
        messageBox: function(msg, type) {
            if (!msg || !type) return;
            return '<div class="alert-box ' + type + '"><span>' + msg + '</span></div>';
        },
        loadPreloader: function() {
            var _html = '<div class="ht-box-loader">' +
                '<div class="three-quarters-loader">' +
                'Loading…' +
                '</div>' +
                '</div><div class="ht-popup-bg"></div>';

            $savana("body").push(_html, "after");
            return true;
        },
        showPreloader: function() {
            $savana(".ht-box-loader, .ht-popup-bg").show();
        },
        hidePreloader: function() {
            $savana(".ht-box-loader, .ht-popup-bg").hide();
        },
        loadAlert: function() {
            var _html = '<div class="ht-popup ht-popup-area ht-popup-alert">' +
                '<div class="ht-header-popup ht-header">' +
                '<a href="#" class="ht-close-thik">✖</a>' +
                'Mensagem para você!' +
                '</div><!-- /header -->' +
                '<div class="ht-body ht-popup-body">' +
                '</div>' +
                '<div class="ht-footer header-popup">' +
                '<a class="ht-btn ht-popup-btn-confirm" href="">Confirmar!</a>' +
                '</div><!-- /header -->' +
                '</div><div class="ht-popup-bg"></div>';

            $savana("body").push(_html, "after");
        },
        alert: function(msg) {
            if (!msg || !config.alert) return;
            $savana(".ht-popup-alert .ht-body.ht-popup-body").content("html", msg);
            $savana(".ht-popup-alert, .ht-popup-bg").show();
            $savana(".ht-popup-alert, .ht-popup-bg").animate("fadeIn");
            savana.dialogClose();
        },
        confirm: function(msg, fn) {
            if (!msg) return;
            $savana(".ht-popup-confirm .ht-body.ht-popup-body").content("html", msg);
            $savana(".ht-popup-confirm, .ht-popup-bg").show();
            $savana(".ht-popup-confirm, .ht-popup-bg").animate("fadeIn");
            return savana.dialogClose(fn);
        },
        loadConfirm: function() {
            var _html = '<div class="ht-popup-area ht-popup ht-popup-confirm">' +
                '<div class="ht-header ht-header-popup">' +
                'Mensagem para você' +
                '</div><!-- /header -->' +
                '<div class="ht-body ht-popup-body">' +
                '</div>' +
                '<div class="ht-footer header-popup">' +
                '<a class="ht-btn ht-popup-btn-confirm" href="">Sim</a>' +
                '<a class="ht-btn ht-popup-btn-not-confirm" href="">Não</a>' +
                '</div><!-- /header -->' +
                '</div>';
            $savana("body").push(_html, "after");
        },
        extend: function(obj, props) {
            if (!obj || !props) return obj;
            for (var prop in props) {
                if (props.hasOwnProperty(prop)) {
                    obj[prop] = props[prop];
                }
            }
            return obj;
        },
        countObj: function(obj) {
            if(!obj) return;
            return Object.keys(obj).length;
        },
        sort_by: function(field, reverse, primer) {
            if(!field || !reverse || !primer) return;
            var key = primer ?
                function(x) {
                    return primer(x[field]);
                }:
                function(x) {
                    return x[field];
                };

            reverse = !reverse ? 1 : -1;

            return function(a, b) {
                return a = key(a), b = key(b), reverse * ((a > b) - (b > a));
            };
        },
        endTime: function(time) {
            if(!time) return;
            // Remember when we finished
            var end = new Date().getTime();

            // Now calculate and output the difference    
            var miliseconds = (end - time < 0) ? 0 : end - time;
            if (miliseconds >= 1000) {
                console.log("Call to doSomething took " + miliseconds / 1000 + " seconds.");
            } else {
                console.log("Call to doSomething took " + miliseconds + " milliseconds.");
            }

        },
        selector: function(params, content, isChild) {

            if (content) {

                if (isChild) {

                    var nodes = content.childNodes;
                    var elements_child = [];

                    for (var i = 0; i < nodes.length; i++) {

                        if (!nodes[i].nodeName) continue;

                        if (nodes[i].nodeName.toLowerCase() == params) {
                            elements_child.push(nodes[i]);
                        } else if (nodes[i].className) {
                            if (savana.have(nodes[i].nodeName.toLowerCase() + "." + nodes[i].className.replace("/\s/g", "."), params)) {
                                elements_child.push(nodes[i]);
                            }
                        } else if (nodes[i].id) {
                            if (savana.have(nodes[i].nodeName.toLowerCase() + "#" + nodes[i].id, params)) {
                                elements_child.push(nodes[i]);
                            }
                        }
                    }

                    return elements_child;

                } else {
                    return (!$savana.fn.isObject(params)) ? content.querySelectorAll(params) : [params];
                }

            } else {
                if ($savana.fn.isString(params)) {
                    if (savana.have(params, "<") && savana.have(params, ">")) {
                        return savana.convertHTML(params).querySelectorAll(params.replace("<", "").replace(">", ""));
                    } else {
                        return document.querySelectorAll(params);
                    }
                } else {
                    return [params];
                }
            }

        },
        getParams: function(name, href) {
            if(!name) return;
            href = href || window.location.href;
            name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
            var regexS = "[\\?&]" + name + "=([^&#]*)";
            var regex = new RegExp(regexS);
            var results = regex.exec(href);
            if (results == null)
                return "";
            else
                return decodeURIComponent(results[1].replace(/\+/g, " "));
        },
        isIE: function() {
            return isIE();
        },
        whatBrowser: function() {
            var browser = false;
            if (navigator.appVersion.indexOf("MSIE 12") > -1) {
                browser = "IE12";
            } else if (navigator.appVersion.indexOf("MSIE 11") > -1) {
                browser = "IE11";
            } else if (navigator.appVersion.indexOf("MSIE 10") > -1) {
                browser = "IE10";
            } else if (navigator.appVersion.indexOf("MSIE 9") > -1) {
                browser = "IE9";
            } else if (navigator.appVersion.indexOf("MSIE 8") > -1) {
                browser = "IE8";
            } else if (navigator.appVersion.indexOf("MSIE 7") > -1) {
                browser = "IE7";
            } else if (navigator.userAgent.indexOf('Chrome') > -1) {
                browser = "Chrome";
            } else if (navigator.userAgent.indexOf('Firefox') > -1) {
                browser = "Firefox";
            } else if (navigator.userAgent.indexOf('Safari') > -1) {
                browser = "Safari";
            } else if (navigator.userAgent.toLowerCase().indexOf("op") > -1) {
                browser = "Opera";
            }
            return browser;
        },
        ieObjectSetPrototypeOf: function(obj, proto) {
            if(!obj || !proto) return;
                obj.__proto__ = proto;
                return obj;
        },
        elementExist: function(element) {
            if (!element) return;
            if ($savana(element).length) {
                return true
            } else {
                return false;
            }
        },
        whatDevice: function() {
            var size = $savana("body").size();
            if (size.w >= 1200) {
                return "desktop";
            } else if (size.w >= 550 && size.w < 1200) {
                return "tablet";
            } else {
                return "mobile";
            }
        },
        daysDifferenceBetweenDates: function(date_start, date_end) {
            if (!date_start || !date_end) return;
            if (date_start.getTime() <= date_end.getTime()) {
                var dif = Date.UTC(date_start.getYear(), date_start.getMonth(), date_start.getDate(), 0, 0, 0) - Date.UTC(date_end.getYear(), date_end.getMonth(), date_end.getDate(), 0, 0, 0);
                return Math.abs((dif / 1000 / 60 / 60 / 24));
            } else {
                return 0;
            }
        }

    };

    var savana = new Savana();

    // Assign our $savana object to global window object.
    if (!window.$savana) {
        // DOM call
        window.$savana = $savana;
        window.$sjs = $savana;
        // Helpers call
        window.savana = savana;
        window.sjs = savana;

        console.info('%cSavanaJS - You are working on your project! Thanks:) | See documentation: http://savanajs.github.io/docs', 'color:#7ac142;font-weight:bold;font-size:11px');
    }

})();
