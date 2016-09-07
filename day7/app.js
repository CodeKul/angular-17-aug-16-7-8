angular.module('MyApp',[])
.controller('MyController',['$scope',function MyController(scp){
  scp.name = 'Android';
  scp.city = 'pune';
  scp.user = {
    name : 'android',
    mobile : '9762548833'
  };

  scp.click = function () {
    scp.user.name = 'Apple';
    scp.user.mobile = '908563467';

    var output ='';
    for (var property in scp) {
      output += property + ': ' + scp[property]+'; ';
    }
    console.log(''+output);
  };
}])
.controller('MyOtherController', ['$scope',function MyOtherController(scp){
  scp.show = function (sts) {
      scp.status = sts;
  };
}])
.controller('InheritanceController',['$scope',function InheritanceController(scp){
  scp.showOs = function(){
      scp.os = 'Android';
  };
}])
.controller('ChildController',['$scope',function ChildController(scp){
  scp.showVersion = function (){
    scp.version = 'KitKat';
    scp.os = 'Apple';
  };
}]);
