var app = angular.module('app', ['ui.router', 'ngAnimate', 'ngTouch']);

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
    $scope.selectedCube = $stateParams.cube;
    if ($scope.selectedCube == 1) {
        //Text Cube Gris
    } else if ($scope.selectedCube == 2) {
        //Text Cube Jaune
    } else if ($scope.selectedCube == 3) {
        //Text Cube Orange
    } else if ($scope.selectedCube == 4) {
        //Text Cube Vert
    } else if ($scope.selectedCube == 5) {
        //Text Cube Bleu
    }
}]);