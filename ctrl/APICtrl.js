angular
  .module('app')
  .controller('APICtrl', ['$scope', 'friends', function($scope, friends) {
    $scope.title = "Working with APIs";
    $scope.friends = friends; 
  }]);