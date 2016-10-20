(function () {
    'use strict';

    angular
        .module('ATB')
        .controller('ThemePanelController', ThemePanelController);

    ThemePanelController.$inject = ['$scope'];
    function ThemePanelController($scope) {

        $scope.$on('$includeContentLoaded', function () {
            Demo.init(); // init theme panel
        });

    }
})();