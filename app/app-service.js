(function () {
    angular.module('omega')
        .service('AppService', ['$http', '$state', 'growl', function ($http, $state, growl) {
            var sr = this;
            sr.userlogedin = false;
            sr.user = {};
            sr.login = function (user) {
                sr.user = user;


                $http({
                    method: 'POST',
                    url: 'https://accounts.omegasixcloud.net/accounts/login',
                    headers: {
                        username: user.username,
                        password: user.password
                    }

                }).then(function (response) {
                    sessionStorage.setItem('sessionid', response.headers('sessionid'));
                    sr.userlogedin = true;
                    $state.go('home');
                    growl.success('You are logged in');
                }, function (err) {

                    growl.error('Incorrect username or password');

                })
            }
            sr.login2 = function (user) {
                sr.user = user;
                sr.user.username = user.userName;
                sr.usertosend = {};
                sr.usertosend.password = user.password;
                sr.usertosend.username = user.userName;


                console.log(sr.usertosend);
                $http({
                    method: 'POST',
                    url: 'https://accounts.omegasixcloud.net/accounts/login',
                    headers: {
                        username: sr.usertosend.username,
                        password: sr.usertosend.password
                    }

                }).then(function (response) {
                    sessionStorage.setItem('sessionid', response.headers('sessionid'));
                    sr.userlogedin = true;
                    $state.go('home');
                }, function (err) {
                    console.log(err);

                })
            }

            sr.logout = function () {
                sessionStorage.clear();

                sr.userlogedin = false;
                $state.reload();

            }
        }]);
})();