app.controller('cube5Ctrl', ['$scope', '$state', function ($scope, $state) {
    $scope.title = false;
    $scope.part1 = false;
    $scope.part2 = false;
    $scope.part3 = false;
    $scope.p1 = false;
    $scope.p2 = false;
    $scope.p3 = false;
    $scope.p4 = false;
    $scope.p5 = false;
    $scope.p6 = false;
    $scope.p7 = false;

    $scope.triggerPart3 = function () {
        $scope.part2 = false;
        $timeout(function () {
            $scope.part3 = true;
            $timeout(function () {
                $scope.p8 = true;
            }, 2000);
        }, 2000);
    }

    $scope.triggerPart2 = function () {
        $scope.part1 = false;
        $timeout(function () {
            $scope.part2 = true;
            $timeout(function () {
                $scope.part2 = false;
            }, 10000);
        }, 2000);
    }

    $timeout(function () {
        $scope.title = true;
        $timeout(function () {
            $scope.part1 = true;
            $scope.p1 = true;
            $timeout(function () {
                $scope.p2 = true;
                $timeout(function () {
                    $scope.p3 = true;
                    $timeout(function () {
                        $scope.p4 = true;
                        $timeout(function () {
                            $scope.p5 = true;
                            $timeout(function () {
                                $scope.p6 = true;
                                $timeout(function () {
                                    $scope.triggerPart2();
                                }, 5000);
                            }, 2000);
                        }, 2000);
                    }, 2000);
                }, 2000);
            }, 2000);
        }, 2000);
    }, 3000);
}]);