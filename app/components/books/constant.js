(function() {
  'use strict';

  angular
    .module('app')
    .constant('bookStorage', bookStorage());

  bookStorage.$inject = [
    '$resource'
  ];

  function bookStorage($resource) {
    var list = [];

    return list;
  }
})();

