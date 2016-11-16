(function() {
  'use strict';

  angular
    .module('app')
    .controller('BookTopNewController', BookTopNewController);

  BookTopNewController.$inject = [
    'BooksFactory'
  ];

  function BookTopNewController(BooksFactory) {
    var vm = this;
    vm.tenNewBooks = BooksFactory.getByRating().slice(0, 10);
  }
})();

