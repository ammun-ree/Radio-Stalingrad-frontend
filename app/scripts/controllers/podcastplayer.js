'use strict';

/**
 * @ngdoc function
 * @name radioStalingradApp.controller:PodcastplayerCtrl
 * @description
 * # PodcastplayerCtrl
 * Controller of the radioStalingradApp
 */
angular.module('radioStalingradApp')
  .controller('PodcastplayerCtrl', function ($scope, $rootScope) {
    /* RootScope Audio Player */
    $scope.play_blueIcon = "images/play_blue.svg";
    $scope.pause_blueIcon = "images/pause_blue.svg";
    $scope.PlayOnRoot = function (podcast) {
      $rootScope.CurrentAudio = podcast;
      $rootScope.AudioPlaing = true;

    }
    $scope.PauseOnRoot = function (podcast) {
      $rootScope.AudioPlaing = false;
    }
      /* RootScope Audio Player */

  });
