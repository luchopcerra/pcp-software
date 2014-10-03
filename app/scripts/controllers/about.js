'use strict';

/**
 * @ngdoc function
 * @name pcpwebApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the pcpwebApp
 */
angular.module('pcpwebApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
