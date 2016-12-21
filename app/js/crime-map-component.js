'use strict';

var MapController = function (NgMap) {
	var ctrl = this;

	ctrl.markerPosition = function (crime) {
		return '[' + crime.lat + ', ' + crime.lng +']';
	};

	ctrl.display = function () {
		console.log(ctrl);
	};

	ctrl.onClick = function (e, crime) {
		console.log('you\'ve clicked on the marker');
		console.log(crime);
		ctrl.displayedCrime = crime;
    ctrl.map.showInfoWindow('info', crime.case_number);
	};

	ctrl.$onInit = function () {
		console.log('INIT!!!');
		NgMap.getMap().then(function(map) {
	    console.log('map', map);
	    ctrl.map = map;
	  }).catch(function(err) {
	  	console.log('ERROR!');
	  	console.log(err);
	  });
		ctrl.displayedCrime = {};
	};

	ctrl.$onChanges = function (changes) {
		ctrl.crimes = changes.crimes.currentValue;
		console.log('UPDATE!!!!');
	};
};

angular.module('crimeApp').component('crimeMap', {
	templateUrl: 'partials/crime-map.html',
	controller: MapController,
	bindings: {
		crimes: '<'
	}
});