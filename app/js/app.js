'use strict';

// Declare app module
angular.module('crimeApp', ['ngMap', 'ngMaterial'])
.config(function ($mdDateLocaleProvider) {
  // Calendar week display to start on Monday.
  $mdDateLocaleProvider.firstDayOfWeek = 1;
});
