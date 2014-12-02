'use strict';

module.exports = [

  function() {

    return {
      // minutes are rounded by the precision of 5
      dateToMinutes: function(date) {
        if (date && date instanceof Date) {
          var result = date.getMinutes() + date.getHours() * 60;
          // round to 5 minutes
          result = result + (5 - result % 5) % 5;

          return result % 1440;

        } else {
          throw 'Parameter must be a date';
        }
      },

      // from 23:56 it returns the next day
      getDay: function(date) {
        if (date && date instanceof Date) {
          if (date.getMinutes() > 55) {
            return (date.getDay() + 1) % 7;
          } else {
            return date.getDay();
          }
        } else {
          throw 'Parameter must be a date';
        }
      }
    };

    }
];