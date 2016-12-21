'use strict';

var MapController = function (NgMap) {
  var ctrl = this;

  ctrl.$onInit = function () {
    NgMap.getMap().then(function (map) {
      ctrl.map = map;
    }).catch(function (err) {
    	var errorMessage = 'A problem occured when loading the map' + err;
      console.log(errorMessage);
    });
    ctrl.displayedCrime = {};
  };

  ctrl.markerPosition = function (crime) {
    return '[' + crime.lat + ', ' + crime.lng + ']';
  };

  ctrl.onClick = function (e, crime) {
    ctrl.displayedCrime = crime;
    ctrl.map.showInfoWindow('info', crime.case_number);
  };

  ctrl.$onChanges = function (changes) {
    ctrl.crimes = changes.crimes.currentValue;
  };

  ctrl.getCrimeLink = function () {
  	return 'http://sanfrancisco.crimespotting.org/crime/' +
  		ctrl.displayedCrime.date_time.substring(0,10) +
  		'/' + ctrl.displayedCrime.crime_type + '/' + ctrl.displayedCrime.id;
  };
};

angular.module('crimeApp').component('crimeMap', {
  templateUrl: 'partials/crime-map.html',
  controller: MapController,
  bindings: {
    crimes: '<'
  }
});
