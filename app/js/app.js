'use strict';

// Declare app module
angular.module('crimeApp', ['ngMap', 'ngMaterial'])
.config(function ($mdDateLocaleProvider, $mdThemingProvider) {
  // Calendar week display to start on Monday.
  $mdDateLocaleProvider.firstDayOfWeek = 1;

  //Set color scheme for angular Materila
  $mdThemingProvider.theme('default')
    .primaryPalette('indigo')
    .accentPalette('indigo');
});
