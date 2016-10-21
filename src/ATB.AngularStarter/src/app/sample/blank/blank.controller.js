(function () {
    'use strict';

    /* Setup blank page controller */
    angular
        .module('ATB')
        .controller('BlankController', BlankController);

    BlankController.$inject = ['$rootScope', '$scope', 'settings'];
    function BlankController($rootScope, $scope, settings) {

        $scope.$on('$viewContentLoaded', function () {
            // initialize core components
            App.initAjax();

            // set default layout mode
            $rootScope.settings.layout.pageContentWhite = true;
            $rootScope.settings.layout.pageBodySolid = false;
            $rootScope.settings.layout.pageSidebarClosed = false;
        });
    }
})();