var app = angular.module('app', ['ui.router', 'ngAnimate', 'ngTouch', 'ui.utils', 'hmTouchEvents', 'pascalprecht.translate']);

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
app.config(['$translateProvider', function ($translateProvider) {
    $translateProvider.translations('de', {
        'SMA_TITLE': 'Marokkowoche',
        'CUBE1_TITLE': 'Marokko, wo die Kultur die Kunst inspiriert',
        'CUBE1_INTRO': 'Marokko ist ein Land, wo sich Kunst und Kultur vermischen, eine wirkliche Einladung zum Reisen, ein Gesamtkunstwerk der Begegnung, an dem sich auf vielfältige Art und Weise teilhaben lässt. ',
        'ARTISANAT_TITLE': 'Ein Kunsthandwerk auf der Suche nach dem Schönen',
        'ARTISANAT_TEXT': 'Ein Kunsthandwerk in tausend und einer Facette, wo das Objekt eine menschliche Dimension einnimmt und das authentischste Zeugnis der Suche nach Schönheit ist.',
        'CUISINE_TITLE': 'Eine Kochkunst, die die Frucht verschiedener Einflüsse ist',
        'CUISINE_TEXT': 'Anerkannt wie eine Kunst ist die marokkanische Küche die Frucht phönizischer, kathargischer, römischer, arabischer, andalusischer, türkischer, französischer Einflüsse und bleibt offen für weitere.',
        'PATRIMOINE_TITLE': 'Ein materielles und immaterielles Erbe von großem Reichtum ',
        'A_MONUMENTS_DU_MAROC': 'Marokko, seine Sehenswürdigkeiten und klassischen Monumente ',
        'CONTEMPORAIN_TITLE': 'Eine zeitgenössische Schöpfung, die sich vermischt und ihre eigene Handschrift schafft',
        'CONTEMPORAIN_TEXT': 'Wenn es sich um darstellende Kunst, Literatur, Kino, Videokunst, Theater, Architektur, Mode oder Musik dreht, drückt die zeitgenössische Kunst in Marokko die Widersprüche einer Gesellschaft aus, die zutiefst ihrem geschichtlichen Erbe verbunden ist, die den  Schock der Moderne durchläuft und ihre eigene Handschrift schafft.',
        'CUBE2_TITLE': 'Marokko, ein land wo die Gastfreundschaft eine Lebenskunst offenbart',
        'HOSPITALITE_TITLE': 'Ein Fleck Erde der Gastfreundschaft und der Begegnung',
        'HOSPITALITE_TEXT': 'Gastlich und weltoffen, hat es Marokko verstanden, die Gastfreundschaft zu einem echten Lebensstil zu erheben. Eine Geste der Großzügigkeit, des Gemeinsinns und der Toleranz, die authentische Momente des Miteinanderteilens hervorgebracht hat.',
        'TOURISME_TITLE': 'Ein Tourismus, der seine gastliche Tradition bewahrt',
        'TOURISME_TEXT': 'Charakteristisch für den marokkanischen Tourismus ist seine Authentizität, seine Vielfalt, seine Qualität und seine Nachhaltigkeit, mit der er sich unter den Mittelmeerländern empfiehlt.',
        'PLAN_AZUR': 'Der himmelblaue Plan',
        'PLAN_AZUR_TEXT': 'wurde eingerichtet, um eine Reihe von wirtschaftlich tragfähigen und soziokulturellen Qualitätsunterkünften zu schaffen, die die Prinzipien der nachhaltigen Entwicklung unter den Aspekten des Umweltschutzes respektieren.',
        'A_MINISTER_TOURISME': 'Marokkanisches Tourismusministerium',
        'CUBE3_TITLE': 'Marokko, ein Land voller Geschichte',
        'CIVILISATION_TITLE': 'Ein Land, in dem sich Zivilisationen vereinen',
        'CIVILISATION_TEXT': 'Vom Königreich der Mauren… über das Römische Reich bis hin zur Islamisierung, Marokko ist ein wahrer Schmelztiegel der Zivilisationen, die seine vielfältige Identität geschaffen haben.',
        'COMPOSANTS_TITLE': 'Ein Land mit vielfältigen Kulturen',
        'COMPOSANTS_TEXT': 'Es sind die verschiedenen Kulturen Marokkos wie die amazighische, jüdisch-christliche, arabisch-muslimische und afro-saharische, die seine Besonderheit, seine Einzigartigkeit, seine Vielfalt und seinen kulturellen Reichtum prägen.',
        'REFORMES_TITLE': 'Ein Land, das historische Reformen kennengelernt hat',
        'REFORMES_TEXT1': 'Gelegen in einer Region, die von den Ereignissen des Arabischen Frühlings durcheinander gewirbelt wurde, hat das Königreich seine Stabilität und seinen sozialen Zusammenhalt gefestigt, indem es politische und bedeutende wirtschaftliche Reformen vorangetrieben hat.',
        'REFORMES_TEXT2': 'Die neue Verfassung beinhaltet die vollkommene Gleichstellung von Männern und Frauen.',
        'CUBE4_TITLE': 'Marokko, ein Land der Toleranz',
        'TOLERANCE_TITLE': 'Ein von Toleranz bestimmtes religiöses Modell',
        'TOLERANCE_TEXT': 'Sein religiöses Modell zeigt mit aller Kraft, dass Traditionen und Islam nicht im Gegensatz zur Moderne und der Entwicklung der Demokratie stehen.',
        'RME_TITLE': 'Die im Ausland lebenden Marokkaner, eine Gemeinschaft der Botschafter unserer Kultur',
        'RME_TEXT1': 'Ebenso wie Ibn Batouta, der Forschungsreisende des 12. Jahrhunderts, der in seinem Leben 120.000 km zurücklegte, sind unsere Landsleute heute in die weite Welt ausgewandert und haben eine bedeutende Gemeinschaft geschaffen.',
        'RME_TEXT2': 'Diese auf ihre Art Suchenden brechen zur Entdeckung eines neuen Landes auf und werden Botschafter unserer Kultur, unseres Erbes und der Toleranz.',
        'CUBE5_TITLE': 'Marokko, ein modernes und der Zukunft zugewandtes Land',
        'CUBE5_INTRO': 'Trotz des Arabischen Frühlings und der Krise der Weltwirtschaft hat Marokko die Stabilität seiner Regierung und die Attraktivität seiner Wirtschaft gewahrt.',
        'POS_STRAT_TITLE': 'Ein Land in einer besonderen strategischen Position',
        'POS_STRAT_TEXT': 'Im äußersten Nordwesten des afrikanischen Kontinents und über die Straße von Gibraltar nur 15 Kilometer entfernt von Europa gelegen, ist das Königreich Marokko eine strategische Plattform sowohl für die politisch-ökonomische wie kulturelle Entwicklung und besitzt zudem eine Schlüsselstellung für Afrika, Europa und den mittleren Orient.',
        'MARCHE_IMPORTANT_TITLE': 'Ein Land mit einem wichtigen potenziellen Markt',
        'MARCHE_IMPORTANT_TEXT': 'Seine Zustimmung zu Freihandelsabkommen ermöglicht Marokko den uneingeschränkten Zugang  zu einem Markt mit Milliarden an Verbrauchern!',
        'STRATEGIES_TITLE': 'Ein Land, das Strategien initiiert hat, um sich den neuen weltweiten Gegebenheiten anzupassen',
        'STRATEGIES_TEXT': 'Ganz entschieden der Zukunft zugewandt und alles  auf die nachhaltige Entwicklung seiner wirtschaftlichen Strategie ausrichtend, hat sich das Königreich mehrere Programme in Schlüsselbereichen auferlegt, um ausländische Investitionen anzustoßen.',
        'STRAT_PNEI': 'Das Nationale Abkommen zur Förderung der Industrie (PNEI)',
        'STRAT_PNEI_TEXT1': 'Eine voluntaristische Strategie mit dem Ziel, im Ausland lebende, wettbewerbsfähige marokkanische Staatsbürger durch die Schaffung von ihnen speziell gewidmeten industriellen Bereichen und Plattformen wieder ins Land zu holen, ein umfangreiches, attraktives Förder- und gleichzeitig Ausbildungs- und Schulungsprogramm.',
        'STRAT_PNEI_TEXT2': 'Der Schwerpunkt liegt auf den globalen Branchen Marokkos, z.B. Automobilindustrie, Luftfahrt, Elektrotechnik, Offshoring-Märkte, landwirtschaftliche Nahrungsmittelerzeugung, …',
        'STRAT_CNEDD': 'Die Charta zum Schutz der Umwelt und zur nachhaltigen Entwicklung (CNEDD)',
        'STRAT_CNEDD_TEXT': 'Ein großes gesellschaftliches Projekt, das aus dem Schutz der Umwelt eine Speerspitze zur nachhaltigen Entwicklung des Königreiches macht.',
        'A_CNEDD_PLAQUETTE': 'Broschüre der CNEDD',
        'A_CNEDD_RAPPORT': 'Lagebericht der Charta',
        'A_CNEDD_WEBSITE': 'nternetseite der CNEDD',
        'STRAT_MV': 'Der grüne Plan von Marokko ',
        'STRAT_MV_TEXT': 'Ein Plan, um den Landwirtschafts- und Agrarwirtschaftssektor zu begleiten, die das Herzstück der Nahrungsmittelsicherheit für 32 Millionen Verbraucher ausmachen.',
        'A_MINISTERE_AGR': 'Ministerium für Landwirtschaft und Hochseefischerei',
        'A_PORTAIL_SP': 'Portal der öffentlichen Dienstleistungen',
        'STRAT_HALIEUTIS': 'Der Fischerei-Plan',
        'STRAT_HALIEUTIS_TEXT': 'Ein Vorhaben, das ganz auf die Entwicklung des Fischerei-Sektors zielt, um die Ressourcen für zukünftige Generationen zu erhalten und heute deren Sauberkeit und Gesundheit zu sichern.',
        'A_SALON_HALIEUTIS': 'Messe « Le Salon Halieutis »',
        'A_MINISTERE_AGR_PECHE': 'Ministerium für Landwirtschaft und Hochseefischerei – Abteilung Hochseefischerei',
        'STRAT_PS': 'Der Solar-Plan',
        'STRAT_PS_TEXT': 'Ein Projekt im Rahmen der Energiestrategie Marokkos, das auf die Entwicklung erneuerbarer Energien und auf die nachhaltige Entwicklung setzt.',
        'A_AGENCE_ES': 'Solar-Energie-Agentur von Marokko',
        'STRAT_PN_EGOV': 'Der marokkanische Digital-Plan «e-Gouvernement » (Informations- und Kommunikationstechnologien)',
        'STRAT_PN_EGOV_TEXT': 'Ein Plan, der eine elektronische Verwaltung umfasst, die ganz auf den Dienst am Bürger und für die Unternehmen ausgerichtet ist.',
        'A_PORTAIL_EGOV': 'Das Portal E-Gouvernement',
        'A_PORTAIL_SERVICE_PUBLIQUE': 'Das Portal der Öffentlichen Dienstleistungen',
        'A_MINISTERE_FPUB': 'Internetseite des Ministeriums für den Öffentlichen Dienst und die Modernisierung der Verwaltung',
        'A_TWITTER_EGOV': 'Twitter-Account E-GOV',
        'A_FACEBOOK_EGOV': 'Facebook-Seite E-GOV',
        'STRAT_ANPME': 'Die Nationale Agentur zur Förderung kleiner und mittelständischer Unternehmen (ANPME) ',
        'STRAT_ANPME_TEXT': 'Eine Agentur, die sich Unternehmen widmet, um sie im Prozess der Modernisierung und Verbesserung ihrer Wettbewerbsfähigkeit zu begleiten',
        'STRAT_INDH': 'Die Nationale Initiative zur sozialen Entwicklung (INDH)',
        'STRAT_INDH_TEXT': 'Die INDH ist ein Instrument im Kampf gegen Armut, Prekarität und sozialen Ausschluss.',
        'A_INI_DEV_HUMAIN': 'Nationale Initiative Nationale zur sozialen Entwicklung',
        'A_MINISTERE_SOLIDARITE': 'Ministerium für Soziales, Frauen, Familie und gesellschaftliche Entwicklung',

        'EN_SAVOIR_PLUS': 'Mehr Informationen :',

    }).translations('ar', {
        'SMA_TITLE': 'أسبوع المغرب في ألمانيا',
        'CUBE1_TITLE': 'المغرب، حيث الثقافة تلهم الفن',
        'CUBE1_INTRO': 'المغرب بلد حيث تتماها الثقافة بالفن، إنه دعوة صريحة للسفر، عطر اللقاء الذي يمنح نفسه ليتم تقاسمه على أكثر من نقطة',
        'ARTISANAT_TITLE': 'صناعة تقليدية في بحث مستمر على الجميل',
        'ARTISANAT_TEXT': 'صناعة تقليدية بألف وجه ووجه، حيث الموضوع يأخذ بعده الإنساني وهو حليل أصيل على بحثها المستمر عن الجمال',
        'CUISINE_TITLE': 'فن طبخ راق، هو باكورة مؤثرات عديدة',
        'CUISINE_TEXT': 'اشتهر فن الطبخ المغربي كفن قائم بذاته، فهو نتاج مؤثرات عديدة فينيقية، قرطاجية، رومانية، عربية، أندلسية، تركية، فرنسية، وتبقى منفتحة على مؤثرات أخرى',
        'PATRIMOINE_TITLE': 'تراث مادي ولا مادي، غني ومتنوع',
        'A_MONUMENTS_DU_MAROC': 'المواقع الخاصة بالمآثر المغربية',
        'CONTEMPORAIN_TITLE': 'إبداع معاصر بألوان عديدة وقادر على خلق بصمته الخاصة',
        'CONTEMPORAIN_TEXT': 'سواء تعلق الأمر بالرسوم التشكيلية أو الأداب، السينما، الفيديو، المسرح، الهندسة، الموضة، الفن المغربي المعاصر يعبر عن تناقضات مجتمع يرتبط إلى تاريخ عريق لتراثه الذي يسعى نحو خلق بصمة خاصة به',
        'CUBE2_TITLE': 'المغرب، بلد حسن الضيافة حيث الكرم يعبر عن فن العيش',
        'HOSPITALITE_TITLE': 'أرض حسن الضيافة واللقاءات',
        'HOSPITALITE_TEXT': 'بلد حسن الاستقبال واللقاءات، فالمغرب عرف كيف يجعل من حسن الضيافة واحدة من أهم أساسيات فن العيش، لمسات تعبر عن الكرم، التضامن والتسامح والتي تجعلكم تعيشون فيه لحظات لا مثيل لها من الإحساس بالمشاركة',
        'TOURISME_TITLE': 'سياحة تؤكد عن عراقة تقليد الاستقبال',
        'TOURISME_TEXT': 'السياحة المغربية رمز للأصالة، التنوع، الجودة والاستمرارية، تفرض نفسها كمرجع أساسي لبلدان البحر الأبيض المتوسط',
        'PLAN_AZUR': 'المخطط الأزرق',
        'PLAN_AZUR_TEXT': 'تم إدراجه لخلق مجموعة سلاسل فندقية ذات جودة عالية، والتي تحترم شروط التطور المستمر في إطار جوانبه البيئية والاقتصادية والسوسيوثقافية',
        'A_MINISTER_TOURISME': 'وزارة السياحة المغربية',
        'CUBE3_TITLE': 'المغرب ، أرض التاريخ',
        'CIVILISATION_TITLE': 'المغرب مهد الحضارات',
        'CIVILISATION_TEXT': 'من أرض المغربية، إلى الرومانية ، إلى الإسلامية، هذا هو المغرب، المهد الحقيقي لحضارات ساهمت في تشكيل هويته الجماعية',
        'COMPOSANTS_TITLE': 'بلد بأعراق متنوعة',
        'COMPOSANTS_TEXT': 'من هذه الأعراق المتنوعة بين الأمازيغية، اليهودية المسيحية، العربية الإسلامية، الإفريقية الصحراوية، استطاع المغرب بناء خصوصيته، تفرده، تنوعه وغناه الحضاري',
        'REFORMES_TITLE': 'بلد عرف إصلاحات تاريخية',
        'REFORMES_TEXT1': 'مزروع في قلب منطقة ما يعرف بالربيع العربي، إلا أنه استطاع الحفاظ على استقراره وتماسكه الاجتماعي وذلك بالسبق نحو إصلاحات سياسية واقتصادية رائدة',
        'REFORMES_TEXT2': 'الصياغة الجديدة لدستور جديد تؤكد على مساواة مطلقة بين الرجال والنساء',
        'CUBE4_TITLE': 'المغرب ، أرض التسامح',
        'TOLERANCE_TITLE': 'نموذج دين مبني على التسامح',
        'TOLERANCE_TEXT': 'نموذجه الديني يظهر جليا أن التقاليد والدين الإسلامي لا يتنافيان  البتة مع الحداثة والتطور والديمقراطية',
        'RME_TITLE': 'المغاربة في الخارج، جالية تلعب دور سفير لثقافتنا',
        'RME_TEXT1': 'على غرار بن بطوطة، هذا المكتشف المغربي  في القرن 12 الميلادي، والذي جاب قيد حياته 120.000 كلم، فأبناء جاليتنا الآن هاجروا نحو العالم الواسع وشكلوا جالية ذات حضور قوي ووازن',
        'RME_TEXT2': 'هؤلاء المكتشفين الجدد، انطلقوا في رحلة اكتشاف بلد جديد ، وأصبحوا سفراء لثقافتنا، ولقيمنا المبنية على المشاركة والتسامح',
        'CUBE5_TITLE': 'المغرب، بلد حداتي يتطلع نحو المستقبل',
        'CUBE5_INTRO': 'بالرغم من زحف الربيع العربي، والأزمة الاقتصادية العالمية، استطاع المغرب أن يحافظ على استقرار نظامه وجاذبية اقتصاده',
        'POS_STRAT_TITLE': 'بلد ذو موقع استراتيجي',
        'POS_STRAT_TEXT': 'تموقعه في أقصى شمال غرب إفريقيا، على بعد 15 كلم من أوربا، والتي يربطه بها جبل طارق، فالمغرب يعد منصة استراتيجية سواء على المستوى السياسي اقتصادي أو الثقافي وباب منفتح على إفريقيا، أوربا والشرق الأوسط',
        'MARCHE_IMPORTANT_TITLE': 'بلد يملك سوقا ذات إمكانيات مهمة',
        'MARCHE_IMPORTANT_TEXT': 'اتفاقيات التبادل الحر مع المغرب، سمحت له بالحصول على امتيازات لمشاريع بملايير المستهلكين',
        'STRATEGIES_TITLE': 'بلد له السبق في تبني استراتيجيات للتوافق مع المعطيات العالمية الجديدة',
        'STRATEGIES_TEXT': 'بالنظر نحو المستقبل، ووضع التطور المستمر في قلب استراتيجيته الاقتصادية، استطاع المغرب الاعتماد على العديد من البرامج في قطاعات حيوية مهمة حتى يتمكن من تضجيع الاستثمارات الخارجية',
        'STRAT_PNEI': 'الاتفاق الوطني للرقي بالصناعة',
        'STRAT_PNEI_TEXT1': 'استراتيجية استباقية تهدف إلى جعل الشركات المغربية الصغيرة والمتوسطة أكثر تنافسية لخلق مناطق ومنصات صناعية مكرسة في إطار محفز وجذاب مع إدماج برنامج تكويني',
        'STRAT_PNEI_TEXT2': 'الضوء مسلط على المهن العالمية في المغرب مثل صناعة السيارات، الفضاء، الالكترونيات، التغذية',
        'STRAT_CNEDD': 'الميثاق الوطني للبيئة والتنمية المستدامة',
        'STRAT_CNEDD_TEXT': 'مشروع ضخم لمجتمع يهتم بحماية البيئة ورأس الحربة لتطوير دائم للمملكة',
        'A_CNEDD_PLAQUETTE': 'كتيبات الميثاق الوطني للبيئة والتنمية المستدامة',
        'A_CNEDD_RAPPORT': 'تقارير الميثاق الوطني للبيئة والتنمية المستدامة',
        'A_CNEDD_WEBSITE': 'موقع الميثاق الوطني للبيئة والتنمية المستدامة',
        'STRAT_MV': 'خطة المغرب الأخضر',
        'STRAT_MV_TEXT': 'خطة تسعى لمسايرة القطاعات الزراعية والزراعة الصناعية والتي تتمركز في قلب حماية 32 مليون مستهلك',
        'A_MINISTERE_AGR': 'وزارة الزراعة والصيد البحري',
        'A_PORTAIL_SP': 'موقع خدمات عامة',
        'STRAT_HALIEUTIS': 'الخطة المائية',
        'STRAT_HALIEUTIS_TEXT': 'خطة تراهن على تطوير قطاع المياه مع الحفاظ على مصادره الأساسية للأجيال القادمة والتركيز على جوهر النظافة والصحة',
        'A_SALON_HALIEUTIS': 'معرض المياه',
        'A_MINISTERE_AGR_PECHE': 'وزارة الزراعة والصيد البحري قسم الصيد البحري',
        'STRAT_PS': 'مخطط الطاقة الشمسية',
        'STRAT_PS_TEXT': 'مخطط يسعى للانخراط ضمن استراتيجية المغرب للطاقة و التي تعتمد على الطاقات المتجددة وعلى التطوير المستمر',
        'A_AGENCE_ES': 'الوكالة المغربية للطاقة',
        'STRAT_PN_EGOV': '',
        'STRAT_PN_EGOV_TEXT': 'Ein Plan, der eine elektronische Verwaltung umfasst, die ganz auf den Dienst am Bürger und für die Unternehmen ausgerichtet ist.',
        'A_PORTAIL_EGOV': 'Das Portal E-Gouvernement',
        'A_PORTAIL_SERVICE_PUBLIQUE': 'Das Portal der Öffentlichen Dienstleistungen',
        'A_MINISTERE_FPUB': 'Internetseite des Ministeriums für den Öffentlichen Dienst und die Modernisierung der Verwaltung',
        'A_TWITTER_EGOV': 'Twitter-Account E-GOV',
        'A_FACEBOOK_EGOV': 'Facebook-Seite E-GOV',
        'STRAT_ANPME': 'Die Nationale Agentur zur Förderung kleiner und mittelständischer Unternehmen (ANPME) ',
        'STRAT_ANPME_TEXT': 'Eine Agentur, die sich Unternehmen widmet, um sie im Prozess der Modernisierung und Verbesserung ihrer Wettbewerbsfähigkeit zu begleiten',
        'STRAT_INDH': 'Die Nationale Initiative zur sozialen Entwicklung (INDH)',
        'STRAT_INDH_TEXT': 'Die INDH ist ein Instrument im Kampf gegen Armut, Prekarität und sozialen Ausschluss.',
        'A_INI_DEV_HUMAIN': 'Nationale Initiative Nationale zur sozialen Entwicklung',
        'A_MINISTERE_SOLIDARITE': 'Ministerium für Soziales, Frauen, Familie und gesellschaftliche Entwicklung',

        'EN_SAVOIR_PLUS': 'للمزيد من المعلومات',
    });

    $translateProvider.preferredLanguage('de');
}]);