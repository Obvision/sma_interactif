app.controller('cube2Ctrl', ['$scope', '$state', '$timeout', function ($scope, $state, $timeout) {
	$scope.title = false;
	$scope.p1 = false;
	$scope.p2 = false;
	$scope.p3 = false;
	$scope.p4 = false;
	$scope.p5 = false;


	$timeout(function () {
		$scope.title = true;
		$timeout(function () {
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
							}, 2000);
						}, 2000);
					}, 2000);
				}, 2000);
			}, 2000);
		}, 2000);
	}, 3000);
}]);