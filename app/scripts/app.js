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
    'ngTouch',
    'pascalprecht.translate',// angular-translate
    'tmh.dynamicLocale'
  ])
  .constant('LOCALES', {
    'locales': {
        'fr': 'français',
        'en': 'english',
        'ar': 'العربية'
    },
    'preferredLocale': 'fr'
})
.run(function($rootScope, $translate, Language) {
    $rootScope.currentLocale = $translate.proposedLanguage();
    $rootScope.Language = Language;
})

  .config(function ($routeProvider, $locationProvider, $translateProvider, tmhDynamicLocaleProvider) {

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
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl',
        controllerAs: 'contact'
      })
      .when('/podcasts', {
        templateUrl: 'views/podcasts.html',
        controller: 'PodcastCtrl',
        controllerAs: 'podcast'
      })
      .otherwise({
        redirectTo: '/'
      });




$locationProvider
        .html5Mode(true)
        .hashPrefix('!');

 // Translation provider
$translateProvider.useMissingTranslationHandlerLog();
$translateProvider.useStaticFilesLoader({
        prefix: 'resources/locale-',// path to translations files
        suffix: '.json'// suffix, currently- extension of the translations
    });
    $translateProvider.preferredLanguage('fr');// is applied on first load
    $translateProvider.useLocalStorage();// saves selected language to localStorage

    tmhDynamicLocaleProvider.localeLocationPattern('bower_components/angular-i18n/angular-locale_{{locale}}.js');

  });
