(function(){
    angular.module('navbarModule')
        .controller('navbarController', ['$state','AppService',function($state,AppService){
            var nav = this;
            nav.service = AppService;
            
        }]);
})();