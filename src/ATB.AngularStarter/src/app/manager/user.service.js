(function () {
    'use strict';

    angular
        .module('ATB')
        .factory('userService', userService);

    userService.$inject = ['$http'];
    function service($http) {
        var service = {
            get: get
        };

        return service;

        function get() {
            return $http.get("/User/List")
                .then(function (response) {
                    return response.data;
                })
                .catch(function () {
                    var message = i18n.t("alerts:error.list_user");
                    var title = i18n.t("alerts:error.error");

                    toastr.error(message, title);

                });
        }
    }
})();