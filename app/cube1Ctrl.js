app.controller('cube1Ctrl', ['$scope', '$state', '$timeout', function ($scope, $state, $timeout) {
	$scope.title = false;
	$scope.p1 = false;
	$scope.p2 = false;

	$timeout(function () {
		$scope.title = true;
		$timeout(function () {
			$scope.p1 = true;
			$timeout(function () {
				$scope.p1 = false;
				$timeout(function () {
					$scope.p2 = true;
				}, 2000);
			}, 20000);
		}, 2000);
	}, 2000);
}]);