'use strict';

var StringUtilService = require('./services/StringUtilService');
var ResourcesService = require('./services/ResourcesService');
var PostalOracleService = require('./services/PostalOracleService');
var ApiService = require('./services/ApiService');
var infiniteScrollDirective = require('./directives/infiniteScrollDirective');

module.exports = angular.module('common', [])
  .service('StringUtilService', StringUtilService)
  .service('ResourcesService', ResourcesService)
  .service('PostalOracleService', PostalOracleService)
  .service('ApiService', ApiService)
  .service('infiniteScroll', infiniteScrollDirective);