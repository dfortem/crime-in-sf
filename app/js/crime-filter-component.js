'use strict';

var CrimeController = function (crimeFactory, $filter) {
  var ctrl = this;

  ctrl.$onInit = function () {
    ctrl.crimeToDisplay = [];
    ctrl.loading = true;
    ctrl.maxDate = new Date (2015, 2, 18);
    ctrl.defaultDate = new Date (2015, 2, 11);
    ctrl.startDate = ctrl.defaultDate;
    ctrl.crimeTypes = [{
      name: 'Agravated Assault',
      tag: 'AA',
      selected: true}, {
      name: 'Murder',
      tag: 'Mu',
      selected: true}, {
      name: 'Robbery',
      tag: 'Ro',
      selected: true}, {
      name: 'Simple Assault',
      tag: 'SA',
      selected: true}, {
      name: 'Arson',
      tag: 'Ar',
      selected: true}, {
      name: 'Burglary',
      tag: 'Bu',
      selected: true}, {
      name: 'Theft',
      tag: 'Th',
      selected: true}, {
      name: 'Vandalism',
      tag: 'Va',
      selected: true}, {
      name: 'Vehicle Theft',
      tag: 'VT',
      selected: true}, {
      name: 'Alcohol',
      tag: 'Al',
      selected: true}, {
      name: 'Distributing the Peace',
      tag: 'DP',
      selected: true}, {
      name: 'Narcotics',
      tag: 'Na',
      selected: true}, {
      name: 'Prostitution',
      tag: 'Pr',
      selected: true}];

    ctrl.getCrimes();
  };

  ctrl.getCrimes = function () {
    var params = {};
    //fiter by date
    var dstart = $filter('date')(ctrl.startDate, 'yyyy-MM-dd');
    params.dstart = dstart ? dstart : ctrl.defaultDate;
    var dend = $filter('date')(ctrl.endDate, 'yyyy-MM-dd');
    if (dend) params.dend = dend;
    //filter by type
    var types = '';
    _.each(ctrl.crimeTypes, function (type) {
      if (type.selected) types += type.tag + ',';
    });
    types = types.substring(0, types.length - 1);
    console.log(types);
    if (types !== '') params.type = types;
    //fetch data
    ctrl.loading = true;
    crimeFactory.getCrimesFiltered(params)
      .then(crimeFactory.createDataList)
      .then(function (response) {
        ctrl.crimeToDisplay = response;
        ctrl.loading = false;
        console.log('Data succesfully loaded');
      })
      .catch(function (error) {
        ctrl.loading = false;
        var err = 'Unable to load crime data' + error.status;
        console.log(err);
      });
  };

  ctrl.onClick = function () {
    console.log('loading...');
    ctrl.getCrimes();
    console.log(ctrl.a);
  };

  ctrl.selectStartDate = function () {
    if (ctrl.startDate > ctrl.endDate) {
      ctrl.endDate = undefined;
    }
  };

  ctrl.isChecked = function () {
    return _.filter(ctrl.crimeTypes, function (type) {
      return type.selected;
    }).length === ctrl.crimeTypes.length;
  };

  ctrl.isIndeterminate = function () {
    return !ctrl.isChecked() && _.filter(ctrl.crimeTypes, function (type) {
      return type.selected;
    }).length !== 0;
  };

  ctrl.toggleAll = function () {
    var unSelelctAll = ctrl.isChecked();
    _.each(ctrl.crimeTypes, function (type) {
      type.selected = unSelelctAll ? false : true;
    });
  };

  ctrl.openMenu = function ($mdOpenMenu, ev) {
      //originatorEv = ev;
      $mdOpenMenu(ev);
    };
};

angular.module('crimeApp')
  .component('crimeFilter', {
  templateUrl: 'partials/crime-filter.html',
  controller: CrimeController
});
