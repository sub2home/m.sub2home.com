'use strict';

module.exports = ['$timeout',

  function($timeout) {

    var $html = angular.element(document.getElementsByTagName('html')[0]);
    var timeoutPromise;

    return {

      lock: function() {

        $html.addClass('preLoading');

        timeoutPromise = $timeout(function() {
          $html.addClass('loading');
        }, 0);

      },

      unlock: function() {

        $timeout.cancel(timeoutPromise);

        $html.removeClass('preLoading');
        $html.removeClass('loading');

      }

    };

  }
];
