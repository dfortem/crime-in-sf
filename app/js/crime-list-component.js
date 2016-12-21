'use strict';

var ListController = function () {
  var ctrl = this;

  ctrl.$onChanges = function (changes) {
    ctrl.crimes = changes.crimes.currentValue;
  };
};

angular.module('crimeApp').component('crimeList', {
  templateUrl: 'partials/crime-list.html',
  controller: ListController,
  bindings: {
    crimes: '<'
  }
});
