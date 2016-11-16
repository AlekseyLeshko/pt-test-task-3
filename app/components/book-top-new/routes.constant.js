(function() {
  'use strict';

  angular
    .module('app')
    .constant('bookTopNewRoutes', bookTopNewRoutes());

  bookTopNewRoutes.$inject = [];

  function bookTopNewRoutes() {
    var bookStateList = [{
      name: 'lang.book.topNew',
      url: '/top/new',
      templateUrl: '/views/book-top-new.html',
      controller: 'BookTopNewController as bookTopNewCtrl'
    }];

    return bookStateList;
  }
})();

