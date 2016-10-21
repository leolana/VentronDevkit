(function () {
    'use strict';

    angular
        .module('ATB')
        .directive('cellButton', cellButton);

    cellButton.$inject = ["$location"];
    function cellButton($location) {
        // Usage:
        //
        // Creates:
        //
        var directive = {
            bindToController: true,
            controller: CellButtonController,
            controllerAs: 'vm',
            restrict: "E",
            scope: { id: "@" },
            replace: true,
            template: "<div class='ui-grid-cell-contents'>" +
                        "<button class='btn btn-success btn-xs' ng-click='editar()'><i class='fa fa-pencil'></i></button>" +
                      "</div>",
        };

        return directive;
    }
    /* @ngInject */
    function CellButtonController($scope) {
        $scope.editar = function () {
            $location.search().id = $scope.id;
            $location.path("/index/user");
        };
    }
})();