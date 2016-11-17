'use strict';

var orderBy = function() {};
describe('book search controller', function() {
  beforeEach(module('app'));

  var ctrl;
  var booksFactory = {
    books: [{
    }, {
    }],
    all: [{
    }, {
    }]
  };

  beforeEach(function() {
    var ctrlName = 'BookSearchController';

    inject(function($controller) {
      var injectObj = {
        orderBy: orderBy,
        booksFactory: booksFactory
      };
      ctrl = $controller(ctrlName, injectObj);
    });
  });

  it('should be books and config', function() {
    expect(ctrl.propertyName).toEqual('name');
    expect(ctrl.reverse).toBeFalsy();
    expect(ctrl.books.length).toEqual(2);
    expect(ctrl.activeItem).toBeUndefined();
    expect(ctrl.page).toEqual(1);
    expect(ctrl.count).toEqual(10);
    expect(ctrl.displayItems.length).toEqual(2);
  });

  it('should change page', function() {
    ctrl.books.length = 100;
    spyOn(ctrl.books, 'slice').and.callThrough();
    ctrl.page = 5;

    ctrl.pageChanged();

    expect(ctrl.displayItems.length).toEqual(10);
    expect(ctrl.books.slice.calls.argsFor(0)).toEqual([40, 50]);
  });

  it('should set active item', function() {
    var item = {
      name: 'test'
    };
    expect(ctrl.activeItem).toBeUndefined();

    ctrl.setActiveItem(item);

    expect(ctrl.activeItem.name).toEqual(item.name);
    expect(ctrl.activeItem.isActive).toBeTruthy();
  });

  it('should replace active item', function() {
    var item = {
      name: 'test',
      isActive: true
    };
    ctrl.activeItem = item;
    expect(ctrl.activeItem).not.toBeUndefined();
    var newItem = {
      name: 'new-item'
    };

    ctrl.setActiveItem(newItem);

    expect(item.isActive).toBeFalsy();
    expect(ctrl.activeItem.name).toEqual(newItem.name);
    expect(ctrl.activeItem.isActive).toBeTruthy();
  });

  it('should be sort by rating', function() {
    ctrl.books = [{
      rating: 3
    }, {
      rating: 7
    }];
    var propertyName = 'rating';

    ctrl.sortBy(propertyName);

    expect(ctrl.propertyName).toEqual(propertyName);
    expect(ctrl.books[0].rating).toEqual(3);
    expect(ctrl.books[1].rating).toEqual(7);

    expect(ctrl.books.length).toEqual(2);
    expect(ctrl.reverse).toBeFalsy();
  });

  it('should be sort by name', function() {
    expect(ctrl.reverse).toBeFalsy();
    var propertyName = 'name';

    ctrl.sortBy(propertyName);

    expect(ctrl.reverse).toBeTruthy();
    expect(ctrl.books.length).toEqual(2);
  });
});


