module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files: [
      'test/polyfills/find.js',
      'node_modules/angular/angular.min.js',
      'node_modules/angular-translate/dist/angular-translate.min.js',
      'node_modules/angular-ui-router/release/angular-ui-router.min.js',
      'node_modules/angular-ui-bootstrap/dist/ui-bootstrap-tpls.js',
      'node_modules/angular-ui-bootstrap/dist/ui-bootstrap.js',
      'node_modules/angular-mocks/angular-mocks.js',
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

