(function () {
    'use strict';

    /* Setup Layout Part - Sidebar */
    angular
        .module('ATB')
        .controller('SidebarController', SidebarController);

    SidebarController.$inject = ['$state', '$scope'];
    function SidebarController($state, $scope) {
        $scope.$on('$includeContentLoaded', function () {
            Layout.initSidebar($state); // init sidebar
        });
    }
})();