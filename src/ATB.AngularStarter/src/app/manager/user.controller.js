(function () {
    "use strict";

    angular.module("inspinia")
        .controller("UserController", function ($scope, $location, userService) {
            var self = this;

            userService.get()
                .then(function (data) {
                    self.list = data;
                    self.gridOptions.data = data;
                });

            $scope.edit = function (id) {
                $location.search().id = id;
                $location.path("/index/user");
            };

            self.gridOptions = {
                paginationPageSizes: [5, 10, 25],
                paginationPageSize: 10,
                columnDefs: [
                    { field: "Name", displayName: "Nome" },
                    { field: "Email", displayName: "E-mail" },
                    { field: "Type", displayName: "Tipo" },
                    {
                        field: "Status",
                        displayName: "Status",
                        cellTemplate: "<div class='ui-grid-cell-contents'><status-label active={{row.entity.Status}} /></div>"
                    },
                    {
                        field: "Actions",
                        displayName: "",
                        enableCellEdit: false,
                        cellTemplate: "<cell-button id='{{row.entity.Id}}' />"
                    }
                ]
            };
        });
}());