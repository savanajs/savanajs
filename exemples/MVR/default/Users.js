$savana(document).done(function(e) {

    var modelUsers = savana.Model({

        configs: {
           listUsers: {
                'url': '/exemples/data/test.json',
                'method': 'GET',
                'type': 'json'
            }
        },

        getUsers: function(scope, fn) {
            var promise = savana.async(scope.configs.listUsers);
            promise.then(function(response) {
                var json = savana.modelOrderBy(response.users, "name", "asc");  // Order by
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
        parent: "div#listUsers",
        child: ".list",
        
        init: function(scope, json) {

            scope.search(scope, json);
            scope.insert(scope, json);
            scope.update(scope, json);
            savana.output();

        },

        build: function(scope, model) {

            var user, content = "";

            for (key in model) {
                user = model[key];
                content += "<tr><td>"+user.active+"</td><td>"+user.name+"</td><td><a href='#' rel='" + user.id + "' class='edit'>Editar</a> - <a href='#' rel='" + user.id + "' class='del'>Excluir</a></td></tr>";
            }

            savana.render(scope, content, model);
            scope.always(scope, model);
            scope.delete(scope, model);

        },

        insert: function(scope, json) {

            $savana("form#saveUser").on("submit", function(e) {

                var foms_input = $savana(_this).serialize(true);
                $savana(_this).clearForm();
                savana.modelInsert(scope, json, foms_input, function(model) {
                    json = savana.modelOrderBy(model, "name", "asc");
                    scope.build(scope, json);
                });   
                e.preventDefault();

            })

        },

        delete: function(scope, json) {

            $savana(scope.parent + " a.del").on("click", function(e) {
                var model_upt = savana.modelDelete(json, "id", $savana(_this).attr("rel"));
                json = savana.modelOrderBy(model_upt, "name", "asc");
                scope.build(scope, json);
                e.preventDefault();
            });

        },

        always: function(scope, json) {

            $savana(scope.parent + " a.edit").on("click", function(e) {
                savana.setValuesInForm("form#editUser", json, "id", $savana(_this).attr("rel"));
                e.preventDefault();
            });

        },

        update: function(scope, json) {

            $savana("form#editUser").on("submit", function(e) {

                var foms_input = $savana(_this).serialize(true);
                $savana(_this).clearForm();
                savana.modelUpdate(scope, json, foms_input, "id", function(model) {
                    json = savana.modelOrderBy(model, "name", "asc");
                    scope.build(scope, json);
                });
                e.preventDefault();

            })

        },

        search: function(scope, json) {

            $savana("input.search-users").on("keyup", function(e) {
                var newModel = savana.modelSearch($savana(_this), json, "name");
                scope.build(scope, newModel);
            });

        }

    });

    var routerUser = savana.Router({

        router: {
                  listUser:{
                    name:"list-users", // Hash na url
                  }
        },

        init: function(scope) {
            savana.loadRouter(scope, scope.router.listUser, function(params) {
                modelUsers.getUsers(modelUsers, function(resp){
                    userView.init(userView, resp);
                    userView.build(userView, resp);
                });
            });
        }

    });
 
    routerUser.init(routerUser);

});