'use strict';

describe('book top new routes constant', function() {
  beforeEach(module('app'));

  var bookTopNewRoutes;

  beforeEach(inject(function($injector) {
    bookTopNewRoutes = $injector.get('bookTopNewRoutes');
  }));

  it('book top new routes', function() {
    expect(bookTopNewRoutes.length).toEqual(1);
    var route = bookTopNewRoutes[0];
    expect(route.name).toEqual('lang.book.topNew');
    expect(route.url).toEqual('/top/new');
  });
});


