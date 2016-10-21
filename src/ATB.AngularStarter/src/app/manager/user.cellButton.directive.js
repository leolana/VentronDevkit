(function() {
    "use strict";

    angular.module("inspinia")
        .directive("cellButton", ["$location", function($location) {
                return {
                    restrict: "E",
                    scope: { id: "@" },
                    replace: true,
                    template: "<div class='ui-grid-cell-contents'>" +
                                  "<button class='btn btn-success btn-xs' ng-click='editar()'><i class='fa fa-pencil'></i></button>" +
                              "</div>",
                    controller: function($scope) {
                        $scope.editar = function() {
                            $location.search().id = $scope.id;
                            $location.path("/index/user");
                        };
                    }
                };
            }
        ]);
}());