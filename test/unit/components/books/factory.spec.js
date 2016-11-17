'use strict';

describe('books factory', function() {
  beforeEach(module('app'));

  var $httpBackend;
  var booksFactory;
  var id = 'test-id-0';
  var data = [{
    id: id,
    rating: 3
  }, {
    id: 'test-id-1',
    rating: 7
  }];

  beforeEach(function() {
    inject(function($injector, _$httpBackend_) {
      booksFactory = $injector.get('booksFactory');
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('books/array.json').respond(data);
      $httpBackend.expectGET('/views/book-top-new.html').respond({});
    });
    $httpBackend.flush();
  });

  it('should be items', function() {
    expect(booksFactory.all).not.toBeUndefined();
    expect(booksFactory.all.length).toEqual(data.length);
  });

  it('should get item by id', function() {
    var item = booksFactory.get(id);

    expect(item).not.toBeUndefined();
  });

  it('should get item array by rating', function() {
    var items = booksFactory.getByRating();

    expect(items[0].rating).toEqual(7);
    expect(items[items.length - 1].rating).toEqual(3);
  });
});


