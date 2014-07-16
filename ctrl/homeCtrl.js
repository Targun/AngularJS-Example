angular
  .module('app')
  .controller('homeCtrl', ['$scope', function($scope) {
    $scope.title = "Home Basic";
    $scope.items = ['thing1', 'thing2', 'thing3'];
  }]);