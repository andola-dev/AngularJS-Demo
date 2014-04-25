'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'myApp.services',
  'myApp.directives',
  'ngRoute',
  'myApp.filters',
  'myApp.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {templateUrl: 'app/pages/home.html', controller: 'mainController'});
  $routeProvider.when('/about', {templateUrl: 'app/pages/about.html', controller: 'aboutController'});
  $routeProvider.when('/contact', {templateUrl: 'app/pages/contact.html', controller: 'contactController'});
  $routeProvider.when('/view/:id', {templateUrl: 'app/pages/viewnews.html', controller: 'viewController'});
  $routeProvider.otherwise({redirectTo: '/'});
}]);
