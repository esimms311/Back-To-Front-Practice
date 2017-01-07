angular.module('customers', ['ui.router']).config(function($stateProvider, $urlRouterProvider){

  $urlRouterProvider.otherwise('/')

  $stateProvider
  .state('home', {
    url: '/',
    templateUrl: './views/home.html',
    controller: 'homeCtrl'
  })
  .state('customers', {
    url: '/customers',
    templateUrl: './views/customers.html',
    controller: 'customersCtrl'
  })
  // .state('')

});
