'use strict';

describe('books storage constant', function() {
  beforeEach(module('app'));

  var bookStorage;

  beforeEach(inject(function($injector) {
    bookStorage = $injector.get('bookStorage');
  }));

  it('shoule be 100 items', function() {
    expect(bookStorage.length).toEqual(100);
  });
});


