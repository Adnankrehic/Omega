(function () {
    var mod = angular.module("resetPassModule");
    mod.controller('resetCtrl', ['$http','growl', function ($http,growl) {
        var rs = this;
        rs.reset = {};
        rs.resetPass = function () {

            $http.post("https://accounts.omegasixcloud.net/accounts/resetpassword",
                rs.reset).then(function (response) {
                      growl.success('Please check your mail for further information about password reset')
                }, function (err) {
                    
                })
        }
    }]);
})();