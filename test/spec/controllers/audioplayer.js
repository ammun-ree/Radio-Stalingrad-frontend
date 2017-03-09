'use strict';

describe('Controller: AudioplayerCtrl', function () {

  // load the controller's module
  beforeEach(module('radioStalingradApp'));

  var AudioplayerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AudioplayerCtrl = $controller('AudioplayerCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(AudioplayerCtrl.awesomeThings.length).toBe(3);
  });
});
