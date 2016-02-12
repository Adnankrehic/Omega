(function(){
    var mod = angular.module("userDetailsModule");
    mod.controller('userCtrl',['$http','growl',function($http,growl){
        var us = this;
        us.details={};
        us.sessionid=sessionStorage.getItem("sessionid");
        us.userDetailss=function(){
           
            $http({
                method:"GET",
                url:"https://accounts.omegasixcloud.net/accounts/user",
                headers:{
                    "sessionid":us.sessionid
                }}).then(function(response){
                    //new session
                    us.sessionid=response.headers('sessionid');
                    
                us.details=response.data;
            },function(err){
                
            });
        };
        us.userDetailss();
        us.editUser=function(){
            
           
            

var data=$.param(us.details);
            
              $http({
                method:"PUT",
                url:"https://accounts.omegasixcloud.net/accounts/user",
                headers:{
                    "sessionId":us.sessionid, 
                    "Content-Type":"application/json;charset=UTF-8"         
                },
                data:us.details}).then(function(response){                    
                   
                    growl.success('Your profile is edited');
                us.details=response.data;
            },function(err){
                
            });
        };
    }]);
})();