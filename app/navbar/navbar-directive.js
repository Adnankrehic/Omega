(function(){
    angular.module('navbarModule')
        .directive('navbarDirective', function(){
            return {
                templateUrl: 'app/navbar/navbar-template.html',
                controller: 'navbarController as ctrl'
                
            }
        });
})();