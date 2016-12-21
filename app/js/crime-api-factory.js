"use strict";

angular.module("crimeApp")
.factory("crimeFactory", ["$http", "$httpParamSerializer", "$filter",
  function ($http, $httpParamSerializer, $filter) {
  var urlBase = "http://sanfrancisco.crimespotting.org/crime-data?";
  var dataFactory = {};

  dataFactory.getLastCrimes = function () {
    var date = new Date (2015, 2, 18, 23, 59, 59, 59);
    var dstart = $filter("date")(date, "yyyy-MM-dd'T'HH:mm:ss'Z'");
    var params = $httpParamSerializer({
      format: "json",
      dtstart: dstart,
      callback: "JSON_CALLBACK",
      count: 10000
    });
    return $http.jsonp(urlBase + params);
  };

  dataFactory.getCrimesFiltered = function (params) {
    params.format = "json";
    params.callback = "JSON_CALLBACK";
    params.count = 10000;
    params = $httpParamSerializer(params);
    return $http.jsonp(urlBase + params);
  };

  dataFactory.createDataList = function (brutData) {
    var dataList = [];
    _.each(brutData.data.features, function (object) {
      if (!object) return;
      var data;
      if (object.properties) data = object.properties;
      if (object.geometry && object.geometry.coordinates.length === 2 &&
        object.geometry.type === "Point") {
        data.lng = object.geometry.coordinates[0];
        data.lat = object.geometry.coordinates[1];
      }
      if (data) dataList.push(data);
    });

    return dataList;
  };

  return dataFactory;
}]);
