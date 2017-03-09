'use strict';

/**
 * @ngdoc function
 * @name radioStalingradApp.controller:AudioplayerCtrl
 * @description
 * # AudioplayerCtrl
 * Controller of the radioStalingradApp
 */
angular.module('radioStalingradApp')
  .controller('AudioplayerCtrl', function ($scope, $rootScope) {

    $scope.playIcon = "images/play.svg";
    $scope.pauseIcon = "images/pause.svg";

    $rootScope.$watch("CurrentAudio", function(newValue, oldValue) {
      $scope.CurrentPlayingAudio = $rootScope.CurrentAudio;
      if ($rootScope.CurrentAudio != null) {
        var Ext = $scope.CurrentPlayingAudio.audio_file_path.split('.').pop();
        var CurrentAudioObj = { src: $scope.CurrentPlayingAudio.audio_file_path, type: 'audio/' + Ext };
        $scope.audio1.load(CurrentAudioObj);

        if ($rootScope.AudioPlaing) {
          $scope.audio1.play();

        }
        if (!$rootScope.AudioPlaing) {
          $scope.audio1.pause();

        }

      }

    });

        $rootScope.$watch("AudioPlaing", function(newValue, oldValue) {

            if ($rootScope.AudioPlaing) {
              $scope.audio1.play();

            }
            if (!$rootScope.AudioPlaing) {
              $scope.audio1.pause();

            }



        });
    $scope.mySpecialPlayButton = function () {
       $scope.audio1.play();
       $rootScope.AudioPlaing = true;

     };
     $scope.mySpecialPauseButton = function () {
        $scope.audio1.pause();
        $rootScope.AudioPlaing = false;

      };

  });
