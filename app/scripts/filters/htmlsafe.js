'use strict';

/**
 * @ngdoc filter
 * @name radioStalingradApp.filter:HtmlSafe
 * @function
 * @description
 * # HtmlSafe
 * Filter in the radioStalingradApp.
 */
angular.module('radioStalingradApp')
.filter("htmlSafe", ['$sce', function($sce) {
    return function(htmlCode){
        return $sce.trustAsHtml(htmlCode);
    };
}]);
