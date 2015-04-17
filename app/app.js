var app = angular.module('app', ['ui.router']);

app.config(function ($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise("/home");
	$stateProvider
		.state('home', {
			url: "/home",
			templateUrl: "/app/partials/home.html",
			controller: "homeCtrl"
		})
		.state('info', {
			url: "/info",
			templateUrl: "/app/partials/info.html",
			controller: "infoCtrl"
		})
});

app.controller('homeCtrl', ['$scope', function ($scope) {

}]);

app.controller('infoCtrl', ['$scope', function ($scope) {

}]);