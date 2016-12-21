'use strict';

var CrimeController =function (crimeFactory, $filter) {
  var ctrl = this;

  ctrl.$onInit = function () {
    ctrl.crimeToDisplay = [];
    ctrl.a = 'I DID IT!! THE BINDING IS WORKING!!';
    ctrl.status = 'loading';
    ctrl.getCrimes();
  };

  ctrl.getCrimes = function () {
    var dstart = $filter('date')(new Date (2014, 8, 1), 'yyyy-MM-dd');
    var dend = $filter('date')(new Date (2014, 8, 30), 'yyyy-MM-dd');
    var params = {
      dstart: dstart,
      dend: dend
    };
    crimeFactory.getLastCrimes()
      .then(crimeFactory.createDataList)
      .then(function (response) {
        ctrl.crimeToDisplay = response;
        console.log('Data succesfully loaded');
      })
      .catch(function (error) {
        ctrl.status = 'Unable to load crime data' + error.status;
        console.log(ctrl.status);
      });
  };

  ctrl.onClick = function () {
    ctrl.crimeToDisplay = [];
    console.log(ctrl);
    ctrl.getCrimes();
    console.log(ctrl.a);
  };
};

angular.module('crimeApp')
  .component('crimeFilter', {
  templateUrl: 'partials/crime-filter.html',
  controller: CrimeController
});