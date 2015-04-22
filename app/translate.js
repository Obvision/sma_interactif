app.config(['$translateProvider', function ($translateProvider) {
    $translateProvider.translations('de', {
        'SMA_TITLE': 'Marokkowoche',
        'CUBE1_TITLE': 'Marokko, wo die Kultur die Kunst inspiriert',
        'CUBE1_INTRO': 'Marokko ist ein Land, wo sich Kunst und Kultur vermischen, eine wirkliche Einladung zum Reisen, ein Gesamtkunstwerk der Begegnung, an dem sich auf vielfältige Art und Weise teilhaben lässt. ',
    }).translations('ar', {
        'SMA_TITLE': 'أسبوع المغرب في ألمانيا',
    });

    $translateProvider.preferredLanguage('de');
}]);