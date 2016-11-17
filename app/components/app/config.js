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
    'bookSearchRoutes',
    'appConfig'
  ];

  function config($stateProvider, $urlRouterProvider, $translateProvider, i18nRoutes, bookShowRoutes, bookTopNewRoutes, bookSearchRoutes, appConfig) {
    createRouting();
    createI18n();

    function createRouting() {
      var location = appConfig.location;
      $urlRouterProvider.otherwise('/' + location + '/book/top/new');

      var routes = i18nRoutes;
      routes = routes.concat(bookShowRoutes);
      routes = routes.concat(bookTopNewRoutes);
      routes = routes.concat(bookSearchRoutes);
      for (var i = 0; i < routes.length; i++) {
        var state = routes[i];
        $stateProvider.state(state);
      }
    }

    function createI18n() {
      $translateProvider.translations('en', {
        'TOP': 'Top',
        'SEARCH': 'Search',
        'BEST_BOOKS_AND_AUTHORS': 'Best Book\'s & Author\'s',
        'BOOKS_RATING': 'Book\'s rating',
        'AUTHOR_RATING': 'Author\'s rating',
        'NAME': 'Name',
        'ID': 'Id',
        'DESCRIPTION': 'Description',
        'RATING': 'Rating',
        'AUTHOR': 'Author'
      });

      $translateProvider.translations('de', {
      });

      $translateProvider.translations('ru', {
      });

      $translateProvider.preferredLanguage('en');
    }
  }
})();
