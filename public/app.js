var app = angular.module('app', ['ui.router', 'ngAnimate', 'ngTouch', 'ui.utils', 'hmTouchEvents']);

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
        .state('_info', {
            url: "/_info/:cube",
            templateUrl: "app/partials/_info.html",
            controller: "_infoCtrl"
        })
});

app.run(['$state', '$rootScope', function ($state, $rootScope) {
    $rootScope.$state = $state;
}]);

app.run(function () {
    FastClick.attach(document.body);
});

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
            title: 'Maroc, un pays où l’hospitalité révèle un Art de vivre',
            contentPath: 'app/templates/cube2_data.html'
  },
        {
            title: 'Maroc, un Pays d’Histoire',
            contentPath: 'app/templates/cube3_data.html'
  },
        {
            title: 'Maroc, un pays de Tolérance',
            contentPath: 'app/templates/cube4_data.html'
  },
        {
            title: 'Maroc, un pays Moderne et tourné vers l’avenir',
            contentPath: 'app/templates/cube5_data.html'
  }
  ]
    $scope.selectedCube = data[$stateParams.cube];
}]);

app.controller('_infoCtrl', ['$scope', '$stateParams', function ($scope, $stateParams) {
    var data = [
        {
            title: 'Maroc, là où la Culture inspire l’Art',
            videoUrl: 'media/1.mp4'
  },
        {
            title: 'Maroc, un pays où l’hospitalité révèle un Art de vivre',
            videoUrl: 'media/2.mp4'
  },
        {
            title: 'Maroc, un Pays d’Histoire',
            videoUrl: 'media/3.mp4'
  },
        {
            title: 'Maroc, un pays de Tolérance',
            videoUrl: 'media/4.mp4'
  },
        {
            title: 'Maroc, Un pays moderne et tourné vers l’avenir',
            videoUrl: 'media/5.mp4'
  }
  ]
    $scope.selectedCube = data[$stateParams.cube];
}]);
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
app.controller('cube3Ctrl', ['$scope', '$state', '$timeout', function ($scope, $state, $timeout) {

	$scope.title = false;
	$scope.p1 = false;
	$scope.p2 = false;
	$scope.p3 = false;
	$scope.p4 = false;
	$scope.p5 = false;
	$scope.p6 = false;
	$scope.p7 = false;
	$scope.p8 = false;
	$scope.p9 = false;


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
								$timeout(function () {
									$scope.p7 = true;
									$timeout(function () {
										$scope.p8 = true;
										$timeout(function () {
											$scope.p9 = true;
										}, 2000);
									}, 2000);
								}, 2000);
							}, 2000);
						}, 2000);
					}, 2000);
				}, 2000);
			}, 2000);
		}, 2000);
	}, 3000);

}]);
app.controller('cube4Ctrl', ['$scope', '$state', '$timeout', function ($scope, $state, $timeout) {
    $scope.title = false;
    $scope.p1 = false;
    $scope.p2 = false;
    $scope.p3 = false;
    $scope.p4 = false;
    $scope.p5 = false;
    $scope.p6 = false;
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
app.controller('cube5Ctrl', ['$scope', '$state', '$timeout', function ($scope, $state, $timeout) {
	$scope.title = false;
	$scope.part1 = false;
	$scope.part2 = false;
	$scope.part3 = false;
	$scope.part4 = false;
	$scope.part5 = false;
	$scope.p1 = false;
	$scope.p2 = false;
	$scope.p3 = false;
	$scope.p4 = false;
	$scope.p5 = false;
	$scope.p6 = false;
	$scope.p7 = false;
	$scope.p8 = false;
	$scope.p9 = false;
	$scope.p10 = false;
	$scope.p11 = false;
	$scope.p12 = false;

	$scope.triggerPart2 = function () {
		$scope.part1 = false;
		$timeout(function () {
			$scope.part2 = true;
			$timeout(function () {
				$scope.part2 = false;
				$scope.part3 = true;
				$timeout(function () {
					$scope.p7 = true;
					$timeout(function () {
						$scope.p8 = true;
						$timeout(function () {
							$scope.p9 = true;
							$timeout(function () {
								$scope.part3 = false;
								$scope.part4 = true;
								$timeout(function () {
									$scope.p10 = true;
									$timeout(function () {
										$scope.p11 = true;
										$timeout(function () {
											$scope.p12 = true;
											$timeout(function () {
												$scope.part4 = false;
												$scope.part5 = true;
												$timeout(function () {
													$scope.p13 = true;
													$timeout(function () {
														$scope.p14 = true;
														$timeout(function () {
															$scope.p15 = true;
															$timeout(function () {
																$scope.part5 = false;
																$scope.part6 = true;
																$timeout(function () {
																	$scope.p16 = true;
																	$timeout(function () {
																		$scope.p17 = true;
																		$timeout(function () {
																			$scope.p18 = true;
																			$timeout(function () {
																				$scope.part6 = false;
																				$scope.part7 = true;
																				$timeout(function () {
																					$scope.p19 = true;
																					$timeout(function () {
																						$scope.p20 = true;
																						$timeout(function () {
																							$scope.p21 = true;
																							$timeout(function () {
																								$scope.part7 = false;
																								$scope.part8 = true;
																								$timeout(function () {
																									$scope.p22 = true;
																									$timeout(function () {
																										$scope.p23 = true;
																										$timeout(function () {
																											$scope.p24 = true;
																											$timeout(function () {
																												$scope.part8 = false;
																												$scope.part9 = true;
																												$timeout(function () {
																													$scope.p25 = true;
																													$timeout(function () {
																														$scope.p26 = true;
																														$timeout(function () {
																															$scope.p27 = true;
																															$timeout(function () {
																																$scope.part9 = false;
																																$scope.part10 = true;
																																$timeout(function () {
																																	$scope.p28 = true;
																																	$timeout(function () {
																																		$scope.p29 = true;
																																		$timeout(function () {
																																			$scope.p30 = true;
																																		}, 5000);
																																	}, 5000);
																																}, 5000);
																															}, 5000);
																														}, 5000);
																													}, 5000);
																												}, 5000);
																											}, 5000);
																										}, 5000);
																									}, 5000);
																								}, 5000);
																							}, 5000);
																						}, 5000);
																					}, 5000);
																				}, 5000);
																			}, 5000);
																		}, 5000);
																	}, 5000);
																}, 5000);
															}, 5000);
														}, 5000);
													}, 5000);
												}, 5000);
											}, 5000);
										}, 5000);
									}, 5000);
								}, 5000);
							}, 5000);
						}, 5000);
					}, 5000);
				}, 5000);
			}, 5000);
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
							}, 5000);
						}, 5000);
					}, 5000);
				}, 5000);
			}, 2000);
		}, 2000);
	}, 3000);
}]);