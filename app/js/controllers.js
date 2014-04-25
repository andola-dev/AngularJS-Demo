'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
  .controller('mainController', function ($scope, $http) {
        //$http.jsonp('http://ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=20&q=http://rss.slashdot.org/Slashdot/slashdot&callback=JSON_CALLBACK').
		$http.jsonp('https://ajax.googleapis.com/ajax/services/search/news?v=1.0&rsz=8&q=google&callback=JSON_CALLBACK').
        success(function(data) {
            $scope.news = data;
        });

		$scope.trustedHtml = function(html_code)
			{
			    alert(html_code);
				return $sce.trustAsHtml(html_code);
			}
			
		$scope.searchval = function() {

		$http.jsonp('https://ajax.googleapis.com/ajax/services/search/news?v=1.0&rsz=8&q='+ this.search.title +'&callback=JSON_CALLBACK').
        success(function(data) {
            $scope.news = data;
        }); 
       }
	   
	   $scope.getview = function(item) {
	   alert('d');
	   $scope.news = item
	   
	   alert(items.length)
	   
	  	 
       }
	   
	   
   })
  
  .controller('aboutController', function($scope) {
        $scope.message = 'Look! I am an about page.';
  })
  .controller('contactController', function($scope) {
        $scope.message = 'Contact us!  This is just a demo.';
   });

