(function () {
    'use strict';

    angular
        .module('ATB')
        .factory('apiInterceptor', apiInterceptor);

    apiInterceptor.$inject = ["$rootScope", "$location", "authIdentity"];

    function apiInterceptor($rootScope, $location, authIdentity) {
        var service = {
            request: request,
            responseError: responseError
        };

        return service;

        function request(config) {
            var identity = authIdentity.get();

            if (!!identity && !!identity.access_token) {
                config.headers.authorization = "Bearer " + identity.access_token;
            }

            Pace.restart();

            return config;
        }

        function responseError(response) {
            if (response.status === 403) {
                $rootScope.$broadcast("badRequest");
                var msgT = i18n.t("alerts:interceptor.bad_request")
                toastr.warning("", msgT, { closeButton: true });
            }

            if (response.status === 401) {
                $rootScope.$broadcast("unauthorized");
                var msgT = i18n.t("alerts:interceptor.unauthorized");
                toastr.error("", msgT, { closeButton: true });
            }

            if (response.status === 404) {
                $rootScope.$broadcast("notFound");
                var msgT = i18n.t("alerts:interceptor.not_found")
                toastr.error("", msgT, { closeButton: true });
            }

            if (response.status === 500) {
                $rootScope.exception = response.data;
                $rootScope.$broadcast("internalServerError");
                $location.url("/index/500");
            }

            return response;
        }
    }
})();