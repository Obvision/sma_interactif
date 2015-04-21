app.controller('cube1Ctrl', ['$scope', '$state', '$timeout', function ($scope, $state, $timeout) {
	$scope.title = false;
	$scope.part1 = false;
	$scope.part2 = false;
	$scope.p1 = false;
	$scope.p2 = false;
	$scope.p3 = false;
	$scope.p4 = false;
	$scope.p5 = false;
	$scope.p6 = false;

	$scope.triggerPart2 = function () {
		$scope.part1 = false;
		$timeout(function () {
			$scope.part2 = true;
			$scope.p7 = true;
			$timeout(function () {
				$scope.p8 = true;
				$timeout(function () {
					$scope.p9 = true;
					$timeout(function () {
						$scope.p10 = true;
						$timeout(function () {
							$scope.p11 = true;
						}, 2000);
					}, 2000);
				}, 2000);
			}, 2000);
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