(function () {
    'use strict';

    angular
        .module('ATB')
        .controller('DashboardController', DashboardController);

    DashboardController.$inject = ['$rootScope', '$scope', '$http', '$timeout'];
    function DashboardController($rootScope, $scope, $http, $timeout) {
        debugger;
        $scope.$on('$viewContentLoaded', function () {
            // initialize core components
            App.initAjax();
        });

        // set sidebar closed and body solid layout mode
        $rootScope.settings.layout.pageContentWhite = true;
        $rootScope.settings.layout.pageBodySolid = false;
        $rootScope.settings.layout.pageSidebarClosed = false;
    }
})();