(function () {
    var app = angular.module("omega", ['ui.router', 'mgcrea.ngStrap', 'registerModule', 'loginModule'
        , 'resetPassModule', 'navbarModule', 'userDetailsModule', 'jcs-autoValidate']);
    app.config(['$stateProvider', '$urlRouterProvider', 'growlProvider', function ($stateProvider, $urlRouterProvider, growlProvider) {


        growlProvider.globalPosition('top-center');
        growlProvider.globalTimeToLive(3000);


        $urlRouterProvider.otherwise("/");
        $stateProvider.state('register', {
            url: '/register',
            templateUrl: 'app/register/register-template.html',
            controller: 'registerCtrl',
            controllerAs: 'ctrl'

        })
            .state('home', {
                url: '/',
                templateUrl: 'app/home-template.html'

            })
            .state('login', {
                url: '/login',
                templateUrl: 'app/login/login-template.html',

                controller: 'loginCtrl',
                controllerAs: 'Ctrl'

            }).state('userDetailss', {
                url: '/details',
                templateUrl: 'app/userDetails/userDetails-template.html',
                controller: 'userCtrl',
                controllerAs: 'ctrl'
            });


    }]);


})();