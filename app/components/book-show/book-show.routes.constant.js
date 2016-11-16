(function() {
  'use strict';

  angular
    .module('app')
    .constant('bookRoutes', bookRoutes());

  bookRoutes.$inject = [];

  function bookRoutes() {
    var bookStateList = [{
      name: 'lang.book',
      abstract: true,
      url: '/book',
      template: '<ui-view/>'
    }, {
      name: 'lang.book.show',
      url: '/show/:id',
      templateUrl: '/views/book-show.html',
      controller: 'BookShowController as bookShowlCtrl'
    }];

    return bookStateList;
  }
})();

