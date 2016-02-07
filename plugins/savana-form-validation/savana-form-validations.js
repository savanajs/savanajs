/*
Savana Form Validations
Created By Rafael Cruz
Contact: projetosavanajs@gmail.com
Version: 0.0.1
Release: 07/02/2016
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


!(function($savana, undefined) {

    'use strict';

    $savana.fn.formValidations = function(params) {

        var date = new Date();
        var responseForms = [],
            self,
            config;

        config = savana.extend({

            requeredClassName: 'ht-required',
            validateEmailClassName: 'ht-valid-email',
            validateCPFClassName: 'ht-valid-cpf',
            validateLastanameClassName: 'ht-valid-name-and-lastname',
            validateNumberClassName: 'ht-valid-number',
            validateLetterClassName: 'ht-valid-letter',
            maskCEPClassName: 'ht-mask-cep',
            maskCPFClassName: 'ht-mask-cpf',
            maskCNPJClassName: 'ht-mask-cnpj',
            maskPhoneClassName: 'ht-mask-phone',
            maskRGClassName: 'ht-mask-rg',
            maskDataNascClassName: 'ht-mask-date',
            maskNumberClassName: 'ht-mask-number',
            maskLetterClassName: 'ht-mask-letters',
            msgRequered: "O campo <b>'{&}'</b> é de tipo obrigatório!",
            msgEmailValidate: "O campo <b>'{&}'</b> está no formato inválido!",
            msgCPFValidate: "O campo <b>'{&}'</b> está no formato inválido!",
            msgNameAndLastnameValidate: "O campo <b>'{&}'</b> está inválido, digite seu sobrenome!",
            msgNumberValidate: "O campo <b>'{&}'</b> está inválido, digite apenas numeros!",
            msgLetterValidate: "O campo <b>'{&}'</b> está inválido, digite apenas letras!",
            msgForUserOfInputRequered: "<p><span>*</span> Campos obrigatórios!</p>",
            placeholderMaskCEP: "Ex: 99999-999",
            placeholderMaskNumber: "Ex: 99999...",
            placeholderMaskDate: "Ex: 31/12/1980",
            placeholderMaskCPF: "Ex: 999.999.999-99",
            placeholderMaskCNPJ: "Ex: 99.999.999/9999-99",
            placeholderMaskRG: "Ex: 99.999.999-9",
            placeholderMaskPhone: "Ex: (11) 9999-99999"

        }, params);

        // Overall control of the form, which is called in your startup
        var controlGeneral = {

            setMarkRequered: function(self) {

                var $form = $savana(self);
                $form.push(config.msgForUserOfInputRequered, "after");

                $savana(".ht-required").each(function(e) {
                    var $this = $savana(this);
                    $this.parents("form").find("label[for=" + $this.attr("name") + "]").push("<span class='ht-req'>*</span>", "after");
                });

            },

            events: function(self) {

                // Required field marking (*)
                this.setMarkRequered(self);

                // Enables the custom alert
                savana.loadAlert();

                // Remove the error style of inputs
                $savana(self).find("input").on("focus", function() {
                    var $this = $savana(this);
                    $this.removeClass("ht-error");
                });

                // Enter first letters uppercase
                $savana("." + config.validateLastanameClassName).on("keyup", function(e) {
                    var $this = $savana(this);
                    $this.content("val", savana.upperAllFirstLetter($this.content("val")));
                });

            },
            validations: function() {

                // Call the validations within the submit
                responseForms.requered = controlRequered.init();
                responseForms.validate_email = controlEmail.init();
                responseForms.validate_cpf = controlCPF.init();
                responseForms.validate_name_and_lastname = controlNameAndLastname.init();
                responseForms.validate_numbers = controlNumbers.init();
                responseForms.validate_letters = controlLetters.init();
                responseForms.hasError = false;

                if (responseForms.requered.errors) {
                    controlRequered.showErros(responseForms.requered);
                } else if (responseForms.validate_email.errors) {
                    controlRequered.showErros(responseForms.validate_email);
                } else if (responseForms.validate_cpf.errors) {
                    controlRequered.showErros(responseForms.validate_cpf);
                } else if (responseForms.validate_name_and_lastname.errors) {
                    controlRequered.showErros(responseForms.validate_name_and_lastname);
                } else if (responseForms.validate_numbers.errors) {
                    controlRequered.showErros(responseForms.validate_numbers);
                } else if (responseForms.validate_letters.errors) {
                    controlRequered.showErros(responseForms.validate_letters);
                }

                return responseForms;

            },
            masks: function() {

                controlMaskCEP.init();
                controlMaskNumber.init();
                controlMaskLetters.init();
                controlMaskDate.init();
                controlMaskCPF.init();
                controlMaskCNPJ.init();
                controlMaskRG.init();
                controlMaskPhone.init();

            }

        };

        // Methods validation standards
        var controlForm = {
            form: this[0],
            getForm: function(self, requered) {

                return $savana(self).serialize(true, true, requered);

            },
            setStyleErrorOnInput: function(selector) {

                if (!selector) return;
                if (!$savana(selector).hasClass("ht-error"))
                    $savana(selector).addClass("ht-error");

                return null;

            },
            removeStyleErrorOnInput: function() {

                $savana(self).find("input, textarea, select").removeClass("ht-error");
                return null;

            },
            removeStyleErroOnFocus: function(selector) {

                $savana(".ht-error").on("focus", function() {
                    var $this = $savana(this);
                    $this.removeClass(".ht-error");
                });

                return null;

            },
            showErros: function(erros) {

                if (!erros.errors) return;

                var msg = "";
                var err;
                var html;

                for (err in erros) {
                    if (!savana.isObject(erros[err])) continue;
                    msg += "<p>" + erros[err].response.msg + "</p>";
                    this.setStyleErrorOnInput(erros[err].response.selector);
                }

                responseForms.hasError = true;

                html = savana.messageBox(msg, "error");
                savana.alert(html);

                return null;

            }
        };

        // Controls required of form values
        var controlRequered = {
            init: function() {

                self = this.form;
                var inputs = this.getForm(self, config.requeredClassName);
                var erros = this.getInputs(inputs, config.msgRequered);
                this.removeStyleErrorOnInput();
                return erros;

            },
            getInputs: function(inputs, msg) {

                var erros = [];
                var label;
                var count = 0;

                for (var key in inputs) {
                    if (!inputs[key]) {
                        label = $savana(self).find("label[for=" + key + "]").content("text") || "?";
                        erros[key] = {
                            response: {
                                'selector': 'input[name=' + key + ']',
                                'msg': msg.replace("{&}", label.match(/[a-zA-Z]+/g))
                            }
                        };
                        count++;
                    }

                }

                erros.errors = count;
                return erros;

            }

        };

        // Controls required of form values
        var controlEmail = {
            init: function() {

                self = this.form;
                var inputs = this.getForm(self, config.validateEmailClassName);
                var erros = this.getInputs(inputs, config.msgCPFValidate);
                this.removeStyleErrorOnInput();
                return erros;

            },
            getInputs: function(inputs, msg) {

                var erros = [];
                var label;;
                var count = 0;

                for (var key in inputs) {

                    if (!savana.isEmail(inputs[key])) {
                        label = $savana(self).find("label[for=" + key + "]").content("text") || "?";
                        erros[key] = {
                            response: {
                                'selector': 'input[name=' + key + ']',
                                'msg': msg.replace("{&}", label.match(/[a-zA-Z]+/g))
                            }
                        };
                        count++;
                    }
                }

                erros.errors = count;
                return erros;

            }
        };

        // Control to validate the cpf
        var controlCPF = {
            init: function() {

                self = this.form;
                var inputs = this.getForm(self, config.validateCPFClassName);
                var erros = this.getInputs(inputs, config.msgCPFValidate);
                this.removeStyleErrorOnInput();
                return erros;

            },
            getInputs: function(inputs, msg) {

                var erros = [];
                var label;
                var count = 0;

                console.log(inputs)

                for (var key in inputs) {

                    if (!savana.isCPF(inputs[key])) {
                        label = $savana(self).find("label").content("text") || "?";
                        erros[key] = {
                            response: {
                                'selector': 'input[name=' + key + ']',
                                'msg': msg.replace("{&}", label.match(/[a-zA-Z]+/g))
                            }
                        };
                        count++;
                    }
                }

                erros.errors = count;
                return erros;

            }
        };

        // Controls to validate the surname
        var controlNameAndLastname = {
            init: function() {

                self = this.form;
                var inputs = this.getForm(self, config.validateLastanameClassName);
                var erros = this.getInputs(inputs, config.msgNameAndLastnameValidate);
                this.removeStyleErrorOnInput();
                return erros;

            },
            getInputs: function(inputs, msg) {

                var erros = [];
                var label;
                var count = 0;
                var name;

                for (var key in inputs) {

                    name = inputs[key].split(" ");

                    console.log(name.length)

                    if (name.length <= 1) {
                        label = $savana(self).find("label[for=" + key + "]").content("text") || "?";
                        erros[key] = {
                            response: {
                                'selector': 'input[name=' + key + ']',
                                'msg': msg.replace("{&}", label.match(/[a-zA-Z]+/g))
                            }
                        };
                        count++;
                    }
                }

                erros.errors = count;
                return erros;

            }
        };

        // Controls numbers
        var controlNumbers = {
            init: function() {

                self = this.form;
                var inputs = this.getForm(self, config.validateNumberClassName);
                var erros = this.getInputs(inputs, config.msgNumberValidate);
                this.removeStyleErrorOnInput();
                return erros;

            },
            getInputs: function(inputs, msg) {

                var erros = [];
                var label;
                var count = 0;

                for (var key in inputs) {

                    if (!savana.isNumber(inputs[key])) {
                        label = $savana(self).find("label[for=" + key + "]").content("text") || "?";
                        erros[key] = {
                            response: {
                                'selector': 'input[name=' + key + ']',
                                'msg': msg.replace("{&}", label.match(/[a-zA-Z]+/g))
                            }
                        };
                        count++;
                    }
                }

                erros.errors = count;
                return erros;

            }
        };

        // Controls to validate letters
        var controlLetters = {
            init: function() {

                self = this.form;
                var inputs = this.getForm(self, config.validateLetterClassName);
                var erros = this.getInputs(inputs, config.msgLetterValidate);
                this.removeStyleErrorOnInput();
                return erros;

            },
            getInputs: function(inputs, msg) {

                var erros = [];
                var label;
                var count = 0;

                for (var key in inputs) {

                    if (!savana.isLetter(inputs[key])) {
                        label = $savana(self).find("label[for=" + key + "]").content("text") || "?";
                        erros[key] = {
                            response: {
                                'selector': 'input[name=' + key + ']',
                                'msg': msg.replace("{&}", label.match(/[a-zA-Z]+/g))
                            }
                        };
                        count++;
                    }
                }

                erros.errors = count;
                return erros;

            }
        };

        // CEP mask Control
        var controlMaskGeneral = {

            init: function() {

                self = this;
                self.setPlaceholder(self);
                self.keyup(self);
                self.onblur(self);

            },
            setPlaceholder: function(self) {

                $savana("." + self.selector).attr("placeholder", self.placeholder);

            },
            regexMask: function(str, self) {

                if (!str) return false;
                return str.replace(self.regex, '');

            },
            keyup: function(self) {

                var value, _str, keyCode, len, mask, infos;

                $savana("." + self.selector).on("keyup", function(e) {

                    var $this = $savana(this);
                    value = $this.content("val");
                    _str = self.regexMask(value, self);

                    if (_str) {

                        $this.content("val", _str);

                    } else {

                        $this.content("val", "");

                    }

                });

                $savana("." + self.selector).on("keypress", function(e) {

                    var $this = $savana(this);
                    value = $this.content("val");
                    _str = self.regexMask(value, self);

                    if (_str) {

                        keyCode = e.keyCode;
                        len = _str.length;
                        infos = {
                            'str': _str,
                            'len': len,
                            'keyCode': keyCode
                        };
                        mask = self.build(infos, self);

                        // Mask limitation
                        if ((len >= self.maxCharacters) && self.maxCharacters) {
                            mask = mask.substring(0, self.maxCharacters);
                        }

                        $this.content("val", mask);

                    } else {

                        $this.content("val", "");

                    }

                });

            },
            onblur: function(self) {

                $savana("." + self.selector).on("blur", function(e) {

                    var $this = $savana(this);
                    var value = $this.content("val");
                    var len   = value.length;

                    if ((len < (self.minCharacters + 1)) && self.minCharacters) {
                        $this.content("val", "");
                    }

                });

            }
        };

        // CEP Mask Control
        var controlMaskCEP = {

            selector: config.maskCEPClassName,
            regex: /[^0-9\-]/g,
            maxCharacters: 8,
            minCharacters: 8,
            symbol: "-",
            keyCodeException: 8,
            placeholder: config.placeholderMaskCEP,

            build: function(info, self) {

                if (info.len > 4 && info.len < 7 && info.keyCode != self.keyCodeException) {
                    return info.str.substring(0, 5) + self.symbol;
                } else {
                    return info.str;
                }

            }

        };

        // Mask Control Numbers
        var controlMaskNumber = {

            selector: config.maskNumberClassName,
            maxCharacters: 0,
            minCharacters: 0,
            symbol: "",
            regex: /[^0-9]/g,
            keyCodeException: 0,
            placeholder: "Ex: 99999...",

            build: function(info, self) {

                return info.str;

            }

        };

        // Letters Mask Control
        var controlMaskLetters = {

            selector: config.maskLetterClassName,
            maxCharacters: 0,
            minCharacters: 0,
            symbol: "",
            regex: /[^A-Za-z\s]/g,
            keyCodeException: 0,
            placeholder: "",

            build: function(info, self) {

                return info.str;

            }

        };

        // Date mask control
        var controlMaskDate = {

            selector: config.maskDataNascClassName,
            maxCharacters: 9,
            minCharacters: 9,
            symbol: "/",
            regex: /[^0-9\/]/g,
            keyCodeException: 8,
            placeholder: config.placeholderMaskDate,

            validateDate: function(dateinfo) {

                var datelist = dateinfo.split("/");

                if (parseInt(datelist[0]) > 31) {
                    datelist[0] = 31;
                }

                if (parseInt(datelist[1]) > 12) {
                    datelist[1] = 12;
                }

                if (parseInt(datelist[2]) > date.getFullYear()) {
                    datelist[2] = date.getFullYear(); // Ano atual
                }

                if (datelist.length) {

                    if (datelist.length == 1)
                        return dateinfo;

                    if (datelist.length == 2)
                        return datelist[0] + "/" + datelist[1];

                    if (datelist.length == 3)
                        return datelist[0] + "/" + datelist[1] + "/" + datelist[2];

                } else {
                    return dateinfo;
                }

            },

            build: function(info, self) {

                info.str = self.validateDate(info.str);

                if (info.len == 2 && info.len < 5 && info.keyCode != self.keyCodeException) {
                    return info.str.substring(0, 2) + self.symbol + info.str.substring(2);
                } else if (info.len == 5 && info.len < 9 && info.keyCode != self.keyCodeException) {
                    return info.str.substring(0, 5) + self.symbol + info.str.substring(5, 9);
                } else {
                    return info.str;
                }

            }

        };

        // CPF Control
        var controlMaskCPF = {

            selector: config.maskCPFClassName,
            maxCharacters: 13,
            minCharacters: 13,
            symbol: ".",
            symbol2: "-",
            regex: /[^0-9\-\.]/g,
            keyCodeException: 8,
            placeholder: config.placeholderMaskCPF,

            build: function(info, self) {

                if (info.len == 3 && info.len < 5 && info.keyCode != self.keyCodeException) {
                    return info.str.substring(0, 3) + self.symbol + info.str.substring(3);
                } else if (info.len == 7 && info.len < 9 && info.keyCode != self.keyCodeException) {
                    return info.str.substring(0, 7) + self.symbol + info.str.substring(7);
                } else if (info.len == 11 && info.len < 13 && info.keyCode != self.keyCodeException) {
                    return info.str.substring(0, 11) + self.symbol2 + info.str.substring(11);
                } else {
                    return info.str;
                }

            }

        };

        // CNPJ Control
        var controlMaskCNPJ = {

            selector: config.maskCNPJClassName,
            maxCharacters: 17,
            minCharacters: 17,
            symbol: ".",
            symbol2: "-",
            symbol3: "/",
            regex: /[^0-9\-\.\/]/g,
            keyCodeException: 8,
            placeholder: config.placeholderMaskCNPJ,

            build: function(info, self) {

                if (info.len == 2 && info.len < 5 && info.keyCode != self.keyCodeException) {
                    return info.str.substring(0, 2) + self.symbol + info.str.substring(2);
                } else if (info.len == 6 && info.len < 8 && info.keyCode != self.keyCodeException) {
                    return info.str.substring(0, 6) + self.symbol + info.str.substring(6);
                } else if (info.len == 10 && info.len < 12 && info.keyCode != self.keyCodeException) {
                    return info.str.substring(0, 10) + self.symbol3 + info.str.substring(10);
                } else if (info.len == 15 && info.len < 18 && info.keyCode != self.keyCodeException) {
                    return info.str.substring(0, 15) + self.symbol2 + info.str.substring(15);
                } else {
                    return info.str;
                }

            }

        };

        // RG Control
        var controlMaskRG = {

            selector: config.maskRGClassName,
            maxCharacters: 11,
            minCharacters: 11,
            symbol: ".",
            symbol2: "-",
            regex: /[^0-9\-\.\x\X]/g,
            keyCodeException: 8,
            placeholder: config.placeholderMaskRG,

            build: function(info, self) {

                if (info.len == 2 && info.len < 5 && info.keyCode != self.keyCodeException) {
                    return info.str.substring(0, 2) + self.symbol + info.str.substring(2);
                } else if (info.len == 6 && info.len < 8 && info.keyCode != self.keyCodeException) {
                    return info.str.substring(0, 6) + self.symbol + info.str.substring(6);
                } else if (info.len == 10 && info.len < 12 && info.keyCode != self.keyCodeException) {
                    return info.str.substring(0, 10) + self.symbol2 + info.str.substring(10);
                } else {
                    return info.str;
                }

            }

        };

        // Telephone Control
        var controlMaskPhone = {

            selector: config.maskPhoneClassName,
            maxCharacters: 14,
            minCharacters: 13,
            symbol: "(",
            symbol2: ")",
            symbol3: "-",
            regex: /[^0-9\-\(\)\s]/g,
            keyCodeException: 8,
            placeholder: config.placeholderMaskPhone,

            build: function(info, self) {

                if (info.len == 2 && info.len < 8 && info.keyCode != self.keyCodeException) {
                    return self.symbol + info.str.substring(0, 2) + self.symbol2 + " " + info.str.substring(5);
                } else if (info.len == 9 && info.len < 14 && info.keyCode != self.keyCodeException) {
                    return info.str.substring(0, 9) + self.symbol3 + info.str.substring(9);
                } else {
                    return info.str;
                }

            }

        };

        // HERITAGE.
        // ....................................................................
        controlGeneral.events(this[0]);

        // Validations
        // ....................................................................
        controlRequered = savana.extend(controlRequered, controlForm);
        controlEmail = savana.extend(controlEmail, controlForm); 
        controlCPF = savana.extend(controlCPF, controlForm); 
        controlNameAndLastname = savana.extend(controlRequered, controlForm); 
        controlNumbers = savana.extend(controlRequered, controlForm); 
        controlLetters = savana.extend(controlRequered, controlForm); 

        // Mask
        // ....................................................................
        controlMaskCEP = savana.extend(controlMaskCEP, controlMaskGeneral);
        controlMaskNumber = savana.extend(controlMaskNumber, controlMaskGeneral); 
        controlMaskLetters = savana.extend(controlMaskLetters, controlMaskGeneral); 
        controlMaskDate = savana.extend(controlMaskDate, controlMaskGeneral); 
        controlMaskCPF = savana.extend(controlMaskCPF, controlMaskGeneral); 
        controlMaskRG = savana.extend(controlMaskRG, controlMaskGeneral); 
        controlMaskPhone = savana.extend(controlMaskPhone, controlMaskGeneral); 
        controlMaskCNPJ = savana.extend(controlMaskCNPJ, controlMaskGeneral); 

        return controlGeneral;

    };

})($savana);