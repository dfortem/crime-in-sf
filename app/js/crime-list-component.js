'use strict';

var ListController =function () {
  var ctrl = this;

  ctrl.$onInit = function () {
    console.log('LIST INIT!!!');
    console.log(ctrl.crimes);
  };

  ctrl.$onChanges = function (changes) {
    ctrl.crimes = changes.crimes.currentValue;
    console.log('LIST UPDATE!!!!');
    console.log(ctrl.crimes);
  };
  
};

angular.module('crimeApp').component('crimeList', {
  templateUrl: 'partials/crime-list.html',
  controller: ListController,
  bindings: {
    crimes: '<'
  }
});