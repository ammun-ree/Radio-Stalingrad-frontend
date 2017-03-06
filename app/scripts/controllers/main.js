'use strict';

/**
 * @ngdoc function
 * @name radioStalingradApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the radioStalingradApp
 */
angular.module('radioStalingradApp')
  .controller('MainCtrl', function ($scope, $rootScope ,$translate , LocaleService) {
                  $scope.currentLocaleDisplayName = LocaleService.getLocaleDisplayName();

                  $scope.localesDisplayNames = LocaleService.getLocalesDisplayNames();
                  $scope.visible = $scope.localesDisplayNames &&
                  $scope.localesDisplayNames.length > 1;

                  $scope.changeLanguage = function (locale) {
                      LocaleService.setLocaleByDisplayName(locale);
                      $scope.currentLocaleDisplayName = LocaleService.getLocaleDisplayName();
                      $rootScope.currentLocale = LocaleService.getCurrentLocale();


                  };
  });
