'use strict';

angular.module('preciousApp')
  .controller('MainCtrl', function ($scope, $http, socket) {
    var places = [];
  
    $.get('/api/places', function (data) {

        $(".typeahead").typeahead({ 
          source:function (query, callback) {
            places = [];
              $http.get('/api/places/'+query)
              .success(function(data) {
                  $.each(data, function (k, v) {
                    places.push(v.name);
                  });
                  callback(places);
              })
          } 
        });
    },'json');


    $scope.$on('$destroy', function () {
      socket.unsyncUpdates('places');
    });
  });
