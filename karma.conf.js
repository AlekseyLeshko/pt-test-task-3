module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files: [
      'test/polyfills/find.js',
      'node_modules/angular/angular.min.js',
      'node_modules/angular-translate/dist/angular-translate.min.js',
      'node_modules/angular-ui-router/release/angular-ui-router.min.js',
      'node_modules/angular-mocks/angular-mocks.js',
      // 'node_modules/jquery/dist/jquery.min.js', {
      // 'pattern': 'node_modules/jasmine-jquery/lib/jasmine-jquery.js',
      // 'watched': false,
      // 'served': true,
      // 'included': true
      // }, {
      // 'pattern': 'test/fixtures/json/**/*.json',
      // 'watched': true,
      // 'served': true,
      // 'included': false
      // }, {
      // 'pattern': 'test/fixtures/views/**/*.html',
      // 'watched': true,
      // 'served': true,
      // 'included': false
      // },
      'app/modules/app.module.js',
      'app/**/*.js',
      'test/unit/**/*.spec.js'
    ],
    exclude: [],
    preprocessors: {
      'app/**/*.js': ['coverage']
    },
    reporters: [
      'progress',
      'coverage'
    ],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: [
      'Chrome',
      'PhantomJS'
    ],
    singleRun: false,
    concurrency: Infinity,
    coverageReporter: {
      type: 'lcov',
      dir: 'coverage/'
    }
  });
};

