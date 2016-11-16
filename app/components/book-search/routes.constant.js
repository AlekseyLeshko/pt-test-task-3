(function() {
  'use strict';

  angular
    .module('app')
    .constant('bookSearchRoutes', bookSearchRoutes());

  bookSearchRoutes.$inject = [];

  function bookSearchRoutes() {
    var bookStateList = [{
      name: 'lang.book.search',
      url: '/search',
      templateUrl: '/views/book-search.html',
      controller: 'BookSearchController as bookSearchCtrl'
    }];

    return bookStateList;
  }
})();

