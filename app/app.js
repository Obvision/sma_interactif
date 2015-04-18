var app = angular.module('app', ['ui.router', 'ngAnimate']);

app.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/home");
    $stateProvider
        .state('home', {
            url: "/home",
            templateUrl: "app/partials/home.html",
            controller: "homeCtrl"
        })
        .state('info', {
            url: "/info",
            templateUrl: "app/partials/info.html",
            controller: "infoCtrl"
        })
});

app.controller('homeCtrl', ['$scope', function ($scope) {
    $scope.inMotionCube1 = false;
    $scope.inMotionCube2 = false;
    $scope.inMotionCube3 = false;
    $scope.inMotionCube4 = false;
    $scope.inMotionCube5 = false;

    $scope.cubeClicked = function (cube) {
        if (cube == 1) {
            $scope.inMotionCube1 = true;
        } else if (cube == 2) {
            $scope.inMotionCube2 = true;
        } else if (cube == 3) {
            $scope.inMotionCube3 = true;
        } else if (cube == 4) {
            $scope.inMotionCube4 = true;
        } else if (cube == 5) {
            $scope.inMotionCube5 = true;
        }
    }
}]);

app.controller('infoCtrl', ['$scope', function ($scope) {

}]);