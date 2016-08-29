angular.module('Backend',[])
.factory('backendFactory',['$http',function backendFactory(ws) {
  return {
    call : function () {
      ws.get('http://services.groupkt.com/country/get/all').then(function(res) {
        console.log(res);
      });
    }
  }
}]);
