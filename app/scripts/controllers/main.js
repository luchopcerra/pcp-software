'use strict';

/**
 * @ngdoc function
 * @name pcpwebApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the pcpwebApp
 */
angular.module('pcpwebApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
