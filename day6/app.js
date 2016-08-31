angular.module('MyAngApp',['MyOtherApp','Backend'])
.controller('MyController',['myFactory',function MyController(fac) {
  this.click = function () {
    this.name = fac.name;
    this.cities =fac.cities;
  }
}])
.controller('MyOtherController',['backendFactory',function MyOtherController(back) {
    var vm = this;
    back.getMsg().success(function (res) {
      console.log('Server Res - '+res.RestResponse.messages[0]);
      vm.messages = res.RestResponse.messages;
    });
}]);
