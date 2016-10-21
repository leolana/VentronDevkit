(function() {
    "use strict";

    angular.module("inspinia")
        .factory("userService", ["$http", function ($http) {
                return (function(service) {
                           service.get = function() {
                               return $http.get("/User/List")
                                           .then(function(response) {
                                               return response.data;
                                           })
                                           .catch(function() {
                                               var message = i18n.t("alerts:error.list_user");
                                               var title = i18n.t("alerts:error.error");

                                               toastr.error(message, title);

                                           });
                           };

                           return service;
                       }({}));
            }
        ]);
}());