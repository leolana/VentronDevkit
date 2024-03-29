(function () {
    'use strict';

    angular
        .module('ATB')
        .controller('UserProfileController', UserProfileController);

    UserProfileController.$inject = ['$rootScope', '$scope', '$http', '$timeout', '$state'];
    function UserProfileController($rootScope, $scope, $http, $timeout, $state) {
        $scope.$on('$viewContentLoaded', function () {
            App.initAjax(); // initialize core components
            Layout.setAngularJsSidebarMenuActiveLink('set', $('#sidebar_menu_link_profile'), $state); // set profile link active in sidebar menu 
        });

        // set sidebar closed and body solid layout mode
        $rootScope.settings.layout.pageBodySolid = true;
        $rootScope.settings.layout.pageSidebarClosed = true;
    }
})();