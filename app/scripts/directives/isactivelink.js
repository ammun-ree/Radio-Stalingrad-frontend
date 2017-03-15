'use strict';

/**
 * @ngdoc directive
 * @name radioStalingradApp.directive:IsActiveLink
 * @description
 * # IsActiveLink
 */
angular.module('radioStalingradApp')
.directive('isActiveLink', [ '$location', function($location) {
return {
restrict: 'A',
link: function(scope, element) {
 scope.location = $location;
 scope.$watch('location.path()', function(currentPath) {
   if('/#' + currentPath === element[0].attributes['href'].nodeValue) {
     element.parent().addClass('active');
   } else {
     element.parent().removeClass('active');
   }
 });
}
};
}]);
