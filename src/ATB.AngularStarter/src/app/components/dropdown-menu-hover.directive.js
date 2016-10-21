(function() {
    'use strict';

    angular
        .module('ATB')
        .directive('dropdownMenuHover', dropdownMenuHover);

    function dropdownMenuHover() {
        // Usage: 
        //
        // Creates: Handle Dropdown Hover Plugin Integration
        //
        var directive = {
            link: link
        };

        return directive;
        
        function link(scope, element, attrs) {
            element.dropdownHover();
        }
    }
})();