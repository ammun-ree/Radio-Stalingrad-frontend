'use strict';

describe('Controller: PodcastCtrl', function () {

  // load the controller's module
  beforeEach(module('radioStalingradApp'));

  var PodcastCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PodcastCtrl = $controller('PodcastCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(PodcastCtrl.awesomeThings.length).toBe(3);
  });
});
