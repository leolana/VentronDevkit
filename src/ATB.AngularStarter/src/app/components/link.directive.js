(function() {
    'use strict';

    angular
        .module('ATB')
        .directive('a', linkDirective);

    function linkDirective() {
        // Usage:
        //
        // Creates: Handle global LINK click
        //
        var directive = {
            link: link,
            restrict: 'E'
        };

        return directive;
        
        function link(scope, element, attrs) {
            if (attrs.ngClick || attrs.href === '' || attrs.href === '#') {
                element.on('click', function(e) {
                    e.preventDefault(); // prevent link click for above criteria
                });
            }
        }
    }
})();