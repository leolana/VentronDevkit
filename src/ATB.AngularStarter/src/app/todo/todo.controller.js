(function () {
    'use strict';

    angular
        .module('ATB')
        .controller('TodoController', TodoController);

    TodoController.$inject = ['$rootScope', '$scope', '$http', '$timeout'];
    function TodoController($rootScope, $scope, $http, $timeout) {
        $scope.$on('$viewContentLoaded', function () {
            App.initAjax(); // initialize core components        
        });

        // set sidebar closed and body solid layout mode
        $rootScope.settings.layout.pageContentWhite = true;
        $rootScope.settings.layout.pageBodySolid = true;
        $rootScope.settings.layout.pageSidebarClosed = true;
    }
})();