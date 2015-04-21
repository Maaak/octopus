'use strict';

/**
 * @ngdoc function
 * @name octopusApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the octopusApp
 */
angular.module('octopusApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
