'use strict';

// instantiate application module
var app = angular.module('tutorialFirebase', ['ngRoute']);

// configure routing
app.config(['$routeProvider', function($routeProvider){
	$routeProvider.when('/', {
		templateUrl: 'views/main.html',
		controller: 'MainCtrl'
	})
	.otherwise({
		redirectTo: '/'
	});
}]);
