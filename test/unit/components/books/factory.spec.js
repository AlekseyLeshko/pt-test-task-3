'use strict';

describe('book factory', function() {
  beforeEach(module('app'));

  var booksFactory;

  beforeEach(function() {
    inject(function($injector) {
      booksFactory = $injector.get('BooksFactory');
    });
  });

  it('should be 100 items', function() {
    expect(booksFactory.all.length).toEqual(100);
  });

  it('should get item by id', function() {
    var id = 'd2b7bbf0-a5fd-408b-a0be-9b425f793eea';
    var item = booksFactory.get(id);

    expect(item).not.toBeUndefined();
  });

  it('should get item array by rating', function() {
    var items = booksFactory.getByRating();

    expect(items[0].rating).toEqual(10);
    expect(items[items.length - 1].rating).toEqual(1);
  });
});


