'use strict';

// Declare app module
angular.module('crimeApp', ['ngRoute'])
.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
  .when('/', {
  	templateUrl: '/partials/crime-list.html',
    controller: 'CrimeController'
  })
  .otherwise({redirectTo: '/'});
}])

.controller('HelloWorldController', function ($scope) {
	$scope.displayHelloWorld = function () {
		console.log('Hello World');
	};
});
