(function () {
    "use strict";

    angular.module("ATB")
        .factory("principal",
        [
            "$q", "$http", "authIdentity", "authToken", "authRole",
            function ($q, $http, authIdentity, authToken, authRole) {
                var _identity = undefined;
                var authenticated = false;

                return (function (principal) {
                    principal.isIdentityResolved = function () {
                        return angular.isDefined(_identity);
                    };

                    principal.isAuthenticated = function () {
                        return authenticated && !authIdentity.isExpired();
                    };

                    principal.isInRole = function (role) {
                        if (!authenticated || !_identity.roles) return false;

                        return _identity.roles.indexOf(role) != -1;
                    };

                    principal.isInAnyRole = function (roles) {
                        if (!authenticated || !_identity.roles) return false;

                        for (var i = 0; i < roles.length; i++) {
                            if (this.isInRole(roles[i])) return true;
                        }

                        return false;
                    };

                    principal.authenticate = function (identity) {
                        var deferred = $q.defer();

                        _identity = identity;
                        authenticated = identity != null;

                        if (!identity) {
                            authIdentity.remove();
                            _identity = undefined;
                            deferred.resolve();
                        } else {
                            authIdentity.set(identity);

                            authRole.get(_identity.userName)
                                    .then(function (res) {
                                        identity.roles = res.data;
                                        _identity = identity;

                                        authIdentity.set(identity);
                                        deferred.resolve();
                                    })
                                    .catch(function() { console.log("Não foi possível obter as roles"); });
                        }

                        return deferred.promise;
                    };

                    principal.identity = function (force) {
                        var deferred = $q.defer();

                        if (force === true) _identity = undefined;

                        if (principal.isIdentityResolved()) {
                            deferred.resolve(_identity);

                            return deferred.promise;
                        }
                        
                        _identity = authIdentity.get();
                        return principal.authenticate(_identity);
                    };

                    principal.refresh = function () {
                        var deferred = $q.defer();

                        if (!principal.isIdentityResolved()) {
                            deferred.resolve();
                            return deferred.promise;
                        }

                        authToken.refresh(_identity)
                                 .success(function (data) {
                                    if (!!data.error) {
                                        principal.dispose();
                                        deferred.reject(data);

                                        return;
                                    }

                                     principal.authenticate(data)
                                              .then(function(data) {
                                                  deferred.resolve(data);
                                              });
                                 });

                        return deferred.promise;
                    };

                    principal.getUserNameLogged = function () {
                        var identity = _identity || authIdentity.get();

                        return !!identity ? identity.userName : "";
                    };

                    principal.dispose = function() {
                        authIdentity.remove();
                        _identity = undefined;
                    };

                    return principal;
                }({}));
            }
        ])
        .factory("authIdentity",
            function () {
                return (function (authIdentity) {
                    authIdentity.get = function () {
                        return angular.fromJson(localStorage.getItem("user.identity"));
                    };

                    authIdentity.set = function (identity) {
                        localStorage.setItem("user.identity", angular.toJson(identity));
                    };

                    authIdentity.remove = function () {
                        localStorage.removeItem("user.identity");
                    };

                    authIdentity.isExpired = function() {
                        var identity = authIdentity.get();

                        if (!identity) return true;

                        var expiresIn = (new Date(identity[".expires"])).getTime();
                        var nowSeconds = (new Date()).getTime();

                        return expiresIn < nowSeconds;
                    };

                    return authIdentity;
                }({}));
            })
        .factory("authToken", function ($http) {
            return (function (authToken) {
                authToken.get = function (username, password) {
                    return $http({
                                url: "/Token",
                                method: "POST",
                                data: $.param({
                                    "grant_type": "password",
                                    username: username,
                                    password: password
                                }),
                                headers: {
                                    'Accept': "application/json",
                                    'Content-Type': "application/x-www-form-urlencoded; charset=utf-8"
                                }
                            });
                };

                authToken.refresh = function (identity) {
                    return $http({
                                url: "/Token",
                                method: "POST",
                                data: $.param({
                                    "grant_type": "refresh_token",
                                    refresh_token: identity.refresh_token,
                                    client_id: ""
                                }),
                                headers: {
                                    'Accept': "application/json",
                                    'Content-Type': "application/x-www-form-urlencoded; charset=utf-8"
                                }
                           });
                };

                return authToken;
            }({}));
        })
        .factory("authRole", function ($http) {
            return (function (authRole) {
                authRole.get = function (userName) {
                    return $http({
                            url: "/Permission/GetByUserName",
                                method: "GET",
                                params: { username: userName }
                            });
                };

                return authRole;
            }({}));
        });
}());