require('angular');
require('angular-ui-router');
require('./components/home/home.js');
require('./shared/progressBar.js');


var app = angular.module('app', ['ui.router','myApp.home', 'myApp.shared']);

app.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise("/");
    $stateProvider
        .state('home', {
            url: "/",
            templateUrl:"app/components/home/home.html",
            controller:"HomeController",
            controllerAs:'vm'
        });

});