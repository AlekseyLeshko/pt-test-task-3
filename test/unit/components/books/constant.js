'use strict';

describe('book storage constant', function() {
  beforeEach(module('app'));

  var bookStorage;

  beforeEach(inject(function($injector) {
    bookStorage = $injector.get('bookStoeage');
  }));

  it('shoule be 100 items', function() {
    expect(bookStorage.length).toEqual(100);
  });
});


