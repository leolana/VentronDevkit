(function () {
    'use strict';

    /* Setup general page controller */
    angular
        .module('ATB')
        .controller('GeneralPageController', GeneralPageController);

    GeneralPageController.$inject = ['$rootScope', '$scope', 'settings'];
    function GeneralPageController($rootScope, $scope, settings) {
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