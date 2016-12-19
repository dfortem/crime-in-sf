'use strict';

// Declare app module
angular.module('crimeApp', ['ngRoute'])
.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider
  .when('/', {
  	templateUrl: '/index.html',
  	controller: 'HelloWorldController'
  })
  .otherwise({redirectTo: '/'});
}])

.controller('HelloWorldController', function ($scope) {
	$scope.displayHelloWorld = function () {
		console.log('Hello World');
	};
});
