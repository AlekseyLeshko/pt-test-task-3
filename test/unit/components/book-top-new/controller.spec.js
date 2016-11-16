'use strict';

describe('book top new controller', function() {
  beforeEach(module('app'));

  var ctrl;
  var booksFactory;

  beforeEach(function() {
    var ctrlName = 'BookTopNewController';

    inject(function($controller, $injector) {
      booksFactory = $injector.get('booksFactory');
      var injectObj = {
        booksFactory: booksFactory
      };
      ctrl = $controller(ctrlName, injectObj);
    });
    spyOn(booksFactory, 'getByRating').and.callThrough();
  });

  it('should be ten new books', function() {
    expect(ctrl.tenNewBooks.length).toEqual(10);
  });
});


