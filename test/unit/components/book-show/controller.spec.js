'use strict';

describe('book show controller', function() {
  beforeEach(module('app'));

  var ctrl;
  var id = 'd2b7bbf0-a5fd-408b-a0be-9b425f793eea';
  var item = {
    id: id
  };
  var booksFactory = {
    get: function() {
      return item;
    }
  };

  beforeEach(function() {
    var ctrlName = 'BookShowController';
    var $stateParams = {
      id: id
    };

    inject(function($controller) {
      var injectObj = {
        $stateParams: $stateParams,
        booksFactory: booksFactory
      };
      ctrl = $controller(ctrlName, injectObj);
    });
    spyOn(booksFactory, 'get').and.callThrough();
  });

  it('should be book by id', function() {
    expect(ctrl.id).toEqual(id);
    expect(ctrl.book).not.toBeUndefined();
  });
});

