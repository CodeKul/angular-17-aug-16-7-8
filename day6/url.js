angular.module('Url',[])
.factory('urlFactory',[function urlFactory() {
  var protocol = 'http';
  var server = 'services.groupkt.com'; // live
  //var server = 'services.groupkt.com'; local
//  var server = 'services.groupkt.com'; staging
  return {
      login : {
          security : ''
      },
      cart : {
        
      }
      loginUrl : '',
      msgUlr : protocol+'://'+server+'/country/get/all'
  };
}]);
