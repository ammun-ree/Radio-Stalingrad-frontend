'use strict';

describe('Service: TranslationExtractor', function () {

  // load the service's module
  beforeEach(module('radioStalingradApp'));

  // instantiate service
  var TranslationExtractor;
  beforeEach(inject(function (_TranslationExtractor_) {
    TranslationExtractor = _TranslationExtractor_;
  }));

  it('should do something', function () {
    expect(!!TranslationExtractor).toBe(true);
  });

});
