(function() {
  'use strict';

  angular
    .module('app')
    .config(config);

  config.$inject = [
    '$stateProvider',
    '$urlRouterProvider',
    '$translateProvider',
    'i18nRoutes',
    'bookShowRoutes',
    'bookTopNewRoutes',
    'appConfig'
  ];

  function config($stateProvider, $urlRouterProvider, $translateProvider, i18nRoutes, bookShowRoutes, bookTopNewRoutes, appConfig) {
    createRouting();
    createI18n();

    function createRouting() {
      var location = appConfig.location;
      $urlRouterProvider.otherwise('/' + location + '/book/top/new');

      var routes = i18nRoutes;
      routes = routes.concat(bookShowRoutes);
      routes = routes.concat(bookTopNewRoutes);
      for (var i = 0; i < routes.length; i++) {
        var state = routes[i];
        $stateProvider.state(state);
      }
    }

    function createI18n() {
      $translateProvider.translations('en', {
        'TITLE': 'Hello',
        'FOO': 'This is a paragraph'
      });

      $translateProvider.translations('de', {
        'TITLE': 'Hallo',
        'FOO': 'Dies ist ein Paragraph'
      });

      $translateProvider.translations('ru', {
        'TITLE': 'Привет',
        'FOO': 'Это параграф'
      });

      $translateProvider.preferredLanguage('en');
    }
  }
})();
