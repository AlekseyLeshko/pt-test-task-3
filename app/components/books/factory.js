(function() {
  'use strict';

  angular
    .module('app')
    .factory('booksFactory', booksFactory);

  booksFactory.$inject = [
    'bookStorage'
  ];

  function booksFactory(bookStorage) {
    var factory = {
      all: bookStorage,
      get: get,
      getByRating: getByRating
    };

    return factory;

    function get(id) {
      var item = this.all.find(function(el) {
        return el.id === id;
      });

      return item;
    }

    function getByRating() {
      var list = this.all.sort(function(a, b) {
        return b.rating - a.rating;
      });

      return list;
    }
  }
})();

