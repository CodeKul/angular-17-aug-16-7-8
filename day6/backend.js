angular.module('Backend',['Url'])
.factory('backendFactory',['$http','urlFactory',function backendFactory(ws,url) {
  return {
    getMsg : function () {
        return ws.get(url.msgUlr);
    }
  };
}]);
