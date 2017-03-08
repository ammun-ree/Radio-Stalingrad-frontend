'use strict';

/**
 * @ngdoc function
 * @name radioStalingradApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the radioStalingradApp
 */
angular.module('radioStalingradApp')
  .controller('MainCtrl', function ($scope, $rootScope ,$translate , LocaleService, Podcasts, TranslationExtractor) {
                  $scope.currentLocaleDisplayName = LocaleService.getLocaleDisplayName();

                  $scope.localesDisplayNames = LocaleService.getLocalesDisplayNames();
                  $scope.visible = $scope.localesDisplayNames &&
                  $scope.localesDisplayNames.length > 1;

                  $scope.changeLanguage = function (locale) {
                      LocaleService.setLocaleByDisplayName(locale);
                      $scope.currentLocaleDisplayName = LocaleService.getLocaleDisplayName();
                      $rootScope.currentLocale = LocaleService.getCurrentLocale();
                    };


                
                    // APi Calls to handel translation
                    $rootScope.$watch("currentLocale", function(newValue, oldValue) {
                      Podcasts.getData().then(function(response) {
                        $scope.podcasts = response.data.podcasts;
                        TranslationExtractor.GetTranslation($scope.podcasts, $rootScope.currentLocale);
                      });
                    });


                    /*function TranslationExtractor($data_array,$locale ) {
                      angular.forEach($data_array, function(value, key) {
                        console.log(value.translations);
                        var $current_translation = search($locale, value.translations);
                        value['current_translation'] = $current_translation;
                      });
                    }


                    function search(nameKey, myArray){
                      for (var i=0; i < myArray.length; i++) {
                        if (myArray[i].locale === nameKey) {
                          return myArray[i];
                        }
                      }
                    }*/
  });
