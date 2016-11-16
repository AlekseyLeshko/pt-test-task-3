'use strict';

describe('appConfig constant', function() {
  beforeEach(module('app'));

  var i18nRoutes;

  beforeEach(inject(function($injector) {
    i18nRoutes = $injector.get('i18nRoutes');
  }));

  it('i18nRoutes', function() {
    expect(i18nRoutes.length).toEqual(1);
    var route = i18nRoutes[0];
    expect(route.name).toEqual('lang');
    expect(route.abstract).toBeTruthy();
    expect(route.url).toEqual('/:lang');
  });
});

