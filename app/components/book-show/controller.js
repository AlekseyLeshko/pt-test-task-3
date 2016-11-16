(function() {
  'use strict';

  angular
    .module('app')
    .controller('BookShowController', BookShowController);

  BookShowController.$inject = [
    '$stateParams',
    'BooksFactory'
  ];

  function BookShowController($stateParams, BooksFactory) {
    var vm = this;
    vm.id = $stateParams.id;
    vm.book = BooksFactory.get(vm.id);
  }
})();

