'use strict';

/**
 * @ngdoc service
 * @name radioStalingradApp.TranslationExtractor
 * @description
 * # TranslationExtractor
 * Service in the radioStalingradApp.
 */
angular.module('radioStalingradApp')
  .service('TranslationExtractor', function () {
    this.GetTranslation = function($data_array,$locale) {
      angular.forEach($data_array, function(value, key) {
        var $current_translation = search($locale, value.translations);
        value['current_translation'] = $current_translation;


      });
   }
   function search(nameKey, myArray) {
     for (var i=0; i < myArray.length; i++) {
       if (myArray[i].locale === nameKey) {
         return myArray[i];
       }
     }
   }


  });
