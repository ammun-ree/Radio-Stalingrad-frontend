'use strict';

/**
 * @ngdoc overview
 * @name radioStalingradApp
 * @description
 * # radioStalingradApp
 *
 * Main module of the application.
 */
angular
  .module('radioStalingradApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });




// use the HTML5 History API
 $locationProvider.html5Mode(true);


  });
