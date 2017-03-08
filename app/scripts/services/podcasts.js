'use strict';

/**
 * @ngdoc service
 * @name radioStalingradApp.Podcasts
 * @description
 * # Podcasts
 * Service in the radioStalingradApp.
 */
angular.module('radioStalingradApp')
  .service('Podcasts', function ($http) {
    this.getData = function() {
      // $http() returns a $promise that we can add handlers with .then()
      return $http({
          method: 'GET',
          url: 'http://localhost:8888/Radio-Stalingrad/Radio-Stalingrad-backend/public/api/podcasts'
       });
   }
  });
