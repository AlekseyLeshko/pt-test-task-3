'use strict';

describe('lang controller', function() {
  beforeEach(module('app'));

  var ctrl;
  var name = 'test-name';

  beforeEach(function() {
    var ctrlName = 'AppController';

    var injectObj = {
      appConfig: {
        name: name
      }
    };
    inject(function($controller) {
      ctrl = $controller(ctrlName, injectObj);
    });
  });

  it('should be name', function() {
    expect(ctrl.name).toEqual(name);
  });
});


