'use strict';

describe('book storage constant', function() {
  beforeEach(module('app'));

  var appConfig;

  beforeEach(inject(function($injector) {
    appConfig = $injector.get('appConfig');
  }));

  it('shoule be name and location', function() {
    expect(appConfig.name).toEqual('Online library');
    expect(appConfig.location).toEqual('en');
  });
});



