//var translationsEN = {
//    HEADLINE: 'What an awesome module!',
//    PARAGRAPH: 'Srsly!',
//    PASSED_AS_TEXT: 'Hey there! I\'m passed as text value!',
//    PASSED_AS_ATTRIBUTE: 'I\'m passed as attribute value, cool ha?',
//    PASSED_AS_INTERPOLATION: 'Beginners! I\'m interpolated!',
//    VARIABLE_REPLACEMENT: 'Hi {{name}}',
//    BUTTON_LANG_DE: 'German',
//    BUTTON_LANG_EN: 'English'
//};
//
//var translationsDE= {
//    HEADLINE: 'Was für ein großartiges Modul!',
//    PARAGRAPH: 'Ernsthaft!',
//    PASSED_AS_TEXT: 'Hey! Ich wurde als text übergeben!',
//    PASSED_AS_ATTRIBUTE: 'Ich wurde als Attribut übergeben, cool oder?',
//    PASSED_AS_INTERPOLATION: 'Anfänger! Ich bin interpoliert!',
//    VARIABLE_REPLACEMENT: 'Hi {{name}}',
//    BUTTON_LANG_DE: 'Deutsch',
//    BUTTON_LANG_EN: 'Englisch'
//};

angular
    .module('myApp', ['pascalprecht.translate'])
    .run(run)
    .controller('Ctrl', Ctrl)
    .controller('Ctrl2', Ctrl2)
    .config(config)
    .value('clientId', { value: 'en'} );

//var app = angular.module('myApp', ['pascalprecht.translate']);

//angular.module('myApp', ['pascalprecht.translate'])
//         app.value('clientId', { value: 'en'} );


function config ($translateProvider, $translatePartialLoaderProvider) {


    //$translateProvider.preferredLanguage('en');

    // add translation tables

    //$translateProvider.useUrlLoader('locale/en.json');

    //$translateProvider.translations('en', translationsEN);
    //$translateProvider.translations('de', translationsDE);

    //$translatePartialLoaderProvider.addPart('overview');
    $translateProvider.useLoader('$translatePartialLoader', {
        urlTemplate: '/locale/{part}/{lang}.json'
    });
    //$translateProvider.preferredLanguage('en');
    $translateProvider.useSanitizeValueStrategy('escape');

    //$translateProvider.useStaticFilesLoader({
    //    prefix: 'locale/',
    //    suffix: '.json'
    //});
    //
    //$translateProvider.preferredLanguage('en');


    // remember language
    //$translateProvider.useStorage('customStorage');

};

//app.factory('customStorage', function () {
//    return {
//        put: function (name, value) {
//            // store `value` under `name` somehow
//        },
//        get: function (name) {
//            // request value of `name` somehow
//        }
//    };
//});



function Ctrl ($translate, $scope,$translatePartialLoader,$rootScope) {


    //console.log(lang.value);

    $translatePartialLoader.addPart('overview');
    $translate.refresh();

    $translate.use('en');



    $scope.changeLanguage = function (langKey) {
        $translate.use(langKey);
        //$rootScope.lang = langKey;
    };

};

function Ctrl2 ($translate, $scope,$translatePartialLoader,$rootScope) {

    $translatePartialLoader.addPart('contact');
    $translate.refresh();
    //$translate.use($rootScope.lang);

    $scope.changeLanguage2 = function (langKey) {
        $translate.use(langKey);
    };

};

function run ($rootScope, $translate) {
    //$translate.use('en');
    $rootScope.$on('$translatePartialLoaderStructureChanged', function () {
        $translate.refresh();
    });
};