'use strict';

describe('Filter: HtmlSafe', function () {

  // load the filter's module
  beforeEach(module('radioStalingradApp'));

  // initialize a new instance of the filter before each test
  var HtmlSafe;
  beforeEach(inject(function ($filter) {
    HtmlSafe = $filter('HtmlSafe');
  }));

  it('should return the input prefixed with "HtmlSafe filter:"', function () {
    var text = 'angularjs';
    expect(HtmlSafe(text)).toBe('HtmlSafe filter: ' + text);
  });

});
