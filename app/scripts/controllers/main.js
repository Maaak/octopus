'use strict';

/**
 * @ngdoc function
 * @name octopusApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the octopusApp
 */
angular.module('octopusApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
