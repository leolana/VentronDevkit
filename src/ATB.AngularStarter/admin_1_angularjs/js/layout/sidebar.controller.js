(function () {
    'use strict';

    /* Setup Layout Part - Sidebar */
    angular
        .module('ATB')
        .controller('SidebarController', SidebarController);

    SidebarController.$inject = ['$scope'];
    function SidebarController($scope) {
        $scope.$on('$includeContentLoaded', function () {
            Layout.initSidebar($state); // init sidebar
        });
    }
})();