/*
 * Savana JS
 * Created By Rafael Cruz
 * Contact: rafaeldriveme@gmail.com
 * Version: Beta 0.0.1
 * Release: 05/12/2015
 * Framework JavaScript
 */

/*
 * Sumary
 *---------------------
 * 1 ---- DOM - $savana(selector).fn();
 *
 * 1.1 -- Done ........................................ Iniciador do Framework
 * 1.2 -- onLoad ...................................... Iniciador do Framework depois do onload do window
 * 1.3 -- on .......................................... Eventos (click, hover, change, keyup, etc)
 * 1.4 -- content ..................................... Insire e captura texto, html ou valures de um elemento HTML
 * 1.5 -- each ........................................ Literar um conjunto de elemento do HTML
 * 1.6 -- push ........................................ Insere elementos dentro de outros elementos
 * 1.7 -- destroy ..................................... Remove elementos do HTML
 * 1.8 -- addClass .................................... Adiciona uma classe no elemento
 * 1.9 -- toggleClass ................................. Adiciona ou retira uma classe do elemento se ela existir ou não
 * 1.10 - hasClass .................................... Adiciona ou retira uma classe nos elementos alvo
 * 1.11 - removeClass ................................. Retira uma classe nos elementos alvo
 * 1.12 - attr ........................................ Adiciona atributos em elementos HTML
 * 1.13 - removeAttr .................................. Remover atributos em elementos HTML
 * 1.14 - styles ...................................... Adiciona estilos CSS nos elementos
 * 1.15 - parent ...................................... Encontra o pai de um elemento
 * 1.16 - parents ..................................... Encontra o pai de um elemento
 * 1.17 - insert ...................................... Insere conteudo HTML antes ou apos elementos setados
 * 1.18 - wrap ........................................ Insere um element envolda de outro elemento
 * 1.19 - exchange .................................... Troca um element HTML por outro elemento HTML
 * 1.20 - copy ........................................ Copia um elemento do HTML
 * 1.21 - changeTo .................................... Mudar um elemento HTML de lugar
 * 1.22 - animate ..................................... Insere classes de animações no elemento - Plugin CSS by Daniel Eden
 * 1.23 - hide ........................................ Esconder elementos
 * 1.24 - show ........................................ Mostrar elemntos
 * 1.25 - serialize ................................... Pega os valores e nomes de campos de formularios automaticamenete
 * 1.26 - find ........................................ Buscar elementos dentro de elementos
 * 1.27 - child ....................................... Buscar os filhos dos elementos
 * 1.28 - eq .......................................... Buscar elemento pela sua posição
 * 1.29 - first ....................................... Buscar elemento na primeira posição
 * 1.30 - last ........................................ Buscar elemento na ultima posição
 * 1.31 - isChecked ................................... Verifica se um elemento checkbox ou radio esta checado
 * 1.32 - isSelected .................................. Verifica se um elemento checkbox ou radio esta selecionado
 * 1.33 - size ........................................ Retorna o tamanho de largura e altura de um elemento
 * 1.34 - position .................................... Retorna o X e Y de um elemento
 * 1.35 - isEmpty ..................................... Verifica se o conteudo de um elemnto esta vazio
 * 1.36 - delegate .................................... Eventos (click, hover, change, keyup, etc) dinamicos
 
 * 2 ---- HELPERS - savana.fn();
 *
 * 2.1 --- removeAllSpaces ............................ Remove os espaços vazios de uma ocorrência
 * 2.2 --- getNumberOfString .......................... Pegar apenas numeros de uma ocorrência
 * 2.3 --- debug ...................................... Mostra uma mensagem para o desenvolvedor 
 * 2.4 --- toJSON ..................................... Conversão de string para JSON
 * 2.5 --- toXML ...................................... Conversão de string para XML
 * 2.6 --- Async ...................................... Faz acessos Asynchronous a outros arquivos
 * 2.7 --- URL ........................................ Retorna a url corrente do navegador
 * 2.8 --- params ..................................... Retorna um array com os parametros divididos por / na url
 * 2.9 --- have ....................................... Verifica se existe um valor especifico em um array ou texto
 * 2.10 -- isFunction ................................. Verifica se a ocorrência é uma função
 * 2.11 -- isObject ................................... Verifica se a ocorrência é um objeto
 * 2.12 -- isString ................................... Verifica se a ocorrência é uma string
 * 2.13 -- isCPF ...................................... Verifica se a ocorrência é uma CPF
 * 2.14 -- formatMoney ................................ Converte um numero em formato monetario
 * 2.15 -- rewrite .................................... Retira espaços e caracteres especiais de strings
 * 2.16 -- isEmail .................................... Verifica se um endereço de email é valido
 * 2.17 -- isNumber ................................... Verifica se a ocorrencia é um numero
 * 2.18 -- isLetter ................................... Verifica se a ocorrencia são letras
 * 2.19 -- isURL ...................................... Verifica se a acorrencia é uma URL
 * 2.20 -- convertMoneyToFloat ........................ Conversão de valor monetário em float
 * 2.21 -- getValueBill ............................... Conversão de string para JSON
 * 2.22 -- installment ................................ Pegar o valor do parcelamento
 * 2.23 -- financing .................................. Financiamento com juros
 * 2.24 -- upperAllFirstLetter ........................ Deixar a Primeira letra de cada palavra em maiusculo
 * 2.25 -- setCookie .................................. Gravar cookie no navegador
 * 2.26 -- getCookie .................................. Pegar o valor do cookie no navegador
 * 2.27 -- deleteCookie ............................... Deletar o cookie do navegador
 * 2.28 -- dateCurrent ................................ Pegar a data corrente do PC
 * 2.29 -- percent .................................... Retorna a porcentagem de um desconto
 * 2.30 -- discountPercent ............................ Calcular um desconto de porcentagem
 * 2.31 -- limitLetter ................................ Limitar letras em uma string
 * 2.32 -- limitWord .................................. Limitar palavras em uma string
 * 2.33 -- dialogClose ................................ Limitar palavras em uma string
 * 2.34 -- strUpper ................................... Conversão de strings para maiusculas
 * 2.35 -- strLower ................................... Conversão de strings para minusculas
 * 2.36 -- messageBox ................................. Box de alerta para o usuario
 * 2.37 -- loadPreloader .............................. Carrega o loader
 * 2.38 -- showPreloader .............................. Abre o loader
 * 2.39 -- hidePreloader .............................. Fechar o loader
 * 2.40 -- loadAlert .................................. Carrega o alerta customizado
 * 2.41 -- alert ...................................... Abre o alerta customizado
 * 2.42 -- confirm .................................... Abre um box de confirmação para o usuario
 * 2.43 -- loadConfirm ................................ Carregar o box de confirmação
 * 2.44 -- extend ..................................... Faz o objeto herdar caracteriscas de outro objeto
 * 2.45 -- time ....................................... Retorna a quantidade de segundos deste de 1970
 * 2.46 -- getParams .................................. Retorna um valor de parametro na url
 * 2.47 -- urlCurrent ................................. Retorna a url corrent da página
 * 2.48 -- redirect ................................... Faz o redirecionamento para uma outra página
 * 2.49 -- now ........................................ Pegar milisegundos
 * 2.50 -- today ...................................... Pegar data e hora atual
 * 2.51 -- returnTo ................................... Faz uma rolagem ancora para um elemneto setado
 */

(function() {

    var isIE = function() {
        var myNav = navigator.userAgent.toLowerCase();
        return (myNav.indexOf('msie') != -1) ? true : false;
    }

    var $savana = function(params, content, isChild, position) {
        return savana.getElement(params, content, isChild, position);
    };

    var Savana = function() {

        // Assign our $savana object to global window object.
        if (!window.$savana) {
            window.$savana = $savana;
        }

    };

    $savana.fn = Savana.prototype = {

        /* DOM */
        //----------------------------------------------

        getElement: function(params, content, isChild, position) {

            var selector = $savana.fn.selector(params, content, isChild);
            var len = (selector.length === undefined) ? 1 : selector.length;

            if (position !== undefined) {
                len = (position >= 0) ? position : len;
                len = (position === 0) ? 1 : len;
            }

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
        },

        // Done - $savana(document).done(function(event){});
        // Iniciador do Framework
        // -------------------------------------------------
        // Exemplo de utilização:
        // $savana(document).done(function(event) {
        //   // Your code here ...   
        // });

        done: function(fn) {     
              if (!isIE()){
                this[0].addEventListener('DOMContentLoaded', function(events) {
                    fn(events);
                }, false);
              }else{
                window.setTimeout(function(){
                    fn(event);
                },0);
              }
        },

        // Onload - $savana(document).done(function(event){});
        // Iniciador do Framework depois do onload do window
        // --------------------------------------------------
        // Exemplo de utilização:
        // $savana(window).onload(function(e){
        //   // Yout code here
        // });

        onload: function(fn) {
            window.onload = function(events) {
                fn(events);
            };
        },

        // On - $savana(selector).on(event, function(event){});
        // Chamar eventos
        // Events (click, hover, change, keyup, etc)
        // ---------------------------------------------------
        // Exemplo de utilização:
        // $savana("a").on("click", function(e){
        //  console.log($this.content("text")); // Reference to $savana("a")
        // });

        on: function(evt, fn) {

            if (!evt) return;
            var _callback = fn || false; // Check if exist a callback
            var _len = this.length;
            var el = this;

            for (var count = 0; count < _len; count++) {
                this[count].addEventListener(evt, function(events) {
                    if (savana.isFunction(_callback)) {    
                        window._this = this;
                        fn(events);
                    }
                }, false);
            }

            return this;

        },

        // Delegate - $savana(selector_parent).delegate(event, selector, function(event){});
        // Chamar eventos dinamicos
        // Events (click, hover, change, keyup, etc)
        // ---------------------------------------------------
        // Exemplo de utilização:
        // $savana("#menu").delegate("click", "li" function(e){
        //  console.log($this.content("text")); // Reference to $savana("a")
        // });

        delegate: function(eventName, selector, fn) {

            var element = document.querySelector(this.selector);

            if(!isIE()){

                element.addEventListener(eventName, function(event) {
                    var possibleTargets = element.querySelectorAll(selector);
                    var target = event.target;

                    for (var i = 0, l = possibleTargets.length; i < l; i++) {
                        var el = target;
                        var p = possibleTargets[i];

                        while(el && el !== element) {
                            if (el === p) {
                                window._this = el;
                                fn.call(event);
                                return this;
                            }

                            el = el.parentNode;
                        }
                    }
                });

            }else{

                element.attachEvent("on"+eventName, function(event) {
                    var possibleTargets = element.querySelectorAll(selector);
                    var target = event.target;

                    for (var i = 0, l = possibleTargets.length; i < l; i++) {

                        var el = target;
                        var p = possibleTargets[i];

                        while(el !== element) {

                            alert(el + "===" + element)
                            
                            if (el === p) {
                                alert(1)
                                window._this = el;
                                fn.call(event);
                                return this;
                            }

                            el = el.parentNode;
                        }
                    }
                });

            }

        },

        // Content - $savana(selector).text(type, value);
        // Insire e captura texto, html ou valures de um elemento HTML 
        // Types: html, text e val
        // -------------------------------------------------------
        // Exemplo de utilização para inserir um novo texto:
        // $savana("li").text("text", "New text");
        // -------------------------------------------------------
        // Exemplo de utilização para pegar um texto de um elemento:
        // $savana("li").text(text);

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
                            content = this[_len].textContent;
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
        // Literar um conjunto de elemento do HTML 
        // -----------------------------------------
        // Exemplo de utilização:
        // $savana("ul li").each("function(e){
        //     $this.content("text")
        // });

        each: function(fn) {

            if (!fn) return;
            var _len = this.length;

            for (var count = 0; count < _len; count++) {
                window._this = this[count];
                fn(window);
            }

            return this;

        },

        // Push - $savana(selector).push(content_html, where, callback);
        // Insere elementos dentro de outros elementos
        // -----------------------------------------
        // Exemplo de utilização:
        // $savana("ul li").push("<li>Nova LI</li>");
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
                fn();
            }

            return this;

        },

        // Destroy - $savana(selector).destroy(callback);
        // Remove elementos do HTML
        // -----------------------------------------
        // Exemplo de utilização:
        // $savana("ul li:nth-child(1)").destroy();

        destroy: function(fn) {

            var _callback = fn || false;
            var _len = this.length;

            while (_len--) {
                this[_len].parentNode.removeChild(this[_len]);
            }

            if ($savana.fn.isFunction(_callback)) fn();

            return this;

        },

        // AddClass - $savana(selector).addClass(classname);
        // Adiciona uma classe no elemento
        // -----------------------------------------
        // Exemplo de utilização:
        // $savana("ul#list li").addClass("teste")

        addClass: function(className) {

            if (!className) return;
            var _len = this.length;
            var space;

            if (_len) {
                for (var i = 0; i < _len; i++) {

                    if(!savana.have(this[i].className, className)){
                        this[i].className = this[i].className + " " + className;
                        if(!isIE()) this[i].className = this[i].className.trim();
                    }
           
                }
            }

            return this;

        },

        // Toggle Class - $savana(selector).toggleClass(classname);
        // Adiciona ou retira uma classe do elemento se ela existir ou não
        // ---------------------------------------------------------------
        // Exemplo de utilização:
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
        // Adiciona ou retira uma classe nos elementos alvo
        // -------------------------------------------------
        // Exemplo de utilização:
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
        // Remove classes no elemento
        // -------------------------------------------------------
        // Exemplo de utilização:
        // $savana("ul#list li:nth-child(1)").removeClass("ul:nth-child(1)","lista-nova");       

        removeClass: function(className) {

            if (!className) return;
            var _len = this.length;

            if (_len) {
                for (var i = 0; i < _len; i++) {
                    if (this[i].classList)
                        this[i].classList.remove(className);
                }
            }

            return this;

        },

        // Attr - $savana(selector).attr(attribute);
        // Adiciona atributos em elementos HTML
        // -------------------------------------------------
        // Exemplo de utilização:
        // $savana("ul#list li:nth-child(1)").attr("class");

        attr: function(attribute, value) {

            if (!attribute) return;
            var _len = this.length;

            while (_len--) {

                if (value) {
                    this[_len].setAttribute(attribute, value);
                    return this;
                } else {
                    return this[_len].getAttribute(attribute);
                }
            }

        },

        // Remove Attr - $savana(selector).removeAttr(attribute);
        // Remover atributos em elementos HTML
        // -------------------------------------------------------
        // Exemplo de utilização:
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
        // Adiciona estilos CSS nos elementos
        // -----------------------------------------
        // Exemplo de utilização:
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
        // Encontra o pai de um elemnto
        // -----------------------------------------
        // Exemplo de utilização:
        // $savana("ul > li").parent();          

        parent: function() {

            return $savana(this[0].parentNode);

        },

        // Parents - $savana(selector).parents(selector_parent);
        // Encontra o pai de um elemento setado
        // ----------------------------------------------------
        // Exemplo de utilização:
        // $savana("ul>li").parents(".all");

        parents: function(selector_parent) {

            if (!selector_parent) return;

            var _element = this[0];
            var _element_parent;

            while (_element && _element.parentNode) {
                _element = _element.parentNode;
                _element_parent = $savana(selector_parent);
            }

            return _element_parent;
        },

        // Insert - $savana(selector).insert(content, where);
        // Insere conteudo HTML antes ou apos elementos setados
        // ----------------------------------------------------
        // Exemplo de utilização:
        // $savana("ul>li").insert("<div class='new-li'>Nova LI</div>", "before");        

        insert: function(new_element, where) {

            if (!new_element) return;

            var _where = where || "before";
            var _len = this.length;

            while (_len--) {

                if (_where == "before") {
                    this[_len].insertAdjacentHTML('beforeBegin', new_element);
                } else if (_where == "after") {
                    this[_len].insertAdjacentHTML('afterEnd', new_element);
                }

            }

            return this;

        },

        // Wrap - $savana(selector).wrap(start, end);
        // Insere um element envolda de outro elemento
        // ------------------------------------------------------------
        // Exemplo de utilização:
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
        // Troca um element HTML por outro elemento HTML
        // ----------------------------------------------------
        // Exemplo de utilização:
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
        // Copia um elemento do HTML
        // -------------------------------
        // Exemplo de utilização:
        // $savana("ul#list").copy()    

        copy: function() {

            return this[0].cloneNode(true).outerHTML;

        },

        // changeTo - $savana(selector).place(target, where); 
        // Mudar um elemento HTML de lugar
        // ----------------------------------------------
        // Exemplo de utilização:
        // $savana("ul#list").changeTo(".man","before");   

        changeTo: function(element_target, where) {

            if (!element_target || !where) return;

            var _this = this[0];
            var _copy = $savana(_this).copy();
            $savana(element_target).insert(_copy, where);
            _this.outerHTML = "";

            return this;

        },

        // Animate - $savana(selector).animate(effect, fn)
        // Insere classes de animações no elemento
        // -----------------------------------------------
        // Exemplo de utilização:
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

            if ($savana.fn.isFunction(_callback)) fn();
            return this;

        },

        // Hide - $savana(selector).animate(effect, fn)
        // Esconder elementos
        // -----------------------------------------------
        // Exemplo de utilização:
        // $savana(selector).hide();

        hide: function() {
            var len = this.length;
            // Here we simply loop through our object (_this) and set the css to display none. 
            //If you got more that 1 node from DOM selected with querySelectorAll, you would hide them all.
            while (len--) {
                this[len].style.display = 'none';
            }
            return this;
        },

        // Show - $savana(selector).animate(effect, fn)
        // Mostrar elementos
        // -----------------------------------------------
        // Exemplo de utilização:
        // $savana(selector).show();

        show: function() {
            var len = this.length;
            while (len--) {
                this[len].style.display = 'block';
            }

            return this;
        },

        // Serialize - $savana(selector).serialize(isObject, ruleClassValidation)
        // Pega os valores e nomes de campos de formularios automaticamenete
        // Pega apenas campos com classes setadas.
        // ruleClassValidation se estiver vazio pegara todos os campos
        // getAllInpusOfForm - Pega todos campos do formulario (true)
        // getAllInpusOfForm - Pega todos campos, mas apenas checkbox e radio checados (false)
        // isObject - true or false;
        // -----------------------------------------------------------------
        // Exemplo de utilização:
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
        // Buscar elementos dentro de elementos
        // -----------------------------------------------
        // Exemplo de utilização:
        // $savana("ul").find("li");

        find: function(selector) {

            if (!selector) return;
            return savana.getElement(selector, this[0]);

        },

        // Child - $savana(selector).child(children)
        // Buscar os filhos dos elementos
        // -----------------------------------------------
        // Exemplo de utilização:
        // $savana("ul").child("li");

        child: function(selector) {

            if (!selector) return;
            return savana.getElement(selector, this[0], true);

        },

        // Eq - $savana(selector).eq()
        // Buscar elemento pela sua posição
        // -----------------------------------------------
        // Exemplo de utilização:
        // $savana("ul > li").eq();

        eq: function(position) {

            position = position || 0;
            return $savana(this[position], "", false, position);

        },

        // First - $savana(selector).first()
        // Buscar elemento na primeira posição
        // -----------------------------------------------
        // Exemplo de utilização:
        // $savana("ul > li").first()

        first: function() {
            return $savana(this[0], "", false, 0);
        },

        // Last - $savana(selector).first()
        // Buscar elemento na ultima posição
        // -----------------------------------------------
        // Exemplo de utilização:
        // $savana("ul > li").last()

        last: function() {
            return $savana(this[this.length - 1], "", false, this.length - 1);
        },

        // isChecked - $savana(selector)isChecked()
        // Verifica se um elemento checkbox ou radio esta checado
        // -----------------------------------------------
        // Exemplo de utilização:
        // $savana(selector).isChecked();

        isChecked: function() {

            if (this[0].checked) {
                return true;
            } else {
                return;
            }

        },

        // isSelected - $savana(selector).isSelected()
        // Verificar se um input radio ou checkbox esta clicado
        // -----------------------------------------------
        // Exemplo de utilização:
        // $savana(selector).isSelected()

        isSelected: function() {

            if (this[0].selected) {
                return true;
            } else {
                return;
            }

        },

        // Size - $savana(selector).size()
        // Retorna o tamanho de largura e altura de um elemento
        // -----------------------------------------------
        // Exemplo de utilização:
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
        // Retorna o X e Y de um elemento
        // -----------------------------------------------
        // Exemplo de utilização:
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
        // Verifica se o conteudo de um elemnto esta vazio
        // -----------------------------------------------
        // Exemplo de utilização:
        // $savana(selector).animate("fadeIn");

        isEmpty: function(type) {

            if (!type) return;

            if (savana.removeAllSpaces($savana(this[0]).content(type)).length) {
                return;
            } else {
                return true;
            }

        },

        // clearForm - $savana(selector).clearForm()
        // Reseta campos do formulario
        // -------------------------------------------------------------
        // Exemplo de utilização:
        // $savana("form input").clearForm();

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
        // Remove os espaços vazios de uma ocorrência
        // -----------------------------------------------
        // Exemplo de utilização:
        // savana.removeAllSpaces("Hello word") => Helloword;

        removeAllSpaces: function(str) {
            if (!str) return;
            return str.replace(/\s/g, "");
        },

        // GetNumberOfString - savana.getNumberOfString(str);
        // Pegar apenas numaeros de uma ocorrência
        // -----------------------------------------------
        // Exemplo de utilização:
        // savana.getNumberOfString("I have 10 dogs") => 10;

        getNumberOfString: function(str) {
            if (!str) return;
            return str.replace(/[^0-9]/g, '');
        },

        // Console - savana.debug(msg, type);  
        // -----------------------------------------------
        // Mostra uma mensagem para o desenvolvedor 
        // -----------------------------------------------
        // Exemplo de utilização:
        // savana.debug("Ola mundo", "log");
        // -----------------------------------------------
        // Types:
        // log, error, debug, info, warn

        debug: function(msg, type) {

            /*
                 It was such a relief not having to alert messages anymore, 
                 or using a DOM element to display them.
            */

            if (!msg)
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

            return;

        },

        // Request
        // Helper interno de ajax

        request: function(configs) {

            return new Promise(function(resolve, reject) {
                // By Quirksmode - http://www.quirksmode.org/js/xmlhttp.html
                var req = savana.createXMLHTTPObject();
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

        },

        // toJSON - savana.toJSON(str)
        // Conversão de string para JSON
        // Exemplo de utilização:
        // savana.toJSON(str);

        toJSON: function(str) {
            if (!str) return;
            return JSON.parse(str);
        },

        // toXML - savana.toXML(str)
        // Conversão de string para XML
        // Exemplo de utilização:
        // savana.toXML(str);

        toXML: function(str) {
            if (!str) return;
            var parser = new DOMParser();
            return parser.parseFromString(str, "text/xml");
        },

        // Async - savana.ajax(configs)
        /*
       Faz acessos Asynchronous a outros arquivos
       Exemplo de utilização:
       
            var headers = [
              {'Content-type':'application/x-www-form-urlencoded'} 
            ]; // Não obrigatório

            var data = "name=Rafael&age=27"; // Não obrigatório

            var promise = savana.async({
              // -> configs
              'url': 'test.txt', // Caminho de acesso
              'method':'POST', // Metodo de envio (POST, GET, DELETE ...)
              'headers': headers, // Informações de headers
              'data': data, // Parametros de envio
              'type': 'string' // Tipo de resposta - (json, xml, string)
            });

            promise.then(function(res){

                // Tudo certo com a requisição

                $savana.debug(e); // Return of object "XMLHttpRequest"

            }).catch(function(err){

                // Houve algum erro

                $savana.debug(err, "error"); // Return of object "XMLHttpRequest"

            });

            // EVITANDO O CALLBACK HELL - PROMISES
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

                // Evitando callback hell

                return savana.async({
                  'url': 'test.json',
                  'method':'POST',
                  'headers': headers, 
                  'data': data,
                  'type': 'json'
                }); 
                
                // Evitando callback hell

            }).then(function(json){  // Este Then pertence a resposta do JSON
                savana.debug(json);
            }).catch(function(err){
                savana.debug(err, "error"); // Return of object "XMLHttpRequest"
            });
    */

        async: function(configs) {
            if (!configs) return;
            return this.request(configs);
        },

        // URL - savana.url();  
        // -----------------------------------------------
        // Retorna informações da url
        // -----------------------------------------------
        // Exemplo de utilização:
        // savana.url(); => http://www.websitename.com.br
        // -----------------------------------------------
        // Types {hash: "", search: "?v5g4h", pathname: "/HELPERS/url.html", port: "", hostname: "localhost"…}
        // savana.url().hash;

        url: function() {
            return window.location;
        },

        // Now - savana.now();  
        // -----------------------------------------------
        // Retorna os milesegundos da data e hora atual
        // -----------------------------------------------
        // Exemplo de utilização:
        // savana.now(); //1431650671177

        now: function() {
            var date = new Date();
            return date.getTime(); //1431650671177
        },

        // Today - savana.now();  
        // -----------------------------------------------
        // Retorna a data e hora de dia atual
        // -----------------------------------------------
        // Exemplo de utilização:
        // savana.today("date"); => 15/12/2015
        // savana.today("date"); => 22:11:10

        today: function(type) {
            var date = new Date();
            if(type == "date"){
                return date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear();
            }else if(type == "time"){
                return date.getHours() + ":" + date.getMinutes() + ":" + date.getHours();
            }
        },
      
        // URL Current - savana.urlCurrent();  
        // -----------------------------------------------
        // Retorna a url corrente do navegador
        // -----------------------------------------------
        // Exemplo de utilização:
        // savana.urlCurrent(); => http://www.websitename.com.br

        urlCurrent: function() {
            return window.location.href;
        },

        // Redirect - savana.redirect(url);  
        // -----------------------------------------------
        // FAz um redirecionamento para outra página
        // -----------------------------------------------
        // Exemplo de utilização:
        // savana.redirect("http://www.meusite.com.br");

        redirect: function(url) {
            if(!url) return;
            window.location.href = url;
            return null;
        },

        // Params - savana.url();  
        // -----------------------------------------------
        // Retorna um array com os parametros divididos por / na url
        // -----------------------------------------------
        // Exemplo de utilização:
        // savana.params(); => ['view','edit'];

        params: function(isRouter) {

            var params = this.url().hash.split("/");
            if (isRouter) params.shift();
            return params;

        },

        // Have - savana.have(struct, compare, split);  
        // ---------------------------------------------------------
        // Verifica se existe um valor especifico em um array ou texto
        // ---------------------------------------------------------
        // Exemplo de utilização:
        // savana.have("ola mundo","mundo") => true;
        // savana.have("http://site.com/user/edit","user","/") => true;

        have: function(struct, compare, split) {

            if (struct && compare) {

                if (split)
                    struct = struct.split("/");

                if (struct.indexOf(compare) > -1) {
                    return true;
                } else {
                    return;
                }
            }else{
                return false;
            }

        },

        // isFunction - savana.isFunction(str)
        // Verifica se a ocorrência é uma função
        // ---------------------------------------------------------
        // Exemplo de utilização:
        // savana.isFunction(str); // true or false

        isFunction: function(fn) {

            if (typeof fn == "function") {
                return true;
            } else {
                return;
            }

        },

        // isObject - savana.isObject(str)
        // Verifica se a ocorrência é um objeto
        // --------------------------------------
        // Exemplo de utilização:
        // savana.isObject(str); // true or false

        isObject: function(fn) {

            if (typeof fn == "object") {
                return true;
            } else {
                return;
            }

        },

        // isString - savana.isString(str)
        // Verifica se a ocorrência é uma string
        // --------------------------------------
        // Exemplo de utilização:
        // savana.isString(str); // true or false

        isString: function(fn) {

            if (typeof fn == "string") {
                return true;
            } else {
                return;
            }

        },

        // isCPF - savana.isCPF(str)
        // Verifica se a ocorrência é uma CPF
        // --------------------------------------
        // Exemplo de utilização:
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
        // Converte um numero em formato monetario
        // --------------------------------------------------------------------------------
        // Exemplo de utilização:
        // savana.formatMoney(str);

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

            return symbol+" "+s.join(dec);

        },

        // rewrite - savana.rewrite(str)
        // Retira espaços e caracteres especiais de strings
        // ------------------------------------------------
        // Exemplo de utilização:
        // savana.rewrite("Hello Word"); // hello-word

        rewrite: function(str) {

            if (!str) return;
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
        },

        // isEmail - savana.isEmail(email)
        // Verifica se um endereço de email é valido
        // ------------------------------------------
        // Exemplo de utilização:
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
        // Verifica se a ocorrencia é um numero
        // ------------------------------------------
        // Exemplo de utilização:
        // savana.isNumber(18); // true

        isNumber: function(number) {

            if (!isNaN(number)) {
                return true;
            } else {
                return;
            }

        },

        // isLetter - savana.isLetter(email)
        // Verifica se a ocorrencia são letras
        // ------------------------------------------
        // Exemplo de utilização:
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
        // Verifica se a acorrencia é uma URL
        // ------------------------------------------
        // Exemplo de utilização:
        // savana.isURL(str);

        isURL: function(url) {

            if (!url) return;
            var regexp = /^((http|https|ftp|ftps):\/\/)?([a-z0-9\-]+\.)?[a-z0-9\-]+\.[a-z0-9]{2,4}(\.[a-z0-9]{2,4})?(\/.*)?$/i;
            return regexp.test(url);

        },

        // convertMoneyToFloat - savana.convertMoneyToFloat(str)
        // Conversão de valor monetário em float
        // ------------------------------------------
        // Exemplo de utilização:
        // savana.convertMoneyToFloat(str);

        convertMoneyToFloat: function(vl, symbol) {

            if (!vl || !symbol) return;
            return parseFloat(vl.replace(".", "").replace(",", ".").replace(symbol, "").replace(symbol + " ", ""));

        },

        // GetValueBill - savana.getValueBill(price, descount, symbol)
        // Conversão de string para JSON
        // ------------------------------------------
        // Exemplo de utilização:
        // savana.getValueBill(str);

        getValueBill: function(price, descount, symbol) {

            if (!price || !descount || !symbol) return;

            var valor_desc, vl = [];
            var product_price = savana.convertMoneyToFloat(price, symbol);

            if (product_price && descount) {

                valor_desc = (product_price * descount) / 100;
                product_price = product_price - valor_desc;
                product_price = savana.formatMoney(product_price, 2, ',', '.','R$');
                product_price = product_price;

                valor_desc = savana.formatMoney(valor_desc, 2, ',', '.','R$');
                valor_desc = valor_desc;

                vl.total = product_price;
                vl.descount = valor_desc;
                vl.porcent_descount = descount;

                return vl;
            }

        },

        // Installment - savana.installment(vl, parcmax, juros, valmin, symbol)
        // Pegar o valor do parcelamento
        // ------------------------------------------
        // Exemplo de utilização:
        // savana.installment("R$ 377,55", 10, 0, 50, "R$"); // Array [parc: "7x", vl: "R$ 53,94", juros: null]

        installment: function(price, parcmax, juros, valmin, symbol) {

            if (!price || !parcmax || !valmin || !symbol) return;

            var val = [];

            parcmax = parseInt(parcmax);
            juros   = parseFloat(juros);
            valmin  = parseFloat(valmin);

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
                    val.vl = savana.formatMoney(item_price, 2, ',', '.','R$');
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
                    val.val  =  savana.formatMoney(item_price, 2, ',', '.','R$');
                    val.juros = parseFloat(juros) + "% a.m";

                    return val;

                } else {
                    return;
                }

            }

        },

        // Financing - savana.financing(vl, parcmax, juros, valmin, symbol)
        // Financiamento com juros
        // ------------------------------------------
        // Exemplo de utilização:
        // savana.installment("R$ 377,55", 10, 0, 50, "R$"); // Array [parc: "5x", vl: "R$ 106,08", juros: "2% a.m"]

        financing: function(price, parcmax, juros, valmin, symbol) {

            if (!price || !parcmax || !valmin || !juros || !symbol) return;

            var val = [];

            parcmax = parseInt(parcmax);
            juros   = parseFloat(juros);
            valmin  = parseFloat(valmin);

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
        // Deixar a Primeira letra de cada palavra em maiusculo
        // ----------------------------------------------------
        // Exemplo de utilização:
        // savana.upperAllFirstLetter("hello world"); // Hello World

        upperAllFirstLetter: function(text) {

            if(!text) return;
            var loweredText = text.toLowerCase();
            var words = loweredText.split(" ");
            for (var a = 0; a < words.length; a++) {
                var w = words[a];
                var firstLetter = w[0];
                if(firstLetter){
                    w = firstLetter.toUpperCase() + w.slice(1);
                    words[a] = w;
                }
            }
            return words.join(" ");

        },

        // setCookie - savana.setCookie(name, value, times, setdomain, path)
        // Gravar cookie no navegador
        // times -> In Hours
        // ----------------------------------------------------
        // Exemplo de utilização:
        // savana.("savana", "teste", 1);

        setCookie: function(name, value, times, path) {

            if(!name) return;
            path = path || "/"
            var d = new Date();
            d.setTime(d.getTime() + (times * 1000 * 60 * 60));
            var expires = "expires=" + d.toGMTString();
            var path = "path="+path;
            document.cookie = name + "=" + value + ";" + expires + ";" + path + ";";
            return true;

        },

        // getCookie - savana.getCookie(name)
        // Pegar o valor do cookie no navegador
        // ----------------------------------------------------
        // Exemplo de utilização:
        // savana.getCookie("savana");

        getCookie: function(name) {

            if(!name) return;

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
        // Deletar o cookie do navegador
        // ----------------------------------------------------
        // Exemplo de utilização:
        // savana.deleteCookie("savana");

        deleteCookie: function(name) {
            if(!name) return;
            savana.setCookie(name, "", -1);
            return "";
        },

        // dateCurrent - savana.dateCurrent(type)
        // Pegar a data corrente do PC
        // Type = date or hours
        // ----------------------------------------------------
        // Exemplo de utilização:
        // savana.dateCurrent();

        dateCurrent: function(type) {

            if(!type) return;

            var d = new Date();
            if (type == "date") {
                return ((d.getDate() < 10) ? "0" + (d.getDate()) : d.getDate()) + "/" + ((d.getMonth() + 1 < 10) ? "0" + (d.getMonth() + 1) : d.getMonth() + 1) + "/" + d.getFullYear();
            } else if (type == "hours") {
                return ((d.getHours() < 10) ? "0" + d.getHours() : d.getHours()) + ":" + ((d.getMinutes() < 10) ? "0" + (d.getMinutes()) : d.getMinutes()) + ":" + ((d.getSeconds() < 10) ? "0" + (d.getSeconds()) : d.getSeconds());
            }
        },

        // Percent - savana.percent(oldValue, newValue)
        // Retorna a porcentagem de um desconto
        // ----------------------------------------------------
        // Exemplo de utilização:
        // savana.percent("R$ 100,00","R$ 50,00", "R$"); // [discount: 50, discount_format: "50%"]

        percent: function(oldValue, newValue, symbol) {

            if(!oldValue || !newValue || !symbol) return;

            var x = [];
            newValue = savana.convertMoneyToFloat(newValue, symbol);
            oldValue = savana.convertMoneyToFloat(oldValue, symbol);
            x.discount = Math.abs(parseInt((((newValue / oldValue) * 100) - 100)));
            x.discount_format = x.discount + "%";
            return x;
        },

        // DiscountPercent - savana.percent(percent, value, symbol)
        // Calcular um desconto de porcentagem
        // ----------------------------------------------------
        // Exemplo de utilização:
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

            if(!percent || !value || !symbol) return;

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
        // Limitar letras em uma string
        // ----------------------------------------------------
        // Exemplo de utilização:
        // savana.limitLetter(str, first_qtd, max_qtd); // Hello w...

        limitLetter: function(str, first_qtd, max_qtd) {

            if(!str || !max_qtd) return;

            var dot = "...";
            if (str.length > max_qtd) {
                return str.substring(first_qtd, max_qtd) + dot;
            } else {
                return str.substring(first_qtd, max_qtd);
            }

        },

        // limitWord - savana.limitWord(str, max_qtd)
        // Limitar  palavras em uma string
        // -------------------------------------------------------------
        // Exemplo de utilização:
        // savana.limitWord("Hello word today now", 2); // Hello word...

        limitWord: function(str, max_qtd) {

            if(!str || !max_qtd) return;

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

        // limitWord - savana.limitWord(str, max_qtd)
        // Limitar  palavras em uma string
        // -------------------------------------------------------------
        // Exemplo de utilização:
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

                e.preventDefault();

                if (savana.isFunction(_callback))
                    fn(true);

            });

            $savana(".ht-footer a.ht-popup-btn-not-confirm").on("click", function() {

                $savana(".ht-popup-area, .ht-popup-bg").animate("fadeOut", function() {

                    $savana(".ht-popup-area, .ht-popup-bg").hide();
                    $savana(".ht-popup-area, .ht-popup-bg").removeClass("animated");
                    $savana(".ht-popup-area, .ht-popup-bg").removeClass("fadeIn");
                    $savana(".ht-popup-area, .ht-popup-bg").removeClass("fadeOut");

                });

                event.preventDefault();

                if (savana.isFunction(_callback))
                    fn(false);

            });

        },

        // strUpper - savana.limitWord(str)
        // Conversão de strings para maiusculas
        // -------------------------------------------------------------
        // Exemplo de utilização:
        // savana.strUpper("Hello world"); // HELLO WORLD

        strUpper: function(str) {
            if (!str) return;
            return str.toUpperCase();
        },

        // strLower - savana.limitWord(str)
        // Conversão de strings para minusculas
        // -------------------------------------------------------------
        // Exemplo de utilização:
        // savana.strLower("Hello world"); // hello world

        strLower: function(str) {
            if (!str) return;
            return str.toLowerCase();
        },

        // messageBox - savana.limitWord(msg, type)
        // Box de alerta para o usuario
        // Types = error, success, warning, notice
        // -------------------------------------------------------------
        // Exemplo de utilização:
        // savana.messageBox("Hello world today now", "sucess"); // <div class="alert-box sucess"><span>Hello world</span></div>

        messageBox: function(msg, type) {

            if (!msg || !type) return;
            return '<div class="alert-box ' + type + '"><span>' + msg + '</span></div>';

        },

        // loadPreloader - savana.loadPreloader();
        // CArrega o loader na pagina
        // ------------------------------------------
        // Exemplo de utilização
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
        // Abrir o loader
        // ------------------------------------------
        // Exemplo de utilização
        // savana.showPreloader();

        showPreloader: function() {
            $savana(".ht-box-loader, .ht-popup-bg").show();
        },

        // hidePreloader - savana.hidePreloader()
        // Fechar o loader
        // ------------------------------------------
        // Exemplo de utilização
        // savana.hidePreloader();

        hidePreloader: function() {
            $savana(".ht-box-loader, .ht-popup-bg").hide();
        },

        // loaderAlert - savana.loaderAlert()
        // Carrega o alerta customizado
        // -------------------------------------------------------------
        // Exemplo de utilização:
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
        // Abre o alerta customizado
        // -------------------------------------------------------------
        // Exemplo de utilização:
        // savana.alert("Hello world");

        alert: function(msg) {

            if (!msg) return;

            $savana(".ht-popup-alert .ht-body.ht-popup-body").content("html", msg);
            $savana(".ht-popup-alert, .ht-popup-bg").show();
            $savana(".ht-popup-alert, .ht-popup-bg").animate("fadeIn");
            savana.dialogClose();

        },

        // confirm - savana.confirm(msg, fn)
        // Abre um box de confirmação para o usuario
        // -------------------------------------------------------------
        // Exemplo de utilização:
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
        // Carregar o box de confirmação
        // -------------------------------------------------------------
        // Exemplo de utilização:
        // savana.limitWord("Hello word today now", 2); // Hello word...

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

        // extend - savana.extend(str, max_qtd)
        // Faz o objeto herdar caracteriscas de outro objeto
        // -------------------------------------------------------------
        // Exemplo de utilização:
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

        // time - savana.time()
        // Retorna a quantidade de segundos deste de 1970
        // -------------------------------------------------------------
        // Exemplo de utilização:
        // savana.time(); // 4564654641564

        time: function() {
            return new Date().getTime();
        },

        // countObj - savana.time()
        // Retorna o numero de objetos
        // -------------------------------------------------------------
        // Exemplo de utilização:
        // savana.countObj(obj); // 3

        countObj: function(obj) {
            return Object.keys(obj).length;
        },

        // HELPERS INTERNO DO PLUGIN
        // -----------------------------------------------------------------------------

        // createXMLHTTPObject - savana.limitWord(str, max_qtd)
        // Uso interno do AJAX

        createXMLHTTPObject: function() {

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

        },

        // sort_by - savana.limitWord(str, max_qtd)
        // Uso interno: Para orderção de objetos

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
        // Uso interno: Retorna o tempo final de carregamento
        // -------------------------------------------------------------
        // Exemplo de utilização:
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
        // Helper interno para de seletor

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
        // Pegar parametro da URL
        // href -> se for vazio pega a url corrente da página
        // -------------------------------------------------------------
        // Exemplo de utilização:
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

        isIE: function(){
            return isIE();
        },

        modal: function(target, type){

            var _html = '<div class="sjs-modal sjs-modal-area sjs-modal-alert">' +
                '<div class="sjs-header-modal sjs-header">' +
                '<a href="#" class="sjs-close-thik">✖ Fechar</a>' +
                '</div><!-- /header -->' +
                '<div class="sjs-body sjs-modal-body">' +
                    $savana(target).content("html") +
                '</div>' +
                '</div><div class="sjs-modal-bg"></div>';

            $savana(target).destroy();
            $savana("body").push(_html, "after");
        },

        // CLIENT SIDE
        //----------------------------------------------

        // toJSON - savana.toJSON(str)
        //   Conversão de string para JSON
        //   Exemplo de utilização:
        //   savana.toJSON(str);

        View: function(configs) {

            if (!configs) return;
            return configs;

        },

        // toJSON - savana.toJSON(str)
        //   Conversão de string para JSON
        //   Exemplo de utilização:
        //   savana.toJSON(str);

        cssHelpers: function(scope, model){  
            $savana(scope.parent).find(".sjs-total-rows").content("text", savana.countObj(model))
        },

        render: function(scope, html, model) {

            if (!scope && html) return;

            if(!scope.child){
                $savana(scope.parent).content("html", html);
            }else{
                $savana(scope.parent+" "+scope.child).content("html", html);
            }

            // CSS Helpers
            savana.cssHelpers(scope, model);

        },

        // toJSON - savana.toJSON(str)
        //   Conversão de string para JSON
        //   Exemplo de utilização:
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
                $savana(".sjs-router.sjs-"+router.name).show();
                return true;
            } else {
                return;
            }

        },

        // toJSON - savana.toJSON(str)
        //   Conversão de string para JSON
        //   Exemplo de utilização:
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

                        console.log(_this)

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
        //   Conversão de string para JSON
        //   Exemplo de utilização:
        //   savana.toJSON(str);

        Model: function(configs) {

            if (!configs) return;
            return configs;

        },

        output: function(selector) {

            $savana(".sjs-output").on("keyup", function(e) {

            var $this = $savana(_this);
            var val = $savana(_this).content("val");
                
             if($savana("."+$this.attr("rel"))[0].nodeName == "INPUT" || $savana("."+$this.attr("rel"))[0].nodeName == "TEXTAREA"){
                $savana("."+$savana(_this).attr("rel")).content("val", val);
            }else{
                $savana("."+$savana(_this).attr("rel")).content("text", val);
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
            var count  = 0;

            for (var c = 0; c < len; c++) {
                if (model[c][key] == val) {
                    continue;
                }else{
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

            var namesform = $savana(form_target).serialize(true,true);
            var search = savana.searchLineJSON(json, key, value)[0];

            for (var name in namesform) {

                if($savana(form_target + " input[type=checkbox][name=" + name + "]").length){
                   if(search[name]){
                       $savana(form_target + " input[type=checkbox][name=" + name + "]")[0].checked = true;
                   }else{
                       $savana(form_target + " input[type=checkbox][name=" + name + "]")[0].checked = false;
                   }
                   continue;
                }
                if($savana(form_target + " input[type=radio][name=" + name + "]").length){
                   if(search[name]){
                       $savana(form_target + " input[type=checkbox][name=" + name + "][value="+ search[name] +"]")[0].checked = true;
                   }
                   continue;
                }
                if($savana(form_target + " input[name=" + name + "]").length){
                    $savana(form_target + " input[name=" + name + "]").content("val", search[name]);
                    continue;
                }
                if($savana(form_target + " textarea[name=" + name + "]").length){
                   $savana(form_target + " textarea[name=" + name + "]").content("val", search[name]);
                   continue;
                }
                if($savana(form_target + " select[name=" + name + "]").length){
                   $savana(form_target + " select[name=" + name + "]").content("val", search[name]);
                   continue;
                }
            }

            return true;

        }

    };

    window.savana = new Savana();

}).call();