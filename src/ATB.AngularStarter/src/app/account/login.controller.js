(function () {
    'use strict';

    angular
        .module('ATB')
        .controller('loginController', loginController);

    loginController.$inject = ['$rootScope', '$scope', '$http', '$timeout', '$location'];
    function loginController($rootScope, $scope, $http, $timeout, $location) {
        $scope.$on('$viewContentLoaded', function () {
            // initialize core components
            App.initComponents(); // init core components
            Layout.init(); //
            App.initAjax();
        });

        var vm = this;
        var dataService = $http;

        vm.loginViewState = {
            isUserLogging: false,
            isUserSignup: false,
            isUserRecoveringPassword: false,
            signupStep: 1
        };

        vm.loginData = {
            "email": "",
            "password": ""
        };

        vm.login = function () {

            if (vm.loginData.email === "") {
                NotificationService.error("Atenção", "E-mail é obrigatório.", true);
                return;
            }

            if (vm.loginData.password === "") {
                NotificationService.error("Atenção", "Senha é obrigatória.", true);
                return;
            }

            // authService.login(vm.loginData)
            //     .then(function (response) {
            //         // vm.closeLogin();
            //         vm.loginData.email = "";
            //         vm.loginData.password = "";
            //         // NotificationService.success("Atenção", "ENTROU.", true);
            //         $location.path('/dashboard');

            //     },
            //     function (err) {
            //         NotificationService.error("Atenção", err.error_description, false);
            //     });
        };

        // set sidebar closed and body solid layout mode
        // $rootScope.settings.layout.pageContentWhite = true;
        // $rootScope.settings.layout.pageBodySolid = false;
        // $rootScope.settings.layout.pageSidebarClosed = false;
    }
})();