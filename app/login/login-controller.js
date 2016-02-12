(function () {
    var mod = angular.module("loginModule");
    mod.controller('loginCtrl', ['AppService', '$http', '$modal', function (AppService, $http, $modal) {
        var us = this;
        us.user = {};
        var modal = new $modal({ templateUrl: 'app/resetPassword/resetPass-template.html', keyboard: true, show: false });
        us.showModal = function () {

            modal.$promise.then(modal.show);
        }

        us.loginC = function () {
            AppService.login(us.user);
        }

    }]);
})();

