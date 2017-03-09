'use strict';

describe('Controller: PodcastplayerCtrl', function () {

  // load the controller's module
  beforeEach(module('radioStalingradApp'));

  var PodcastplayerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PodcastplayerCtrl = $controller('PodcastplayerCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(PodcastplayerCtrl.awesomeThings.length).toBe(3);
  });
});
