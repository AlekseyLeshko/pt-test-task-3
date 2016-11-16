'use strict';

describe('book show routes constant', function() {
  beforeEach(module('app'));

  var bookShowRoutes;

  beforeEach(inject(function($injector) {
    bookShowRoutes = $injector.get('bookShowRoutes');
  }));

  it('book show routes', function() {
    expect(bookShowRoutes.length).toEqual(2);

    var route = bookShowRoutes[0];
    expect(route.name).toEqual('lang.book');
    expect(route.abstract).toBeTruthy();
    expect(route.url).toEqual('/book');

    route = bookShowRoutes[1];
    expect(route.name).toEqual('lang.book.show');
    expect(route.url).toEqual('/show/:id');
  });
});


