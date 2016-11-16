(function() {
  'use strict';

  angular
    .module('app')
    .constant('appConfig', appConfig());

  appConfig.$inject = [];

  function appConfig() {
    var config = {
      name: 'Online library',
      location: 'en'
    };

    return config;
  }
})();
