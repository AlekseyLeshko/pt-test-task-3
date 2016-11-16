(function() {
  'use strict';

  angular
    .module('app')
    .controller('BookShowController', BookShowController);

  BookShowController.$inject = [
    '$stateParams',
    'booksFactory'
  ];

  function BookShowController($stateParams, booksFactory) {
    var vm = this;
    vm.id = $stateParams.id;
    vm.book = booksFactory.get(vm.id);
  }
})();

