'use strict';

angular.module('crimeApp')
.controller('CrimeController', ['$scope','crimeFactory', '$filter', '$timeout',
  function ($scope, crimeFactory, $filter, $timeout) {

  $scope.crimeToDisplay = [];
  $scope.status = 'loading';

  $scope.getCrimes = function () {
    var dstart = $filter('date')(new Date (2014, 8, 1), 'yyyy-MM-dd');
    console.log(dstart);
    var dend = $filter('date')(new Date (2014, 8, 30), 'yyyy-MM-dd');
    var params = {
      dstart: dstart,
      dend: dend
    };
    crimeFactory.getLastCrimes()
      .then(crimeFactory.createDataList)
      .then(function (response) {
        console.log(response);
        $scope.crimeToDisplay = response;
        $timeout(function () {
          $scope.$apply();
        });
        console.log($scope.crimeToDisplay);
      })
      .catch(function (error) {
        console.log(error);
        $scope.status = 'Unable to load crime data' + error.status;
        $scope.$apply();
        console.log($scope.status);
      });
  };

  $scope.getCrimes();
}]);