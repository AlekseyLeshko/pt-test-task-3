(function() {
  'use strict';

  angular
    .module('app')
    .controller('BookShowController', BookShowController);

  BookShowController.$inject = [
    '$stateParams'
  ];

  function BookShowController($stateParams) {
    var vm = this;
    vm.id = $stateParams.id;
    vm.text = getText();

    function getText() {
      return 'text func';
    }
  }
})();

