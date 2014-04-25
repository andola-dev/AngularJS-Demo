'use strict';

/* Filters */

angular.module('myApp.filters', []).
  filter('interpolate', ['version', function(version) {
    return function(text) {
      return String(text).replace(/\%VERSION\%/mg, version);
    };
  }]);

  
  
angular.module('myApp.filters', []).
    filter('shortURL', function () {
        return function (text) {

            var getLocation = function(href) {
                var l = document.createElement("a");
                l.href = href;
                return l;
            };

            var url = getLocation(text);

            return url.hostname

        };
    });  