$savana(document).done(function(e) {

    var template = {
        init: function(target, tpl, obj){

            if(!tpl || !obj) return;
            var template = $savana(tpl).content("html");
            var rendered = Mustache.render(template, obj);
            $savana(target).content("html", rendered);

        }
    }

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
        target: "#list-users-tpl",
        tpl: "#users-template",
        init: function(scope, json) {
     
            scope.search(scope, json);
            scope.insert(scope, json);
            scope.update(scope, json);
            savana.output();

        },

        build: function(scope, model) {

            var user, content = "";
            console.log(model)
            console.log({"users": model});
            template.init(scope.target, scope.tpl, {"users": model});
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
                //json = savana.modelOrderBy(model_upt, "name", "asc");
                scope.build(scope, model_upt);
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
                    name:"list-users", 
                    linkid:"#linkuser",
                    async: "list-user.html"
                  },
                  listUser2:{
                    name:"list-users2", 
                    linkid:"#linkuser2",
                    async: "list-user2.html"
                  },
        },

        init: function(scope) {
            savana.loadRouter(scope, scope.router.listUser, function(params) {
                modelUsers.getUsers(modelUsers, function(resp){
                    userView.init(userView, resp);
                    userView.build(userView, resp);
                });
            });

            savana.loadRouter(scope, scope.router.listUser2, function(params) {
                modelUsers.getUsers(modelUsers, function(resp){
                    userView.init(userView, resp);
                    userView.build(userView, resp);
                });
            });
        }

    });
 
    routerUser.init(routerUser);

});