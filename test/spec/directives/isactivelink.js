'use strict';

describe('Directive: IsActiveLink', function () {

  // load the directive's module
  beforeEach(module('radioStalingradApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<-is-active-link></-is-active-link>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the IsActiveLink directive');
  }));
});
