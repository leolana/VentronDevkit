(function () {
    'use strict';

    angular
        .module('ATB')
        .controller('QuickSidebarController', QuickSidebarController);

    QuickSidebarController.$inject = ['$scope'];
    function QuickSidebarController($scope) {
        $scope.$on('$includeContentLoaded', function () {
            setTimeout(function () {
                QuickSidebar.init(); // init quick sidebar        
            }, 2000);
        });
    }
})();