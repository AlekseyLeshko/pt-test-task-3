'use strict';

describe('book search constant', function() {
  beforeEach(module('app'));

  var bookSearchRoutes;

  beforeEach(inject(function($injector) {
    bookSearchRoutes = $injector.get('bookSearchRoutes');
  }));

  it('book show routes', function() {
    expect(bookSearchRoutes.length).toEqual(1);

    var route = bookSearchRoutes[0];
    expect(route.name).toEqual('lang.book.search');
    expect(route.url).toEqual('/search');
  });
});



