(function () {
    'use strict';

    angular
        .module('ATB')
        .controller('UserEditController', UserEditController);

    UserEditController.$inject = ['$scope', '$location', '$http'];
    function UserEditController($scope, $location, $http) {
        var _self = this;

        $http.get("/datavisibility/list")
            .then(function (res) {
                _self.dataVisibilitiesList = res.data;
            })
            .catch(function () {
                var msg = i18n.t("alerts:error.list_client"),
                    title = i18n.t("alerts:error.error");
                toastr.error(msg, title);
            });

        $http.get("/group/list")
            .then(function (res) {
                _self.groupsList = res.data;
            })
            .catch(function () {
                var msg = i18n.t("alerts:error.list_profile"),
                    title = i18n.t("alerts:error.error");
                toastr.error(msg, title);
            });

        var id = $location.search().id;
        $http.get("/user/get/" + id)
            .then(function (res) {
                var edit = res.data || {};

                _self.edit = {
                    id: edit.Id,
                    status: edit.Status,
                    name: edit.Name,
                    login: edit.Login,
                    email: edit.Email,
                    type: edit.AuthenticationType,
                    groups: edit.Groups || [],
                    allDataVisibility: edit.AccessAllDataVisibility,
                    dataVisibilities: edit.DataVisibilities || []
                };
            })
            .catch(function () {
                var msg = i18n.t("alerts:error.get_user"),
                    title = i18n.t("alerts:error.error");
                toastr.error(msg, title);
            });

        _self.save = function () {
            $http.put("/user/update/", _self.edit)
                .then(function (res) {
                    var data = res.data || {};
                    var msg = i18n.t("alerts:success.save_user"),
                        title = i18n.t("alerts:success.success");
                    toastr.success(msg, title);
                })
                .catch(function () {
                    var msg = i18n.t("alerts:error.save_user"),
                        title = i18n.t("alerts:error.error");
                    toastr.error(msg, title);
                });
        };
    }
})();


