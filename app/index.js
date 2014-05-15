'use strict';

// vendor
require('angular/angular');
require('angular-route/angular-route');
require('angular-touch/angular-touch');
require('angular-local-storage/angular-local-storage');
require('angular-bind-once/bindonce');
var _ = require('lodash');

// modules
require('./modules/common');
require('./modules/404');
require('./modules/home/home');
require('./modules/store/home');

angular.module('app', [
  // core
  'ngRoute',
  'ngTouch',
  // libs
  'LocalStorageModule',
  'pasvaz.bindonce',
  // own code
  'common',
  '404',
  'home.home',
  'store.home',
]);

angular.module('app').constant('_', _);

angular.module('app').config(['$locationProvider',
  function($locationProvider) {
    // $locationProvider.html5Mode(true);
  }
]);

angular.module('app').run(['ResourcesService', '$location',
  function(ResourcesService, $location) {

    var errorCallback = function() {
      $location.path('/404');
    };

    ResourcesService.setErrorCallback(errorCallback);

  }
])