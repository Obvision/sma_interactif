var app = angular.module('app', ['ui.router', 'ngAnimate', 'ngTouch', 'ui.utils']);

app.config(function ($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise("/home");
	$stateProvider
		.state('home', {
			url: "/home",
			templateUrl: "app/partials/home.html",
			controller: "homeCtrl"
		})
		.state('info', {
			url: "/info/:cube",
			templateUrl: "app/partials/info.html",
			controller: "infoCtrl"
		})
});

app.run(['$state', '$rootScope', function ($state, $rootScope) {
	$rootScope.$state = $state;
}]);


app.directive('drag', function () {
	return {
		restrict: 'A',
		link: function (scope, el, attrs, controller) {
			el.dragon();
		}
	}
});

app.controller('coreCtrl', ['$scope', function ($scope) {

}]);


app.controller('homeCtrl', ['$scope', '$state', function ($scope, $state) {
	$scope.inMotionCube1 = false;
	$scope.inMotionCube2 = false;
	$scope.inMotionCube3 = false;
	$scope.inMotionCube4 = false;
	$scope.inMotionCube5 = false;

	$scope.cubeClicked = function (cube) {
		$state.go('info', {
			cube: cube
		})
	}
}]);


app.controller('infoCtrl', ['$scope', '$stateParams', function ($scope, $stateParams) {
	var data = [
		{
			title: 'Maroc, là où la Culture inspire l’Art',
			contentPath: 'app/templates/cube1_data.html'
		},
		{
			title: 'Un pays ou l’hospitalité révèle un Art de vivre',
			contentPath: 'app/templates/cube2_data.html'
		},
		{
			title: 'Maroc, un Pays d’Histoire',
			contentPath: 'app/templates/cube3_data.html'
		},
		{
			title: 'Maroc, un pays de tolérance',
			contentPath: 'app/templates/cube4_data.html'
		},
		{
			title: 'Un pays moderne et  tourné vers l’avenir',
			contentPath: 'app/templates/cube5_data.html'
		}
		]
	$scope.selectedCube = data[$stateParams.cube];
}]);