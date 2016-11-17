(function() {
  'use strict';

  angular
    .module('app')
    .factory('booksFactory', booksFactory);

  booksFactory.$inject = [
    '$http'
  ];

  function booksFactory($http) {
    var factory = {
      getAll: getAll(),
      get: get,
      getByRating: getByRating
    };

    function getAll() {
      return $http
        .get('books/array.json')
        .success(function(data) {
          factory.all = data;
          return data;
        });
    }

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

