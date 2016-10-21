(function () {
    "use strict";

    angular.module("inspinia")
        .controller("UserCreateController", function ($scope, $location, $http) {
            var self = this;

            if (self.pass !== self.pass2) {
                var msg = i18n.t("alerts:error.compare_pass"),
                    title = i18n.t("alerts:error.error");
                toastr.error(msg, title);
                return;
            }

            self.save = function () {
                var data = {
                    email: self.user.email,
                    login: self.user.login,
                    name: self.user.name,
                    pass: self.user.pass,
                    type: self.user.type
                };

                $http.post("/User/Create", data)
                    .then(function (res) {
                        $location.search().id = res.data;
                        $location.path("/index/user");

                        var message = i18n.t("alerts:success.create_user");
                        var title = i18n.t("alerts:success.success");
                        toastr.success(message, title);
                    })
                    .catch(function (error) {
                        //TODO: Melhorar retorno de mensagem de erro ao usuário (multi idioma)
                        var message = i18n.t("alerts:error.create_user");
                        var title = i18n.t("alerts:error.error");
                        toastr.error(message, title);
                        toastr.error(error.data.toString(), "Erro");
                    });
            };

            self.user = {};
        });
}());