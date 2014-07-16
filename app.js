angular
  .module('app', [
    'ui.router'
  ])
  .config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider

      .state('home', {
        url: '/',
        templateUrl: 'views/home.html',
        controller: 'homeCtrl'
      })

      .state('API', {
        url: '/API',
        templateUrl: 'views/API.html',
        controller: 'APICtrl',
        resolve: {
          friends: ['$http', function($http){
            return $http.get('friends.html').then(function(response) {
              return response.data;
            })
          }]
        }
      })

  }])