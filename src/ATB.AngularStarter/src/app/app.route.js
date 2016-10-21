(function () {
    'use strict';

    /* Setup Rounting For All Pages */
    angular
        .module('ATB')
        .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
            // Redirect any unmatched url
            $urlRouterProvider.otherwise("/dashboard");

            $stateProvider
                //Index
                .state('index', {
                    templateUrl: "layout/content.html",
                    abstract: true,
                    resolve: {
                        deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                            return $ocLazyLoad.load({
                                name: 'ATB',
                                insertBefore: '#ng_load_plugins_before', // load the above css files before a LINK element with this ID. Dynamic CSS files must be loaded between core and theme css files
                                files: [
                                    '../assets/global/plugins/morris/morris.css',
                                    '../assets/global/plugins/morris/morris.min.js',
                                    '../assets/global/plugins/morris/raphael-min.js',
                                    '../assets/global/plugins/jquery.sparkline.min.js',
                                    '../assets/pages/scripts/dashboard.min.js',

                                    '../assets/global/plugins/fuelux/js/spinner.min.js',
                                    '../assets/global/plugins/bootstrap-fileinput/bootstrap-fileinput.js',
                                    '../assets/global/plugins/jquery-inputmask/jquery.inputmask.bundle.min.js',
                                    '../assets/global/plugins/jquery.input-ip-address-control-1.0.min.js',
                                    '../assets/global/plugins/bootstrap-pwstrength/pwstrength-bootstrap.min.js',
                                    '../assets/global/plugins/bootstrap-switch/js/bootstrap-switch.min.js',
                                    '../assets/global/plugins/bootstrap-maxlength/bootstrap-maxlength.min.js',
                                    '../assets/global/plugins/bootstrap-touchspin/bootstrap.touchspin.js',
                                    '../assets/global/plugins/typeahead/handlebars.min.js',
                                    '../assets/global/plugins/typeahead/typeahead.bundle.min.js',
                                    '../assets/pages/scripts/components-form-tools-2.min.js',

                                    '../assets/global/plugins/bootstrap-select/css/bootstrap-select.min.css',
                                    '../assets/global/plugins/select2/css/select2.min.css',
                                    '../assets/global/plugins/select2/css/select2-bootstrap.min.css',

                                    '../assets/global/plugins/bootstrap-select/js/bootstrap-select.min.js',
                                    '../assets/global/plugins/select2/js/select2.full.min.js',
                                    '../assets/pages/scripts/components-bootstrap-select.min.js',
                                    '../assets/pages/scripts/components-select2.min.js',

                                    '../assets/global/plugins/bootstrap-fileinput/bootstrap-fileinput.css',
                                    '../assets/global/plugins/bootstrap-switch/css/bootstrap-switch.min.css',
                                    '../assets/global/plugins/bootstrap-markdown/css/bootstrap-markdown.min.css',
                                    '../assets/global/plugins/typeahead/typeahead.css',

                                    '../assets/global/plugins/fuelux/js/spinner.min.js',
                                    '../assets/global/plugins/bootstrap-fileinput/bootstrap-fileinput.js',
                                    '../assets/global/plugins/jquery-inputmask/jquery.inputmask.bundle.min.js',
                                    '../assets/global/plugins/jquery.input-ip-address-control-1.0.min.js',
                                    '../assets/global/plugins/bootstrap-pwstrength/pwstrength-bootstrap.min.js',
                                    '../assets/global/plugins/bootstrap-switch/js/bootstrap-switch.min.js',
                                    '../assets/global/plugins/bootstrap-maxlength/bootstrap-maxlength.min.js',
                                    '../assets/global/plugins/bootstrap-touchspin/bootstrap.touchspin.js',
                                    '../assets/global/plugins/typeahead/handlebars.min.js',
                                    '../assets/global/plugins/typeahead/typeahead.bundle.min.js',
                                    '../assets/pages/scripts/components-form-tools-2.min.js',
                                ]
                            });
                        }]
                    }
                })
                //Login
                .state('account', {
                    url: "/login",
                    templateUrl: "app/account/login.html",
                    controller: "loginController",
                    resolve: {
                        deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                            return $ocLazyLoad.load([{
                                name: 'ATB',
                                insertBefore: '#ng_load_plugins_before', // load the above css files before '#ng_load_plugins_before'
                                files: [
                                    'app/account/login.controller.js'
                                ]
                            }]);
                        }]
                    }
                })

                // Dashboard
                .state('index.dashboard', {
                    url: "/dashboard",
                    templateUrl: "app/dashboard/dashboard.html",
                    data: { pageTitle: 'Admin Dashboard Template' },
                    controller: "DashboardController",
                    resolve: {
                        deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                            return $ocLazyLoad.load({
                                name: 'ATB',
                                insertBefore: '#ng_load_plugins_before', // load the above css files before a LINK element with this ID. Dynamic CSS files must be loaded between core and theme css files
                                files: [
                                    '../assets/global/plugins/morris/morris.css',
                                    '../assets/global/plugins/morris/morris.min.js',
                                    '../assets/global/plugins/morris/raphael-min.js',
                                    '../assets/global/plugins/jquery.sparkline.min.js',

                                    '../assets/pages/scripts/dashboard.min.js',
                                    'app/dashboard/dashboard.controller.js',
                                ]
                            });
                        }]
                    }
                })

                // Blank Page
                .state('index.blank', {
                    url: "/blank",
                    templateUrl: "app/sample/blank/blank.html",
                    data: { pageTitle: 'Blank Page Template' },
                    controller: "BlankController",
                    resolve: {
                        deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                            return $ocLazyLoad.load({
                                name: 'ATB',
                                insertBefore: '#ng_load_plugins_before', // load the above css files before a LINK element with this ID. Dynamic CSS files must be loaded between core and theme css files
                                files: [
                                    'app/sample/blank/blank.controller.js'
                                ]
                            });
                        }]
                    }
                })

                // AngularJS plugins
                .state('index.fileupload', {
                    url: "/file_upload",
                    templateUrl: "app/sample/file_upload.html",
                    data: { pageTitle: 'AngularJS File Upload' },
                    controller: "GeneralPageController",
                    resolve: {
                        deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                            return $ocLazyLoad.load([{
                                name: 'angularFileUpload',
                                files: [
                                    '../assets/global/plugins/angularjs/plugins/angular-file-upload/angular-file-upload.min.js',
                                ]
                            }, {
                                name: 'ATB',
                                files: [
                                    'app/sample/general-page.controller.js'
                                ]
                            }]);
                        }]
                    }
                })

                // UI Select
                .state('index.uiselect', {
                    url: "/ui_select",
                    templateUrl: "app/sample/ui-select/ui_select.html",
                    data: { pageTitle: 'AngularJS Ui Select' },
                    controller: "UISelectController",
                    resolve: {
                        deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                            return $ocLazyLoad.load([{
                                name: 'ui.select',
                                insertBefore: '#ng_load_plugins_before', // load the above css files before '#ng_load_plugins_before'
                                files: [
                                    '../assets/global/plugins/angularjs/plugins/ui-select/select.min.css',
                                    '../assets/global/plugins/angularjs/plugins/ui-select/select.min.js'
                                ]
                            }, {
                                name: 'ATB',
                                files: [
                                    'app/sample/ui-select/ui-select.controller.js'
                                ]
                            }]);
                        }]
                    }
                })

                // UI Bootstrap
                .state('index.uibootstrap', {
                    url: "/ui_bootstrap",
                    templateUrl: "app/sample/ui_bootstrap.html",
                    data: { pageTitle: 'AngularJS UI Bootstrap' },
                    controller: "GeneralPageController",
                    resolve: {
                        deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                            return $ocLazyLoad.load([{
                                name: 'ATB',
                                files: [
                                    'app/sample/general-page.controller.js'
                                ]
                            }]);
                        }]
                    }
                })

                // Tree View
                .state('index.tree', {
                    url: "/tree",
                    templateUrl: "app/sample/tree.html",
                    data: { pageTitle: 'jQuery Tree View' },
                    controller: "GeneralPageController",
                    resolve: {
                        deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                            return $ocLazyLoad.load([{
                                name: 'ATB',
                                insertBefore: '#ng_load_plugins_before', // load the above css files before '#ng_load_plugins_before'
                                files: [
                                    '../assets/global/plugins/jstree/dist/themes/default/style.min.css',

                                    '../assets/global/plugins/jstree/dist/jstree.min.js',
                                    '../assets/pages/scripts/ui-tree.min.js',
                                    'app/sample/general-page.controller.js'
                                ]
                            }]);
                        }]
                    }
                })

                // Form Tools
                .state('index.formtools', {
                    url: "/form-tools",
                    templateUrl: "app/sample/form_tools.html",
                    data: { pageTitle: 'Form Tools' },
                    controller: "GeneralPageController",
                    resolve: {
                        deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                            return $ocLazyLoad.load([{
                                name: 'ATB',
                                insertBefore: '#ng_load_plugins_before', // load the above css files before '#ng_load_plugins_before'
                                files: [
                                    '../assets/global/plugins/bootstrap-fileinput/bootstrap-fileinput.css',
                                    '../assets/global/plugins/bootstrap-switch/css/bootstrap-switch.min.css',
                                    '../assets/global/plugins/bootstrap-markdown/css/bootstrap-markdown.min.css',
                                    '../assets/global/plugins/typeahead/typeahead.css',

                                    '../assets/global/plugins/fuelux/js/spinner.min.js',
                                    '../assets/global/plugins/bootstrap-fileinput/bootstrap-fileinput.js',
                                    '../assets/global/plugins/jquery-inputmask/jquery.inputmask.bundle.min.js',
                                    '../assets/global/plugins/jquery.input-ip-address-control-1.0.min.js',
                                    '../assets/global/plugins/bootstrap-pwstrength/pwstrength-bootstrap.min.js',
                                    '../assets/global/plugins/bootstrap-switch/js/bootstrap-switch.min.js',
                                    '../assets/global/plugins/bootstrap-maxlength/bootstrap-maxlength.min.js',
                                    '../assets/global/plugins/bootstrap-touchspin/bootstrap.touchspin.js',
                                    '../assets/global/plugins/typeahead/handlebars.min.js',
                                    '../assets/global/plugins/typeahead/typeahead.bundle.min.js',
                                    '../assets/pages/scripts/components-form-tools-2.min.js',

                                    'app/sample/general-page.controller.js'
                                ]
                            }]);
                        }]
                    }
                })

                // Date & Time Pickers
                .state('index.pickers', {
                    url: "/pickers",
                    templateUrl: "app/sample/pickers.html",
                    data: { pageTitle: 'Date & Time Pickers' },
                    controller: "GeneralPageController",
                    resolve: {
                        deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                            return $ocLazyLoad.load([{
                                name: 'ATB',
                                insertBefore: '#ng_load_plugins_before', // load the above css files before '#ng_load_plugins_before'
                                files: [
                                    '../assets/global/plugins/clockface/css/clockface.css',
                                    '../assets/global/plugins/bootstrap-datepicker/css/bootstrap-datepicker3.min.css',
                                    '../assets/global/plugins/bootstrap-timepicker/css/bootstrap-timepicker.min.css',
                                    '../assets/global/plugins/bootstrap-colorpicker/css/colorpicker.css',
                                    '../assets/global/plugins/bootstrap-datetimepicker/css/bootstrap-datetimepicker.min.css',

                                    '../assets/global/plugins/bootstrap-datepicker/js/bootstrap-datepicker.min.js',
                                    '../assets/global/plugins/bootstrap-timepicker/js/bootstrap-timepicker.min.js',
                                    '../assets/global/plugins/clockface/js/clockface.js',
                                    '../assets/global/plugins/bootstrap-colorpicker/js/bootstrap-colorpicker.js',
                                    '../assets/global/plugins/bootstrap-datetimepicker/js/bootstrap-datetimepicker.min.js',

                                    '../assets/pages/scripts/components-date-time-pickers.min.js',

                                    'app/sample/general-page.controller.js'
                                ]
                            }]);
                        }]
                    }
                })

                // Custom Dropdowns
                .state('index.dropdowns', {
                    url: "/dropdowns",
                    templateUrl: "app/sample/dropdowns.html",
                    data: { pageTitle: 'Custom Dropdowns' },
                    controller: "GeneralPageController",
                    resolve: {
                        deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                            return $ocLazyLoad.load([{
                                name: 'ATB',
                                insertBefore: '#ng_load_plugins_before', // load the above css files before '#ng_load_plugins_before'
                                files: [
                                    '../assets/global/plugins/bootstrap-select/css/bootstrap-select.min.css',
                                    '../assets/global/plugins/select2/css/select2.min.css',
                                    '../assets/global/plugins/select2/css/select2-bootstrap.min.css',

                                    '../assets/global/plugins/bootstrap-select/js/bootstrap-select.min.js',
                                    '../assets/global/plugins/select2/js/select2.full.min.js',

                                    '../assets/pages/scripts/components-bootstrap-select.min.js',
                                    '../assets/pages/scripts/components-select2.min.js',

                                    'app/sample/general-page.controller.js'
                                ]
                            }]);
                        }]
                    }
                })

                // Advanced Datatables
                .state('index.datatablesmanaged', {
                    url: "/datatables/managed",
                    templateUrl: "app/sample/datatables/managed.html",
                    data: { pageTitle: 'Advanced Datatables' },
                    controller: "GeneralPageController",
                    resolve: {
                        deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                            return $ocLazyLoad.load({
                                name: 'ATB',
                                insertBefore: '#ng_load_plugins_before', // load the above css files before '#ng_load_plugins_before'
                                files: [
                                    '../assets/global/plugins/datatables/datatables.min.css',
                                    '../assets/global/plugins/datatables/plugins/bootstrap/datatables.bootstrap.css',

                                    '../assets/global/plugins/datatables/datatables.all.min.js',

                                    '../assets/pages/scripts/table-datatables-managed.min.js',

                                    'app/sample/general-page.controller.js'
                                ]
                            });
                        }]
                    }
                })

                // Ajax Datetables
                .state('index.datatablesajax', {
                    url: "/datatables/ajax",
                    templateUrl: "app/sample/datatables/ajax.html",
                    data: { pageTitle: 'Ajax Datatables' },
                    controller: "GeneralPageController",
                    resolve: {
                        deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                            return $ocLazyLoad.load({
                                name: 'ATB',
                                insertBefore: '#ng_load_plugins_before', // load the above css files before '#ng_load_plugins_before'
                                files: [
                                    '../assets/global/plugins/datatables/datatables.min.css',
                                    '../assets/global/plugins/datatables/plugins/bootstrap/datatables.bootstrap.css',
                                    '../assets/global/plugins/bootstrap-datepicker/css/bootstrap-datepicker3.min.css',

                                    '../assets/global/plugins/datatables/datatables.all.min.js',
                                    '../assets/global/plugins/bootstrap-datepicker/js/bootstrap-datepicker.min.js',
                                    '../assets/global/scripts/datatable.js',

                                    'app/sample/datatables/table-ajax.js',
                                    'app/sample/general-page.controller.js'
                                ]
                            });
                        }]
                    }
                })

                // User Profile
                .state("index.profile", {
                    url: "/profile",
                    templateUrl: "app/profile/main.html",
                    data: { pageTitle: 'User Profile' },
                    controller: "UserProfileController",
                    resolve: {
                        deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                            return $ocLazyLoad.load({
                                name: 'ATB',
                                insertBefore: '#ng_load_plugins_before', // load the above css files before '#ng_load_plugins_before'
                                files: [
                                    '../assets/global/plugins/bootstrap-fileinput/bootstrap-fileinput.css',
                                    '../assets/pages/css/profile.css',

                                    '../assets/global/plugins/jquery.sparkline.min.js',
                                    '../assets/global/plugins/bootstrap-fileinput/bootstrap-fileinput.js',

                                    '../assets/pages/scripts/profile.min.js',

                                    'app/profile/user-profile.controller.js'
                                ]
                            });
                        }]
                    }
                })

                // User Profile Dashboard
                .state("profile.dashboard", {
                    url: "/dashboard",
                    templateUrl: "app/profile/dashboard.html",
                    data: { pageTitle: 'User Profile' }
                })

                // User Profile Account
                .state("profile.account", {
                    url: "/account",
                    templateUrl: "app/profile/account.html",
                    data: { pageTitle: 'User Account' }
                })

                // User Profile Help
                .state("profile.help", {
                    url: "/help",
                    templateUrl: "app/profile/help.html",
                    data: { pageTitle: 'User Help' }
                })

                // Todo
                .state('index.todo', {
                    url: "/todo",
                    templateUrl: "app/todo/todo.html",
                    data: { pageTitle: 'Todo' },
                    controller: "TodoController",
                    resolve: {
                        deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                            return $ocLazyLoad.load({
                                name: 'ATB',
                                insertBefore: '#ng_load_plugins_before', // load the above css files before '#ng_load_plugins_before'
                                files: [
                                    '../assets/global/plugins/bootstrap-datepicker/css/bootstrap-datepicker3.min.css',
                                    '../assets/apps/css/todo-2.css',
                                    '../assets/global/plugins/select2/css/select2.min.css',
                                    '../assets/global/plugins/select2/css/select2-bootstrap.min.css',

                                    '../assets/global/plugins/select2/js/select2.full.min.js',

                                    '../assets/global/plugins/bootstrap-datepicker/js/bootstrap-datepicker.min.js',

                                    '../assets/apps/scripts/todo-2.min.js',

                                    'app/todo/todo.controller.js'
                                ]
                            });
                        }]
                    }
                })

                //manager
                .state("index.register",
                {
                    url: "/register",
                    templateUrl: "app/manager/user-create.html",
                    data: {
                        pageTitle: "",
                        roles: [roles.manageUser]
                    }
                })
                .state("index.users",
                {
                    url: "/users",
                    templateUrl: "app/manager/user.html",
                    data: {
                        pageTitle: "",
                        roles: [roles.manageUser]
                    }
                })
                .state("index.user",
                {
                    url: "/user",
                    templateUrl: "app/manager/user-edit.html",
                    data: {
                        pageTitle: "",
                        roles: [roles.manageUser]
                    }
                })
                .state("index.groups",
                {
                    url: "/groups",
                    templateUrl: "app/manager/groups.html",
                    data: {
                        pageTitle: "",
                        roles: [roles.managerProfile]
                    }
                });

        }]);

    /* Init global settings and run the app */
    angular
        .module('ATB')
        .run(["$rootScope", "settings", "$state", function ($rootScope, settings, $state) {
            $rootScope.$state = $state; // state to be accessed from view
            $rootScope.$settings = settings; // state to be accessed from view
        }]);


})();