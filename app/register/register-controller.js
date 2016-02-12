(function () {
    var mod = angular.module("registerModule", ['angular-growl']);
    mod.controller('registerCtrl', ['AppService', '$http', 'growl', function (AppService, $http, growl) {

        var ct = this;
        ct.newUser = {};
        ct.register = function () {
            ct.newUser.organization = "Omega Six Security";

            $http.post("https://accounts.omegasixcloud.net/accounts/user", ct.newUser).then(function (response) {

                AppService.login2(ct.newUser);
                ct.showSuccess = function () {
                    growl.success('You are registered')
                }
                ct.showSuccess();

            }, function (err) {
               
                growl.error(err.data.message);

            })
        }
    }])
})();