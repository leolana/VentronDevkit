(function () {
    'use strict';

    /***
    Layout Partials.
    By default the partials are loaded through AngularJS ng-include directive. In case they loaded in server side(e.g: PHP include function) then below partial 
    initialization can be disabled and Layout.init() should be called on page load complete as explained above.
    ***/

    /* Setup Layout Part - Header */
    angular
        .module('Module')
        .controller('HeaderController', HeaderController);

    HeaderController.$inject = ['$scope'];
    function HeaderController($scope) {
        $scope.$on('$includeContentLoaded', function () {
            Layout.initHeader(); // init header
        });
    }
})();