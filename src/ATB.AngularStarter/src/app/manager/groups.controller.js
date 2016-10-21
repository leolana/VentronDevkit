(function () {
    'use strict';

    angular
        .module('ATB')
        .controller('GroupsController', GroupsController);

    GroupsController.$inject = ['$scope', '$http'];
    function GroupsController($scope, $http) {
        var _self = this;

        _self.groupsList = [];
        _self.permissionsList = [];

        $http.get("/user/list")
            .then(function (res) {
                if (res.status != 200) {
                    var msg = i18n.t("alerts:error.unexpected"),
                        title = i18n.t("alerts:error.fail");
                    toastr.error(msg, title);
                    return;
                }
                _self.users = res.data;
            })
            .catch(function () {
                var msg = i18n.t("alerts:error.unexpected"),
                    title = i18n.t("alerts:error.fail");
                toastr.error(msg, title);
            });

        $http.get("/group/list")
            .then(function (res) {
                //TODO: Repetição, como melhorar isso?
                if (res.status != 200) {
                    var msg = i18n.t("alerts:error.unexpected"),
                        title = i18n.t("alerts:error.fail");
                    toastr.error(msg, title);
                    return;
                }
                _self.groupsList = res.data;
            })
            .catch(function () {
                var msg = i18n.t("alerts:error.unexpected"),
                    title = i18n.t("alerts:error.fail");
                toastr.error(msg, title);
            });

        $http.get("/role/list")
            .then(function (res) {
                if (res.status != 200) {
                    var msg = i18n.t("alerts:error.unexpected"),
                        title = i18n.t("alerts:error.fail");
                    toastr.error(msg, title);
                    return;
                }
                _self.permissionsList = res.data;
            })
            .catch(function () {
                var msg = i18n.t("alerts:error.unexpected"),
                    title = i18n.t("alerts:error.fail");
                toastr.error(msg, title);
            });

        _self.groupSelected = {};
        _self.newGroup = { Name: "" };

        _self.selectGroup = function (item) {
            _self.groupSelected = $.extend({ index: _self.groupsList.indexOf(item) }, item);
        };

        _self.create = function () {
            $http.put("/group/create", _self.newGroup)
                .then(function (res) {
                    if (res.status != 200) {
                        var msg = i18n.t("alerts:error.save_profile"),
                            title = i18n.t("alerts:error.fail");
                        toastr.error(msg, title);
                        return;
                    }
                    _self.groupsList.push(res.data);
                    _self.newGroup = { Name: "" };

                    var msg = i18n.t("alerts:success.save_profile"),
                        title = i18n.t("alerts:success.success");
                    toastr.success(msg, title);

                    $(".modal").modal("hide");
                })
                .catch(function () {
                    var msg = i18n.t("alerts:error.save_profile"),
                        title = i18n.t("alerts:error.fail");
                    toastr.error(msg, title);
                });
            return false;
        };
        _self.save = function () {
            $http.put("/group/update", _self.groupSelected)
                .then(function (res) {
                    if (res.status != 200) {
                        var msg = i18n.t("alerts:error.save_profile"),
                            title = i18n.t("alerts:error.fail");
                        toastr.error(msg, title);
                        return;
                    }

                    _self.groupsList[_self.groupSelected.index] = _self.groupSelected;
                    var msg = i18n.t("alerts:success.save_profile"),
                        title = i18n.t("alerts:success.success");
                    toastr.success(msg, title);
                    $(".modal").modal("hide");
                })
                .catch(function () {
                    var msg = i18n.t("alerts:error.save_profile"),
                        title = i18n.t("alerts:error.fail");
                    toastr.error(msg, title);
                });
            return false;
        };
        _self.setPermissions = function () {
            var send = { GroupId: _self.groupSelected.Id, PermissionsIds: _self.groupSelected.Permissions };
            $http.post("/group/UpdatePermissions", send)
                .then(function (res) {
                    if (res.status != 200) {
                        var msg = i18n.t("alerts:error.save_profile_permissions"),
                            title = i18n.t("alerts:error.fail");
                        toastr.error(msg, title);
                        return;
                    }
                    _self.groupsList[_self.groupSelected.index] = _self.groupSelected;
                    var msg = i18n.t("alerts:success.save_profile_permissions"),
                        title = i18n.t("alerts:success.success");
                    toastr.success(msg, title);
                    $(".modal").modal("hide");
                })
                .catch(function () {
                    var msg = i18n.t("alerts:error.save_profile_permissions"),
                        title = i18n.t("alerts:error.fail");
                    toastr.error(msg, title);
                });
            return false;
        };
        _self.givePermissions = function () {
            var send = { GroupId: _self.groupSelected.Id, UsersIds: _self.groupSelected.Users };
            $http.post("/group/UpdateUsers", send)
                .then(function (res) {
                    if (res.status != 200) {
                        var msg = i18n.t("alerts:error.save_profile_users"),
                            title = i18n.t("alerts:error.fail");
                        toastr.error(msg, title);
                        return;
                    }

                    _self.groupsList[_self.groupSelected.index] = _self.groupSelected;
                    var msg = i18n.t("alerts:success.save_profile_users"),
                        title = i18n.t("alerts:success.success");
                    toastr.success(msg, title);
                    $(".modal").modal("hide");
                })
                .catch(function () {
                    var msg = i18n.t("alerts:error.save_profile_users"),
                        title = i18n.t("alerts:error.fail");
                    toastr.error(msg, title);
                });
        };
    }
})();