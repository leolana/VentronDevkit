(function () {
    'use strict';

    angular
        .module('ATB')
        .controller('FooterController', FooterController);

    FooterController.$inject = ['$scope'];
    function FooterController($scope) {
        $scope.$on('$includeContentLoaded', function () {
            Layout.initFooter(); // init footer
        });
    }
})();