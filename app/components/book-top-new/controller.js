(function() {
  'use strict';

  angular
    .module('app')
    .controller('BookTopNewController', BookTopNewController);

  BookTopNewController.$inject = [
    'booksFactory'
  ];

  function BookTopNewController(booksFactory) {
    var vm = this;
    booksFactory.getAll.then(function() {
      vm.tenNewBooks = booksFactory.getByRating().slice(0, 10);
    });
  }
})();

