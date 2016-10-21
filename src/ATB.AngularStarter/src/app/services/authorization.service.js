(function () {
    "use strict";

    angular.module("ATB")
        .factory("authorization", ["$q", "$rootScope", "$state", "principal", function ($q, $rootScope, $state, principal) {
            return {
                authorize: function () {
                    var deferred = $q.defer();

                    principal.identity()
                             .then(function () {
                                 var isAuthenticated = principal.isAuthenticated();
                                     
                                 if (!isAuthenticated) {
                                     deferred.reject();
                                     principal.dispose();
                                     $state.go("account.login");
                                 }
                                     
                                 if ($rootScope.toState.data.roles &&
                                     $rootScope.toState.data.roles.length > 0 &&
                                     !principal.isInAnyRole($rootScope.toState.data.roles)) {
                                     deferred.reject();
                                     $state.go("accessdenied");
                                 }

                                 deferred.resolve();
                             });

                    return deferred.promise;
                }
            };
        }
        ]);
}());