$savana(document).done(function(e) {

    var modelUsers = savana.Model({

        configs: {
           listUsers: {
                'url': '/data/test.json',
                'method': 'POST',
                'type': 'json'
            }
        },

        getUsers: function(scope, fn) {

            var promise = savana.async(scope.configs.listUsers);

            promise.then(function(resp) {
                var json = savana.modelOrderBy(resp.employees, "firstName", "asc");  // Order by
                fn(json);
            }).catch(function(err) {
                savana.debug(err, "error");
            });

            return scope;

        },

        setUsers: function(scope) {

        }

    });

    var userView = savana.View({

        openTag: "<ul class='users'>",
        closeTag: "</ul>",
        target: "div#list-user",

        init: function(scope, json) {

            scope.search(scope, json);
            scope.insert(scope, json);
            scope.update(scope, json);

        },

        build: function(scope, model) {

            var user, content = "";

            for (key in model) {
                user = model[key];
                content += "<li>" + user.firstName + " - <a href='#' rel='" + user.id + "' class='edit'>Editar</a> - <a href='#' rel='" + user.id + "' class='del'>Excluir</a></li>";
            }

            savana.render(scope, content);
            scope.always(scope, model);
            scope.delete(scope, model);

        },

        insert: function(scope, json) {

            $savana("form#sampleform-user").on("submit", function(e) {

                var foms_input = $this.serialize(true);
                $this.clearForm();

                savana.modelInsert(scope, json, foms_input, function(model) {
                    json = savana.modelOrderBy(model, "firstName", "asc");
                    scope.build(scope, json);
                });
      
                e.preventDefault();

            })

        },

        delete: function(scope, json) {

            $savana(scope.target + " li a.del").on("click", function(e) {
                var model_upt = savana.modelDelete(json, "id", $this.attr("rel"));
                json = savana.modelOrderBy(model_upt, "firstName", "asc");
                scope.build(scope, json);
                e.preventDefault();
            });

        },

        always: function(scope, json) {

            $savana(scope.target + " li a.edit").on("click", function(e) {
                savana.setValuesInForm("form#sampleform-edit", json, "id", $this.attr("rel"));
                e.preventDefault();
            });

        },

        update: function(scope, json) {

            $savana("form#sampleform-edit").on("submit", function(e) {

                var foms_input = $this.serialize(true);
                $this.clearForm();

                savana.modelUpdate(scope, json, foms_input, "id", function(model) {
                    json = savana.modelOrderBy(model, "firstName", "asc");
                    scope.build(scope, json);
                });

                e.preventDefault();

            })

        },

        search: function(scope, json) {

            var newModel;

            $savana("input.search").on("keyup", function(e) {
                newModel = savana.modelSearch($this, json, "firstName");
                scope.build(scope, newModel);
            });

        }

    });

    var routerUser = savana.Router({

        router: {
                  listUser:{
                    name:"list-user", 
                    linkid:"#linkuser",
                    async: "list-user.html"
                  },
                  listUser2:{
                    name:"list-user2", 
                    linkid:"#linkuser2",
                    async: "list-user.html"
                  },
        },

        init: function(scope) {

            savana.loadRouter(scope, scope.router.listUser, function(params) {

                modelUsers.getUsers(modelUsers, function(resp){
                    userView.init(userView, resp); // Apenas se o router for em ajax
                    userView.build(userView, resp);
                });

            });

        }

    });
 
    routerUser.init(routerUser);

});