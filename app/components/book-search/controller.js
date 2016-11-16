(function() {
  'use strict';

  angular
    .module('app')
    .controller('BookSearchController', BookSearchController);

  BookSearchController.$inject = [
    'orderByFilter',
    'booksFactory'
  ];

  function BookSearchController(orderBy, booksFactory) {
    var vm = this;
    vm.propertyName = 'name';
    vm.reverse = false;
    vm.books = orderBy(booksFactory.all, vm.propertyName, vm.reverse);
    vm.activeItem;
    vm.page = 1;
    vm.count = 10;
    vm.displayItems = vm.books.slice(0, vm.count);
    vm.pageChanged = pageChanged;
    vm.setActiveItem = setActiveItem;
    vm.sortBy = sortBy;

    function sortBy(propertyName) {
      if (propertyName !== null && vm.propertyName === propertyName) {
        vm.reverse = !vm.reverse;
      } else {
        vm.reverse = false;
      }
      vm.propertyName = propertyName;
      vm.books = orderBy(vm.books, vm.propertyName, vm.reverse);
    }

    function setActiveItem(item) {
      if (vm.activeItem) {
        vm.activeItem.isActive = false;
      }

      vm.activeItem = item;
      vm.activeItem.isActive = true;
    }

    function pageChanged() {
      var startPos = (vm.page - 1) * vm.count;
      vm.displayItems = vm.books.slice(startPos, startPos + vm.count);
    }
  }
})();

