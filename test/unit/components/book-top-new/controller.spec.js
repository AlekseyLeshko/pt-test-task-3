'use strict';

describe('book top new controller', function() {
  beforeEach(module('app'));

  var $httpBackend;
  var ctrl;
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
    var ctrlName = 'BookTopNewController';

    inject(function($controller, $injector, _$httpBackend_) {
      booksFactory = $injector.get('booksFactory');
      $httpBackend = _$httpBackend_;
      var injectObj = {
        booksFactory: booksFactory
      };
      ctrl = $controller(ctrlName, injectObj);
    });
    $httpBackend.expectGET('books/array.json').respond(data);
    $httpBackend.expectGET('/views/book-top-new.html').respond({});
    spyOn(booksFactory, 'getByRating').and.callThrough();
    $httpBackend.flush();
  });

  it('should be ten new books', function() {
    expect(ctrl.tenNewBooks.length).toEqual(data.length);
  });
});


