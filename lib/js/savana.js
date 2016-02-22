/*
Savana JS
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
 * 1.4 -- content ..................................... Insert and capture text, HTML or values of elements
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
 
 * 2 ---- HELPERS - savana.fn();
 *
 * 2.1 --- removeAllSpaces ............................ Remove the empty spaces of an occurrence
 * 2.2 --- getNumberOfString .......................... Just pick numbers from one occurrence
 * 2.3 --- debug ...................................... Displays a message to the developer
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

 * 3 ---- Creates Objects;
 * 3.1 -- ObjectJS .................................... Create objects in script in a simpler form

 * 4 ---- CLIENT-SIDE
 * 4.1 --
 */


!(function($savana, undefined) {

    var config = {
        debug: true,
        alert: true
    }

    var isIE = function() {
        var myNav = navigator.userAgent.toLowerCase();
        return (myNav.indexOf('msie') != -1) ? true : false;
    }

    var elementWithClasses = function(element, array_classes) {
        if (!element || !array_classes) return;
        var classes = "";
        for (var c = 0, len = array_classes.length; c < len; c++) {
            classes += "." + array_classes[c];
        }
        element += classes;
        return element;
    }

    var elementWithID = function(element, id) {
        if (!element || !id) return;
        element += "#" + id;
        return element;
    }

    // Request
    // Domestic helper ajax

    var request = function(configs) {

        return new Promise(function(resolve, reject) {
            // By Quirksmode - http://www.quirksmode.org/js/xmlhttp.html
            var req = createXMLHTTPObject();
            var _key;
            var _type = configs.type;
            var _resp;

            if (!req) return;

            var method = (configs.method) ? "POST" : "GET";
            req.open(method, configs.url, true);
            //req.setRequestHeader('User-Agent', 'XMLHTTP/1.0');

            if (configs.headers) {
                if (configs.headers.length) {
                    var qtd_headers = configs.headers.length;
                    for (var c = 0; c < qtd_headers; c++) {
                        _key = Object.keys(configs.headers[c]);
                        req.setRequestHeader(_key, configs.headers[c][_key]);
                    }
                }
            }

            req.setRequestHeader('Content-type', 'application/x-www-form-urlencoded'); // Header Padrão
            req.onreadystatechange = function() {

                if (req.readyState != 4) return;
                if (req.status != 200 && req.status != 304) {
                    console.error(req.statusText + " " + req.responseURL);
                    console.error('HTTP error ' + req.status);
                    console.error(req.response);
                    reject(req);
                }

                if (_type) {
                    switch (_type) {
                        case "json":
                            _resp = savana.toJSON(req.response);
                            break;
                        case "xml":
                            _resp = savana.totXML(req.response);
                            break;
                        case "string":
                            _resp = req.response;
                            break;
                    }

                    resolve(_resp);

                } else {
                    resolve(req);
                }
            };

            if (req.readyState == 4) return;
            req.send(configs.data);

        });

    };

    var sendRequest = function(config, callbackSuccess, callbackError) {
        var req = createXMLHTTPObject();
        var _type = config.type;
        if (!req) return;
        var method = (config.method) ? "POST" : "GET";
        req.open(method, config.url, true);
        //req.setRequestHeader('User-Agent','XMLHTTP/1.0');

        if (method) {
            if (config.headers) {
                if (config.headers.length) {
                    var qtd_headers = config.headers.length;
                    for (var c = 0; c < qtd_headers; c++) {
                        _key = Object.keys(config.headers[c]);
                        req.setRequestHeader(_key, config.headers[c][_key]);
                    }
                }
            }

            req.setRequestHeader('Content-type', 'application/x-www-form-urlencoded'); // Header Padrão

        }


        req.onreadystatechange = function() {
            if (req.readyState != 4) return;
            if (req.status != 200 && req.status != 304) {
                // alert('HTTP error ' + req.status);
                callbackError(req);
                return;
            }

            if (_type) {
                switch (_type) {
                    case "json":
                        _resp = savana.toJSON(req.response);
                        break;
                    case "xml":
                        _resp = savana.totXML(req.response);
                        break;
                    case "string":
                        _resp = req.response;
                        break;
                }

                callbackSuccess(_resp);

            } else {
                callbackSuccess(req);
            }

        }

        if (req.readyState == 4) return;
        req.send(config.data);
    }

    // Helpers INSIDE THE PLUG
    // -----------------------------------------------------------------------------
    // createXMLHTTPObject - savana.limitWord(str, max_qtd)
    // Internal use AJAX

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

    // ObjectJS - $SavanaObj.Class(fn, extent);
    // Create objects in script in a simpler form
    // ..........................................................

    // Exemple use:

    /*
      var Mammal = SavanaObject.Create(function(){

          this.eyes = "Preto"; // this -> public
          this.fur = "castalho"; // this -> public

          this._init(function(){ // Initialization
         
          });

          this.walk = function(){ // Method public
            alert("Walking")
          }

          this.speak = function(){ // Method public
            alert("Speaking")
          }

      });

      var Person = SavanaObject.Create(function(){

          this.name = "Rafael"; // this -> public
          this.age = 30;    
          var _password = 12345678 // private with(_variable)

          this._init(function(){ // Constructor
            _methodPrivate();
          });

          this.methodPublic = function(){ // Method public
            alert("methodPublic")
          }

          this.showPassword = function(){
             alert(_password);
          }

          function _methodPrivate(){ // Method private with(_fun)
            alert("methodPrivate");
          }

      }, Mammal); // Extend

        console.log(Mammal)
        console.log(Person)
        Person.methodPublic();
        Person.walk();
        alert(Person._password); // Undefined
        Person.showPassword();

    */

    var ObjectJS = function() {

        // Private attributes and functions area.
        // Public area attributes and functions.
        // This area can be accessed from the private area.

        return {
            Create: function(fn, ext) {
                var obj = {
                    _init: function(fn) {
                        fn();
                    }
                };

                if (ext)
                    savana.extend(obj, ext);

                fn.call(obj);
                return obj;
            }
        };

    };

    // Running Singleton.

    var $savana = function(params, content, isChild, position) {
        return new Savana(params, content, isChild, position);
    };

    var Savana = function(params, content, isChild, position) {
        // Assign our $savana object to global window object.
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

        // Return as object
        return this;
    };

    $savana.fn = Savana.prototype = {

        // Done - $savana(document).done(function(event){});
        // Initiator framework
        // -------------------------------------------------
        // Example of use:
        // $savana(document).done(function(event) {
        //   // Your code here ...   
        // });

        done: function(fn) {
            if (!isIE()) {
                this[0].addEventListener('DOMContentLoaded', function(events) {
                    fn(events);
                }, false);
            } else {
                window.setTimeout(function() {
                    fn(event);
                }, 0);
            }

            return null;

        },

        // Onload - $savana(document).done(function(event){});
        // Initiator Framework after the onload window
        // --------------------------------------------------
        // Example of use:
        // $savana(window).onload(function(e){
        //   // Yout code here
        // });

        onload: function(fn) {
            this[0].onload = function(events) {
                fn(events);
            };
            return null;
        },

        // Scroll - $savana(window).scroll(function(event){});
        // Page scroll event
        // --------------------------------------------------
        // Example of use:
        // $savana(window).scroll(function(e){
        //   // Yout code here
        // });

        scroll: function(fn) {
            this[0].onscroll = function(events) {
                fn(events);
            };
        },

        // On - $savana(selector).on(event, function(event){});
        // Call events (click, hover, change, keyup, etc)
        // ---------------------------------------------------
        // Example of use:
        // $savana("a").on("click", function(e){
        //  console.log($savana(self).content("text"));
        // });

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

        // Delegate - $savana(selector_parent).delegate(event, selector, function(event){});
        // call events dynamics. (click, hover, change, keyup, etc)
        // ---------------------------------------------------
        // Example of use:
        // $savana("#menu").delegate("click", "li" function(e){
        //  console.log($this.content("text")); // Reference to $savana("a")
        // });

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

        // Content - $savana(selector).content(type, value);
        // Insert and capture text, HTML or values of elements 
        // Types: html, text e val
        // -------------------------------------------------------
        // Example of use para inserir um novo texto:
        // $savana("li").content("text", "New text");
        // -------------------------------------------------------
        // Example of use para pegar um texto de um elemento:
        // $savana("li").content(text);

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

        // Each - $savana(selector).each(callback);
        // Get an HTML element set 
        // -----------------------------------------
        // Example of use:
        // $savana("ul li").each(function(e){
        //    $savana(self).content("text");
        // });

        each: function(fn) {

            if (!fn) return;
            var _len = this.length;

            for (var count = 0; count < _len; count++) {
                fn.call(this[count], window);
            }

            return this;

        },

        // Push - $savana(selector).push(content_html, where, callback);
        // Insert content within HTML elements
        // -----------------------------------------
        // Example of use:
        // $savana("ul").push("<li>Nova LI</li>");
        // -----------------------------------------
        // Exemplo de where:
        // before -> Insere antes (No incio)
        // after  -> Insere depois (No final)

        push: function(html, where, fn) {

            if (!html) return;

            var _callback = fn || false;
            var _where = (where == "before") ? "afterbegin" : "beforeend";
            var _len = this.length;

            while (_len--) {
                this[_len].insertAdjacentHTML(_where, html);
            }

            if ($savana.fn.isFunction(_callback)) {
                fn.call(this, window);
            }

            return this;

        },

        // Destroy - $savana(selector).destroy(callback);
        // Remove HTML elements
        // -----------------------------------------
        // Example of use:
        // $savana("ul li:nth-child(1)").destroy();

        destroy: function(fn) {

            var _callback = fn || false;
            var _len = this.length;

            while (_len--) {
                this[_len].parentNode.removeChild(this[_len]);
            }

            if ($savana.fn.isFunction(_callback)) fn.call(this, window);;

            return this;

        },

        // AddClass - $savana(selector).addClass(classname);
        // Add a class in the HTML element
        // -----------------------------------------
        // Example of use:
        // $savana("ul#list li").addClass("test")

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

        // Toggle Class - $savana(selector).toggleClass(classname);
        // Add or remove a class element if it exists or not
        // ---------------------------------------------------------------
        // Example of use:
        // $savana("ul li").toggleClass("lista-nova");

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

        // Has Class - $savana(selector).hasClass(classname);
        // Add or remove a class in the target elements
        // -------------------------------------------------
        // Example of use:
        // $savana("ul#list li").toggleClass("no");

        hasClass: function(classNameToTestFor) {

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

        // RemoveClass - $savana(selector).removeClass(className);
        // Remove the element classes
        // -------------------------------------------------------
        // Example of use:
        // $savana("ul#list li:nth-child(1)").removeClass(lista-nova");       

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

        // Attr - $savana(selector).attr(attribute);
        // Add attributes in HTML elements
        // -------------------------------------------------
        // Example of use:
        // $savana("ul#list li:nth-child(1)").attr("class");

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

        // Remove Attr - $savana(selector).removeAttr(attribute);
        // Remove attributes in HTML elements
        // -------------------------------------------------------
        // Example of use:
        // $savana("ul#list li:nth-child(1)").removeAttr("class");        

        removeAttr: function(attribute) {

            if (!attribute) return;
            var _len = this.length;

            while (_len--) {
                this[_len].removeAttribute(attribute);
            }

            return this;

        },

        // Styles - $savana(selector).styles(styles);
        // Add CSS styles of the elements
        // -----------------------------------------
        // Example of use:
        // $savana(selector).styles("color:red");

        styles: function(styles) {

            if (!styles) return;
            var _len = this.length;

            for (var count = 0; count <= _len; count++) {
                if (this[count])
                    this[count].setAttribute("style", styles);
            }

            return this;

        },

        // Parent - $savana(selector).parent();
        // Find the father of one element
        // -----------------------------------------
        // Example of use:
        // $savana("ul > li").parent();          

        parent: function() {

            return $savana(this[0].parentNode);

        },

        // Parents - $savana(selector).parents(selector_parent);
        // Find the father of one element
        // ----------------------------------------------------
        // Example of use:
        // $savana("ul>li").parents(".all");

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

        // Insert - $savana(selector).insert(content, where);
        // Insert HTML content before or after said members
        // ----------------------------------------------------
        // Example of use:
        // $savana("ul>li").insert("<div class='new-li'>Nova LI</div>", "before");        

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

        // Wrap - $savana(selector).wrap(start, end);
        // Insert a parent element for an element
        // ------------------------------------------------------------
        // Example of use:
        // $savana("ul#list").wrap("<div class='all-list'>", "</div>");     

        wrap: function(top, bottom) {

            if (!top || !bottom) return;

            var _len = this.length;

            while (_len--) {

                this[_len].outerHTML = top + this[_len].outerHTML + bottom;

            }

            return this;

        },

        // Exchange - $savana(selector).exchange(content); 
        // Change an HTML element by another HTML element
        // ----------------------------------------------------
        // Example of use:
        // $savana("ul#list").exchange("<ul id='list2'></ul>");       

        exchange: function(new_html) {

            if (!new_html) return;

            var _len = this.length;

            while (_len--) {
                this[_len].outerHTML = new_html;
            }

            return this;

        },

        // Copy - $savana(selector).copy();
        // Copy an HTML element
        // -------------------------------
        // Example of use:
        // $savana("ul#list").copy()    

        copy: function() {

            return this[0].cloneNode(true).outerHTML;

        },

        // changeTo - $savana(selector).place(target, where); 
        // Change an HTML element place
        // ----------------------------------------------
        // Example of use:
        // $savana("ul#list").changeTo(".man","before");   

        changeTo: function(element_target, where) {

            if (!element_target || !where) return;

            var self = this[0];
            var _copy = $savana(self).copy();
            $savana(element_target).insert(_copy, where);
            self.outerHTML = "";

            return this;

        },

        // Animate - $savana(selector).animate(effect, fn)
        // Insert class animations in element
        // -----------------------------------------------
        // Example of use:
        // $savana(selector).animate("fadeIn");  

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

            while (_len--) {
                $savana(this[_len]).addClass("animated").addClass(effect);
            }

            if ($savana.fn.isFunction(_callback)) fn.call(this, window);
            return this;

        },

        // Hide - $savana(selector).animate(effect, fn)
        // Hide HTML elements
        // -----------------------------------------------
        // Example of use:
        // $savana(selector).hide();

        hide: function() {
            var len = this.length;
            // Here we simply loop through our object (self) and set the css to display none. 
            //If you got more that 1 node from DOM selected with querySelectorAll, you would hide them all.
            while (len--) {
                this[len].style.display = 'none';
            }
            return this;
        },

        // Show - $savana(selector).animate(effect, fn)
        // Show elements
        // -----------------------------------------------
        // Example of use:
        // $savana(selector).show();

        show: function() {
            var len = this.length;
            while (len--) {
                this[len].style.display = 'block';
            }

            return this;
        },

        // Serialize - $savana(selector).serialize(isObj, getAllInpusOfForm, ruleClassValidation)
        // Capture the values and forms of field names automatically
        // ruleClassValidation - Get the input of information listed by class
        // getAllInpusOfForm - Catch all form fields (true)
        // getAllInpusOfForm - Catch all fields, but only checkbox and radio checked (false)
        // isObject - true or false. Return a object with name and values;
        // -----------------------------------------------------------------
        // Example of use:
        // $savana("form").serialize(true);

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

        // Find - $savana(selector).find(selector)
        // Search elements within elements
        // -----------------------------------------------
        // Example of use:
        // $savana("ul").find("li");

        find: function(selector) {

            if (!selector) return;
            return $savana(selector, this[0]);

        },

        // Child - $savana(selector).child(children)
        // Search the sons of elements
        // -----------------------------------------------
        // Example of use:
        // $savana("ul").child("li");

        child: function(selector) {

            if (!selector) return;
            return $savana(selector, this[0], true);

        },

        // Eq - $savana(selector).eq()
        // Search element by its position
        // -----------------------------------------------
        // Example of use:
        // $savana("ul > li").eq(1);

        eq: function(position) {

            position = position || 0;
            return $savana(this[position], "", false, position);

        },

        // First - $savana(selector).first()
        // Search element in the first position
        // -----------------------------------------------
        // Example of use:
        // $savana("ul > li").first()

        first: function() {
            return $savana(this[0], "", false, 0);
        },

        // Last - $savana(selector).first()
        // Search element in the last position
        // -----------------------------------------------
        // Example of use:
        // $savana("ul > li").last()

        last: function() {
            return $savana(this[this.length - 1], "", false, this.length - 1);
        },

        // isChecked - $savana(selector)isChecked()
        // Check if a checkbox or radio element is checked
        // -----------------------------------------------
        // Example of use:
        // $savana(selector).isChecked();

        isChecked: function() {

            if (this[0].checked) {
                return true;
            } else {
                return;
            }

        },

        // isSelected - $savana(selector).isSelected()
        // Checks whether a select was selected
        // -----------------------------------------------
        // Example of use:
        // $savana(selector).isSelected()

        isSelected: function() {

            if (!$savana(this[0]).isEmpty("val")) {
                return true;
            } else {
                return;
            }

        },

        // Size - $savana(selector).size()
        // Returns the size in width and height of an element
        // -----------------------------------------------
        // Example of use:
        // $savana(selector).size()

        size: function() {

            var width = this[0].offsetWidth;
            var height = this[0].offsetHeight;

            return {
                w: width,
                h: height
            };

        },

        // Position - $savana(selector).position()
        // Returns the X and Y of an element
        // -----------------------------------------------
        // Example of use:
        // $savana(selector).position();

        position: function() {

            var xPosition = 0;
            var yPosition = 0;
            var len = this.length;

            while (len--) {
                xPosition += (this[len].offsetLeft - this[len].scrollLeft + this[len].clientLeft);
                yPosition += (this[len].offsetTop - this[len].scrollTop + this[len].clientTop);
                this[len] = this[len].offsetParent;
            }

            return {
                x: xPosition,
                y: yPosition
            };

        },

        // isEmpty - $savana(selector).isEmpty(type)
        // Types - html, text, val
        // Verify that the contents of an element is empty
        // -----------------------------------------------
        // Example of use:
        // $savana(selector).isEmpty("html");

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

        // clearForm - $savana(selector).clearForm()
        // Reset form fields
        // -------------------------------------------------------------
        // Example of use:
        // $savana("form").clearForm();

        clearForm: function() {

            var _len = this.length;
            while (_len--) {
                this[_len].reset();
            }

            return this;

        },

        /* HELPERS */
        //----------------------------------------------
        // RemoveAllSpaces - savana.removeAllSpaces(str);
        // Remove the empty spaces of an occurrence
        // -----------------------------------------------
        // Example of use:
        // savana.removeAllSpaces("Hello word") => Helloword;

        removeAllSpaces: function(str) {
            if (!str) return;
            return str.replace(/\s/g, "");
        },

        // Config - savana.config(configs);
        // Config default of framework
        // -----------------------------------------
        // Example of use:
        //    savana.config({
        //       debug: false,
        //       alert: false,
        //    });

        config: function(configs) {
            config = savana.extend(config, configs);
            console.log(config)
        },

        // GetNumberOfString - savana.getNumberOfString(str);
        // Just pick numbers from one occurrence
        // -----------------------------------------------
        // Example of use:
        // savana.getNumberOfString("I have 10 dogs") => 10;

        getNumberOfString: function(str) {
            if (!str) return;
            return str.replace(/[^0-9]/g, '');
        },

        // Console - savana.debug(msg, type);  
        // -----------------------------------------------
        // Displays a message to the developer
        // -----------------------------------------------
        // Example of use:
        // savana.debug("Ola mundo", "log");
        // -----------------------------------------------
        // Types:
        // log, error, debug, info, warn

        debug: function(msg, type) {

            /*
                 It was such a relief not having to alert messages anymore, 
                 or using a DOM element to display them.
            */

            if (!msg || !config.debug)
                return;

            switch (type) {
                case "log":
                    console.log(msg); // Error msg
                    break;
                case "error":
                    console.error(msg); // Error msg
                    break;
                case "debug":
                    console.debug(msg); // Error msg (Color blue)
                    break;
                case "info":
                    console.info(msg); // Default msg
                    break;
                case "warn":
                    console.warn(msg); // Alert msg
                    break;
                default:
                    console.log(msg); // Default msg
                    break;
            }

            return null;

        },

        // toJSON - savana.toJSON(str)
        // String conversion JSON
        // Example of use:
        // savana.toJSON(str);

        toJSON: function(str) {
            if (!str) return;
            return JSON.parse(str);
        },

        // toJSON - savana.objToJSON(obj)
        // Convert object to JSON
        // Example of use:
        // savana.objToJSON(obj);

        objToJSON: function(obj) {
            if (!obj) return;
            return JSON.stringify(obj)
        },

        // toXML - savana.toXML(str)
        // String conversion to XML
        // Example of use:
        // savana.toXML(str);

        toXML: function(str) {
            if (!str) return;
            var parser = new DOMParser();
            return parser.parseFromString(str, "text/xml");
        },

        // Async - savana.async(configs)

        /*
            Asynchronous makes access to other files with promise. (Does not work in earlier versions of IE9)
            Example of use:
       
            var headers = 
            [
              {'Content-type':'application/x-www-form-urlencoded'} 
            ]; 

            var data = "name=Rafael&age=27";

            var config = {
                          'url': 'test.txt', // URL access
                          'method':'POST', // Shipping method (POST, GET, DELETE ...)
                          'headers': headers, // Headers Info
                          'data': data, // Parameters shipping
                          'type': 'string' // Response type - (json, XML, string)
            }

            var promise = savana.async(headers);

            promise.then(function(res){
                // All right with the request
                $savana.debug(e); // Return of object "XMLHttpRequest"
            }).catch(function(err){
                // There was an error
                $savana.debug(err, "error"); // Return of object "XMLHttpRequest"
            });

            // AVOIDING CALLBACK HELL - PROMISES
            -------------------------------------------------------------------------

            var promise = savana.async({
              'url': 'test.txt',
              'method':'POST',
              'headers': headers, 
              'data': data,
              'type': 'string'
            });

            promise.then(function(string){

                $savana.debug(string); // Return of object "XMLHttpRequest"

                // Avoiding callback hell

                return savana.async({
                  'url': 'test.json',
                  'method':'POST',
                  'headers': headers, 
                  'data': data,
                  'type': 'json'
                }); 
                
                // Avoiding callback hell

            }).then(function(json){  // Then this belongs to JSON response
                savana.debug(json);
            }).catch(function(err){
                savana.debug(err, "error"); // Return of object "XMLHttpRequest"
            });
        */

        async: function(configs) {
            if (!configs) return;
            return request(configs);
        },

        // Ajax - savana.ajax(config, callBackSucess, callBackError);  
        // ----------------------------------------------------------
        // Asynchronous makes access to other 
        // ----------------------------------------------------------
        // Example of use:
        /*
                var headers = [{'Content-type':'application/x-www-form-urlencoded'}]; // Not required
                var data = "name=Rafael&age=27"; // Not required
                var success, error;
                var config = 
                {
                  'url': '../data/test.php', // Access path
                  'method':'POST', // Method of shipment (POST, GET, DELETE ...)
                  'headers': headers, // Headers information
                  'data': data, // Parameters shipping
                  'type': 'string' // Response type - (json, xml, string)
                }

                savana.ajax(config, function(r){
                    console.log(r)
                }, function(e){
                    console.log(e)
                });
        */

        ajax: function(config, success, error) {

            if (!config) return;
            return sendRequest(config, success, error);

        },

        // URL - savana.url();  
        // -----------------------------------------------
        // Returns information url
        // -----------------------------------------------
        // Example of use:
        // savana.url(); => http://www.websitename.com.br
        // -----------------------------------------------
        // Types {hash: "", search: "?v5g4h", pathname: "/HELPERS/url.html", port: "", hostname: "localhost"…}
        // savana.url().hash;

        url: function() {
            return window.location;
        },

        // Now - savana.now();  
        // -----------------------------------------------
        // Returns the milliseconds date and current time
        // -----------------------------------------------
        // Example of use:
        // savana.now(); //1431650671177

        now: function() {
            var date = new Date();
            return date.getTime(); //1431650671177
        },

        // Today - savana.now();  
        // -----------------------------------------------
        // Returns the current date and time of day
        // -----------------------------------------------
        // Example of use:
        // savana.today("date"); => 15/12/2015
        // savana.today("time"); => 22:11:10

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

        // URL Current - savana.urlCurrent();  
        // -----------------------------------------------
        // Returns the current browser URL
        // -----------------------------------------------
        // Example of use:
        // savana.urlCurrent(); => http://www.websitename.com.br

        urlCurrent: function() {
            return window.location.href;
        },

        // Redirect - savana.redirect(url);  
        // -----------------------------------------------
        // Makes a redirect to another page
        // -----------------------------------------------
        // Example of use:
        // savana.redirect("http://www.meusite.com.br");

        redirect: function(url) {
            if (!url) return;
            window.location.href = url;
            return null;
        },

        // Params - savana.params(isRouter);  
        // -----------------------------------------------
        // Returns an array of the parameters divided by "/" in the URL
        // -----------------------------------------------
        // Example of use:
        // savana.params(); => ['view','edit'];

        params: function(isRouter) {
            isRouter = isRouter || true;
            var params = this.url().hash.split("/");
            if (isRouter) params.shift();
            return params;
        },

        // Have - savana.have(struct, compare, split);  
        // ---------------------------------------------------------
        // Checks for a specific value in an array or text
        // ---------------------------------------------------------
        // Example of use:
        // savana.have("ola mundo","mundo") => true;
        // savana.have("http://site.com/user/edit","user","/") => true;

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

                    if (struct.indexOf(compare) > -1) {
                        return true;
                    } else {
                        return false;
                    }

                }

            } else {
                return false;
            }

        },

        // isFunction - savana.isFunction(str)
        // Checks if the occurrence is a function
        // ---------------------------------------------------------
        // Example of use:
        // savana.isFunction(str); // true or false

        isFunction: function(str) {

            if (typeof str == "function") {
                return true;
            } else {
                return;
            }

        },

        // isObject - savana.isObject(str)
        // Checks whether the occurrence is an object
        // --------------------------------------
        // Example of use:
        // savana.isObject(str); // true or false

        isObject: function(str) {

            if (typeof str == "object") {
                return true;
            } else {
                return;
            }

        },

        // isString - savana.isString(str)
        // Checks if the occurrence is a string
        // --------------------------------------
        // Example of use:
        // savana.isString(str); // true or false

        isString: function(str) {

            if (typeof str == "string") {
                return true;
            } else {
                return;
            }

        },

        // isCPF - savana.isCPF(str)
        // Checks if the occurrence is a CPF
        // --------------------------------------
        // Example of use:
        // savana.isCPF(str); // true or false

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

        // formatMoney - savana.formatMoney(number, decimals, dec_point, thousands_sep)
        // Converts a number in currency format
        // --------------------------------------------------------------------------------
        // Example of use:
        // savana.formatMoney("2000.91", 2, ",", ".", "R$") // R$ 2.000,91

        formatMoney: function(number, decimals, dec_point, thousands_sep, symbol) {

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

        // rewrite - savana.rewrite(str)
        // Remove spaces and special characters in strings
        // ------------------------------------------------
        // Example of use:
        // savana.rewrite("Hello Word"); // hello-word

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

        // isEmail - savana.isEmail(email)
        // Checks whether an email address is valid
        // ------------------------------------------
        // Example of use:
        // savana.isEmail("myname@email.com"); // true

        isEmail: function(email) {

            if (!email) return;

            var filtro = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;

            if (filtro.test(email)) {

                return true;

            } else {

                return;

            }
        },

        // isNumber - savana.isNumber(email)
        // Checks if the occurrence is a number
        // ------------------------------------------
        // Example of use:
        // savana.isNumber(18); // true

        isNumber: function(number) {

            if (!isNaN(number)) {
                return true;
            } else {
                return;
            }

        },

        // isLetter - savana.isLetter(email)
        // Checks whether the occurrence are letters
        // ------------------------------------------
        // Example of use:
        // savana.isLetter("Helloword!")); // true

        isLetter: function(x) {

            var regex = /^[a-zA-Z\s]+$/;

            if (x.match(regex)) {
                return true;
            } else {
                return;
            }

        },

        // isURL - savana.isURL(str)
        // Checks if the occurrence is a URL
        // ------------------------------------------
        // Example of use:
        // savana.isURL(str);

        isURL: function(url) {

            if (!url) return;
            var regexp = /^((http|https|ftp|ftps):\/\/)?([a-z0-9\-]+\.)?[a-z0-9\-]+\.[a-z0-9]{2,4}(\.[a-z0-9]{2,4})?(\/.*)?$/i;
            return regexp.test(url);

        },

        // convertMoneyToFloat - savana.convertMoneyToFloat(str, symbol)
        // Monetary value of conversion to float
        // ------------------------------------------
        // Example of use:
        // savana.convertMoneyToFloat("R$ 152.50","R$"); => 15250

        convertMoneyToFloat: function(vl, symbol) {

            if (!vl || !symbol) return;
            return parseFloat(vl.replace(".", "").replace(",", ".").replace(symbol, "").replace(symbol + " ", ""));

        },

        // GetValueBill - savana.getValueBill(price, descount, symbol)
        // Discount amount of billet
        // ------------------------------------------
        // Example of use:
        // savana.getValueBill("R$ 250,00", 10, "R$"); => ["descount": "R$ 25,00", "porcent_descount": 10, "total": "R$ 225,00"]

        getValueBill: function(price, descount, symbol) {

            if (!price || !descount || !symbol) return;

            var valor_desc, vl = [];
            var product_price = savana.convertMoneyToFloat(price, symbol);

            if (product_price && descount) {

                valor_desc = (product_price * descount) / 100;
                product_price = product_price - valor_desc;
                product_price = savana.formatMoney(product_price, 2, ',', '.', 'R$');
                product_price = product_price;

                valor_desc = savana.formatMoney(valor_desc, 2, ',', '.', 'R$');
                valor_desc = valor_desc;

                vl.total = product_price;
                vl.descount = valor_desc;
                vl.porcent_descount = descount;

                return vl;
            }

        },

        // Installment - savana.installment(vl, parcmax, juros, valmin, symbol)
        // Take the value of the installment
        // ------------------------------------------
        // Example of use:
        // savana.installment("R$ 377,55", 10, 0, 50, "R$"); // Array [parc: "7x", vl: "R$ 53,94", juros: null]

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
                    val.vl = savana.formatMoney(item_price, 2, ',', '.', 'R$');
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
                    val.val = savana.formatMoney(item_price, 2, ',', '.', 'R$');
                    val.juros = parseFloat(juros) + "% a.m";

                    return val;

                } else {
                    return;
                }

            }

        },

        // Financing - savana.financing(vl, parcmax, juros, valmin, symbol)
        // Financing with interest
        // ------------------------------------------
        // Example of use:
        // savana.financing("R$ 500,00", 10, 2, 100, "R$")
        // [juros: "2% a.m", parc: "5x", vl: "R$ 106,08"]

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
                    val.vl = savana.formatMoney(item_price, 2, ',', '.', "R$");
                    val.juros = parseFloat(juros) + "% a.m";

                    return val;

                } else {
                    return;
                }

            } else {
                return;
            }

        },

        // upperAllFirstLetter - savana.upperAllFirstLetter(text)
        // Leave the first letter of each word capitalized
        // ----------------------------------------------------
        // Example of use:
        // savana.upperAllFirstLetter("hello world"); // Hello World

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

        // setCookie - savana.setCookie(name, value, times, path)
        // Record cookie in the browser
        // times -> In Hours
        // ----------------------------------------------------
        // Example of use:
        // savana.("savana", "teste", 1);

        setCookie: function(name, value, times, path) {

            if (!name) return;
            path = path || "/"
            var d = new Date();
            d.setTime(d.getTime() + (times * 1000 * 60 * 60));
            var expires = "expires=" + d.toGMTString();
            var path = "path=" + path;
            document.cookie = name + "=" + value + ";" + expires + ";" + path + ";";
            return true;

        },

        // getCookie - savana.getCookie(name)
        // Take the value of the cookie in the browser
        // ----------------------------------------------------
        // Example of use:
        // savana.getCookie("savana");

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

        // deleteCookie - savana.deleteCookie(name)
        // Delete the browser cookie
        // ----------------------------------------------------
        // Example of use:
        // savana.deleteCookie("savana");

        deleteCookie: function(name) {
            if (!name) return;
            savana.setCookie(name, "", -1);
            return "";
        },

        // Percent - savana.percent(oldValue, newValue)
        // Returns the percentage of a discount
        // ----------------------------------------------------
        // Example of use:
        // savana.percent("R$ 100,00","R$ 50,00", "R$"); // [discount: 50, discount_format: "50%"]

        percent: function(oldValue, newValue, symbol) {

            if (!oldValue || !newValue || !symbol) return;

            var x = [];
            newValue = savana.convertMoneyToFloat(newValue, symbol);
            oldValue = savana.convertMoneyToFloat(oldValue, symbol);
            x.discount = Math.abs(parseInt((((newValue / oldValue) * 100) - 100)));
            x.discount_format = x.discount + "%";
            return x;
        },

        // DiscountPercent - savana.percent(percent, value, symbol)
        // Calculating a percentage discount
        // ----------------------------------------------------
        // Example of use:
        // savana.discountPercent(10, "R$ 500,00", "R$")

        /*
        [
            discount_price: 50,
            discount_price_format: "R$ 50,00",
            length: 0,
            total_price_with_discount: 450,
            total_price_with_discount_format: "R$ 450,00",
            total_price_with_increase: 550,
            total_price_with_increase_format: "R$ 550,00"
        ]
        */

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

        // limitLetter - savana.limitLetter(str, first_qtd, max_qtd)
        // Limit letters in a string
        // ----------------------------------------------------
        // Example of use:
        // savana.limitLetter("Hello word", 0, 7); // Hello w...

        limitLetter: function(str, first_qtd, max_qtd) {

            if (!str || !max_qtd) return;

            var dot = "...";
            if (str.length > max_qtd) {
                return str.substring(first_qtd, max_qtd) + dot;
            } else {
                return str.substring(first_qtd, max_qtd);
            }

        },

        // limitWord - savana.limitWord(str, max_qtd)
        // Limiting words in a string
        // -------------------------------------------------------------
        // Example of use:
        // savana.limitWord("Hello word today now", 2); // Hello word...

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

        // dialogClose - savana.limitWord(str, max_qtd)
        // Limiting words in a string
        // -------------------------------------------------------------
        // Example of use:
        // savana.limitWord("Hello word today now", 2); // Hello word...

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

        // strUpper - savana.strUpper(str)
        // String conversion to uppercase
        // -------------------------------------------------------------
        // Example of use:
        // savana.strUpper("Hello world"); // HELLO WORLD

        strUpper: function(str) {
            if (!str) return;
            return str.toUpperCase();
        },

        // eventStop - eventStop(str)
        // Cancels the default method of an event
        // -------------------------------------------------------------
        // Example of use:
        // savana.eventStop();

        eventStop: function(e) {
            e.preventDefault ? e.preventDefault() : (e.returnValue = false);
        },

        // strLower - savana.limitWord(str)
        // String conversion to uppercase
        // -------------------------------------------------------------
        // Example of use:
        // savana.strLower("Hello world"); // hello world

        strLower: function(str) {
            if (!str) return;
            return str.toLowerCase();
        },

        // MessageBox - savana.messageBox(msg, type)
        // Alert box to the user
        // Types = error, success, warning, notice
        // -------------------------------------------------------------
        // Example of use:
        // savana.messageBox("Hello world today now", "sucess"); // <div class="alert-box sucess"><span>Hello world</span></div>

        messageBox: function(msg, type) {

            if (!msg || !type) return;
            return '<div class="alert-box ' + type + '"><span>' + msg + '</span></div>';

        },

        // loadPreloader - savana.loadPreloader();
        // Load loader page
        // ------------------------------------------
        // Example of use
        // savana.loadPreloader();

        loadPreloader: function() {

            var _html = '<div class="ht-box-loader">' +
                '<div class="three-quarters-loader">' +
                'Loading…' +
                '</div>' +
                '</div><div class="ht-popup-bg"></div>';

            $savana("body").push(_html, "after");
            return true;

        },

        // showPreloader - savana.showPreloader()
        // Open loader
        // ------------------------------------------
        // Example of use
        // savana.showPreloader();

        showPreloader: function() {
            $savana(".ht-box-loader, .ht-popup-bg").show();
        },

        // hidePreloader - savana.hidePreloader()
        // Close loader
        // ------------------------------------------
        // Example of use
        // savana.hidePreloader();

        hidePreloader: function() {
            $savana(".ht-box-loader, .ht-popup-bg").hide();
        },

        // loaderAlert - savana.loaderAlert()
        // Loads the custom alert
        // -------------------------------------------------------------
        // Example of use:
        // savana.loaderAlert();

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

        // alert - savana.alert(msg)
        // Opens the custom alert
        // -------------------------------------------------------------
        // Example of use:
        // savana.alert("Hello world");

        alert: function(msg) {

            if (!msg || !config.alert) return;

            $savana(".ht-popup-alert .ht-body.ht-popup-body").content("html", msg);
            $savana(".ht-popup-alert, .ht-popup-bg").show();
            $savana(".ht-popup-alert, .ht-popup-bg").animate("fadeIn");
            savana.dialogClose();

        },

        // Confirm - savana.confirm(msg, fn)
        // Open a box confirmation to the User
        // -------------------------------------------------------------
        // Example of use:
        // savana.confirm("Hello word today now", function(resp){
        //    if(resp){
        //      // Yes
        //    }else{
        //      // Not
        //    }
        // }); // Hello word...

        confirm: function(msg, fn) {

            if (!msg) return;

            $savana(".ht-popup-confirm .ht-body.ht-popup-body").content("html", msg);
            $savana(".ht-popup-confirm, .ht-popup-bg").show();
            $savana(".ht-popup-confirm, .ht-popup-bg").animate("fadeIn");
            return savana.dialogClose(fn);

        },

        // loadConfirm - savana.loadConfirm()
        // Load the box confirmation
        // -------------------------------------------------------------
        // Example of use:
        // savana.loadConfirm()

        // Dialog confirm
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

        // Extend - savana.extend(obj, props)
        // Is the object inherit characteristics from another object
        // -------------------------------------------------------------
        // Example of use:
        // savana.extend({...}, {...});

        extend: function(obj, props) {

            if (!obj || !props) return obj;

            for (var prop in props) {
                if (props.hasOwnProperty(prop)) {
                    obj[prop] = props[prop];
                }
            }
            return obj;
        },

        // CountObj - savana.countObj(obj)
        // Returns the number of objects
        // -------------------------------------------------------------
        // Example of use:
        // savana.countObj(obj); // 3

        countObj: function(obj) {
            return Object.keys(obj).length;
        },

        // Sort_by
        // Sorting objects
        sort_by: function(field, reverse, primer) {

            var key = primer ?
                function(x) {
                    return primer(x[field]);
                } :
                function(x) {
                    return x[field];
                };

            reverse = !reverse ? 1 : -1;

            return function(a, b) {
                return a = key(a), b = key(b), reverse * ((a > b) - (b > a));
            };
        },

        // endTime - savana.endTime(time)
        // Internal use: Returns the end of charging time
        // -------------------------------------------------------------
        // Example of use:
        // savana.endTime(time);

        endTime: function(time) {

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

        // Selector
        // Domestic helper for selector

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
                return (!$savana.fn.isObject(params)) ? document.querySelectorAll(params) : [params];
            }

        },

        // getParams - savana.getParams(name, href)
        // Grab the URL parameter
        // href -> If empty take the current url of the page
        // -------------------------------------------------------------
        // Example of use:
        // savana.getParams("og");

        getParams: function(name, href) {
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

        // isIE - savana.isIE();
        // Checks whether the IE browser
        // -------------------------------------------------------------
        // Example of use:
        // if(savana.isIE()) { true } else { false }

        isIE: function() {
            return isIE();
        },

        // whatBrowser - savana.whatBrowser();
        // Verifiy what is the browser
        // -------------------------------------------------------------
        // Example of use:
        // savana.whatBrowser(); // IE12, IE11, IE10, IE9, IE8, IE7, Chrome, Firefox, Safari and Opera

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

        // ieObjectSetPrototypeOf - ieObjectSetPrototypeOf(obj, proto);
        // -------------------------------------------------------------
        // Example of use:
        // var modalTest = savana.ieObjectSetPrototypeOf(obj, proto);

        ieObjectSetPrototypeOf: function(obj, proto) {

            obj.__proto__ = proto;
            return obj;

        },     

        // ElementExist - savana.elementExist(selector);
        // Checks whether an element exists in the HTML
        // -------------------------------------------------------------
        // Example of use:
        // savana.elementExist('div.test')

        elementExist: function(element) {
            if (!element) return;
            if ($savana(element).length) {
                return true
            } else {
                return false;
            }
        },

        // whatDevice - savana.whatDevice();
        // Show o device of user
        // -------------------------------------------------------------
        // Example of use:
        // savana.whatDevice(); // desktop, tablet, device

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

        // CLIENT SIDE
        //-----------------------------------------------

        // toJSON - savana.toJSON(str)
        //   String conversion JSON
        //   Example of use:
        //   savana.toJSON(str);

        View: function(configs) {

            if (!configs) return;
            return configs;

        },

        // toJSON - savana.toJSON(str)
        //   String conversion JSON
        //   Example of use:
        //   savana.toJSON(str);

        cssHelpers: function(scope, model) {
            $savana(scope.parent).find(".sjs-total-rows").content("text", savana.countObj(model))
        },

        render: function(scope, html, model) {

            if (!scope && html) return;

            if (!scope.child) {
                $savana(scope.parent).content("html", html);
            } else {
                $savana(scope.parent + " " + scope.child).content("html", html);
            }

            // CSS Helpers
            savana.cssHelpers(scope, model);

        },

        // toJSON - savana.toJSON(str)
        //   String conversion JSON
        //   Example of use:
        //   savana.toJSON(str);

        Router: function(configs) {

            if (!configs) return;
            return configs;

        },

        isRouter: function(router) {

            if (!router) return;

            var _router = "#" + router.name;
            var _hash = savana.url().hash;

            if (savana.have(_hash, _router, "/")) {
                $savana(".sjs-router").hide();
                $savana(".sjs-router.sjs-" + router.name).show();
                return true;
            } else {
                return;
            }

        },

        // toJSON - savana.toJSON(str)
        //   String conversion JSON
        //   Example of use:
        //   savana.toJSON(str);

        loadRouter: function(configs, router, fn) {

            if (!configs || !router) return;

            var _callback = fn || false;
            var $this = this;

            setTimeout(function() {

                if (router.async && savana.isRouter(router) && configs.ajax !== false) {

                    // Quando a pagina é carregada e tem uma requisição ajax de uma pagina externa

                    var _promise = $this.async({
                        'url': router.async,
                        'method': 'GET',
                        'type': 'string'
                    });
                    _promise.then(function(res) {
                        $savana("body").content("html", res);

                        // view.init(view, json);

                        if (savana.isFunction(_callback)) {
                            fn(savana.params(true));
                        }

                        savana.isRouter(router);

                    });

                } else {

                    if (savana.isRouter(router)) {
                        if (savana.isFunction(_callback)) {
                            fn(savana.params(true));
                        }
                    }

                }

                if (router.linkid) {

                    $savana("body").delegate("click", router.linkid, function(e) {

                        console.log(self)

                        // Quando um link de router for clicado, para uma single page

                        setTimeout(function() {

                            if (router.async && savana.isRouter(router) && configs.ajax !== false) {

                                // Quando o link da rota é clicado a exite uma requisição ajax de uma pagina externa

                                var _promise = $this.async({
                                    'url': router.async,
                                    'method': 'GET',
                                    'type': 'string'
                                });

                                _promise.then(function(res) {

                                    $savana("body").content("html", res);
                                    // view.buildHTML(view, json.model); //Insere o conteudo 
                                    // view.init(view, json); // Recarrega os metodos da view

                                    if (savana.isFunction(_callback)) {
                                        fn(savana.params(true));
                                    }

                                    savana.isRouter(router);

                                });

                            } else {

                                // Não existe uma requisição ajax de pagina externa
                                // Não recarrega a view.init, para evitar duplicidade de metodos

                                if (savana.isRouter(router)) {
                                    //view.buildHTML(view, json.model);

                                    if (savana.isFunction(_callback))
                                        fn(savana.params(true));

                                }

                            }

                        }, 50);

                    });
                }

                if (savana.isFunction(configs.controller))
                    configs.controller();

            }, 50);

        },

        // toJSON - savana.toJSON(str)
        //   String conversion JSON
        //   Example of use:
        //   savana.toJSON(str);

        Model: function(configs) {

            if (!configs) return;
            return configs;

        },

        output: function(selector) {

            $savana(".sjs-output").on("keyup", function(e) {

                var $this = $savana(self);
                var val = $savana(self).content("val");

                if ($savana("." + $this.attr("rel"))[0].nodeName == "INPUT" || $savana("." + $this.attr("rel"))[0].nodeName == "TEXTAREA") {
                    $savana("." + $savana(self).attr("rel")).content("val", val);
                } else {
                    $savana("." + $savana(self).attr("rel")).content("text", val);
                }

            });

            return true;

        },

        modelInsert: function(scope, model, new_obj, fn) {

            if (!model || !scope) return;

            var _callback = fn || false;
            model.push(new_obj);
            model.length = savana.countObj(model);

            if (savana.isFunction(_callback))
                fn(model);

            return null;

        },

        modelDelete: function(model, key, val) {

            var len = model.length;
            var mCache = [];
            var count = 0;

            for (var c = 0; c < len; c++) {
                if (model[c][key] == val) {
                    continue;
                } else {
                    mCache[count++] = model[c];
                }
            }

            return mCache;

        },

        modelUpdate: function(scope, model, new_obj, key, fn) {

            if (!model || !scope || !new_obj || !key) return;
            var _callback = fn || false;

            var model_upt = savana.modelDelete(model, key, new_obj[key]);
            model_upt.push(new_obj);
            model_upt.length = savana.countObj(model_upt);

            if (savana.isFunction(_callback))
                fn(model_upt);

            return true;

        },

        modelOrderBy: function(model, order_by, rule) {

            if (!model || !order_by || !rule) return;

            var new_order_model;

            switch (savana.strLower(rule)) {

                case "asc":
                    new_order_model = model.sort(savana.sort_by(order_by, false));
                    break;

                case "desc":
                    new_order_model = model.sort(savana.sort_by(order_by, true));
                    break;

                default:
                    new_order_model = model.sort(savana.sort_by(order_by, false));
                    break;

            }

            return new_order_model;

        },

        modelSearch: function(element, model, key, order_by, rule) {

            if (!element || !model || !key) return;

            var _search = element.content("val");

            if (_search.length) {

                model = model.filter(function(model) {
                    return savana.have(savana.strUpper(model[key]), savana.strUpper(_search));
                });

            } else {

                model = model;

            }

            if (order_by && rule) {
                model = savana.modelOrderBy(model, order_by, rule);
            }

            model.length = savana.countObj(model);
            return model;

        },

        modelcache: function(obj) {

            if (!obj) return;
            return {
                model: obj
            };

        },

        searchLineJSON: function(json, key, value) {

            if (!value || !json || !key) return;
            var model = json.filter(function(json) {
                return savana.have(savana.strUpper(json[key]), savana.strUpper(value));
            });
            return model;

        },

        setValuesInForm: function(form_target, json, key, value) {

            if (!form_target || !json || !key) return;

            var namesform = $savana(form_target).serialize(true, true);
            var search = savana.searchLineJSON(json, key, value)[0];

            for (var name in namesform) {

                if ($savana(form_target + " input[type=checkbox][name=" + name + "]").length) {
                    if (search[name]) {
                        $savana(form_target + " input[type=checkbox][name=" + name + "]")[0].checked = true;
                    } else {
                        $savana(form_target + " input[type=checkbox][name=" + name + "]")[0].checked = false;
                    }
                    continue;
                }
                if ($savana(form_target + " input[type=radio][name=" + name + "]").length) {
                    if (search[name]) {
                        $savana(form_target + " input[type=checkbox][name=" + name + "][value=" + search[name] + "]")[0].checked = true;
                    }
                    continue;
                }
                if ($savana(form_target + " input[name=" + name + "]").length) {
                    $savana(form_target + " input[name=" + name + "]").content("val", search[name]);
                    continue;
                }
                if ($savana(form_target + " textarea[name=" + name + "]").length) {
                    $savana(form_target + " textarea[name=" + name + "]").content("val", search[name]);
                    continue;
                }
                if ($savana(form_target + " select[name=" + name + "]").length) {
                    $savana(form_target + " select[name=" + name + "]").content("val", search[name]);
                    continue;
                }
            }

            return true;

        }

    };

    var savana = new Savana();

    // Assign our $savana object to global window object.
    if (!window.$savana) {
        window.$savana = $savana;
        window.savana = savana;
    }

    if (!window.SavanaObject)
        window.SavanaObject = ObjectJS();

})();