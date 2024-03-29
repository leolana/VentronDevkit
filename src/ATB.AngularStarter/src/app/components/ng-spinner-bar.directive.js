(function () {
    'use strict';

    angular
        .module('ATB')
        .directive('ngSpinnerBar', ngSpinnerBar);

    ngSpinnerBar.$inject = ['$rootScope', '$state'];
    function ngSpinnerBar($rootScope, $state) {
        // Usage: 
        //
        // Creates: Route State Load Spinner(used on page or content load)
        //
        var directive = {
            link: link
        };

        return directive;

        function link(scope, element, attrs) {
            // by defult hide the spinner bar
            element.addClass('hide'); // hide spinner bar by default

            // display the spinner bar whenever the route changes(the content part started loading)
            $rootScope.$on('$stateChangeStart', function () {
                element.removeClass('hide'); // show spinner bar
            });

            // hide the spinner bar on rounte change success(after the content loaded)
            $rootScope.$on('$stateChangeSuccess', function () {
                element.addClass('hide'); // hide spinner bar
                $('body').removeClass('page-on-load'); // remove page loading indicator
                Layout.setAngularJsSidebarMenuActiveLink('match', null, $state); // activate selected link in the sidebar menu

                // auto scorll to page top
                setTimeout(function () {
                    App.scrollTop(); // scroll to the top on content load
                }, $rootScope.settings.layout.pageAutoScrollOnLoad);
            });

            // handle errors
            $rootScope.$on('$stateNotFound', function () {
                element.addClass('hide'); // hide spinner bar
            });

            // handle errors
            $rootScope.$on('$stateChangeError', function () {
                element.addClass('hide'); // hide spinner bar
            });
        }
    }
})();