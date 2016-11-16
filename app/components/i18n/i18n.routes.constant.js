(function() {
  'use strict';

  angular
    .module('app')
    .constant('i18nRoutes', i18nRoutes());

  i18nRoutes.$inject = [];

  function i18nRoutes() {
    var i18nStateList = [{
      name: 'lang',
      abstract: true,
      url: '/:lang',
      controller: 'LangController as langCtrl',
      template: '<ui-view/>'
    }];

    return i18nStateList;
  }
})();

