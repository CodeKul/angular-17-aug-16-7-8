angular.module('MyAngApp',['MyOtherApp','Backend'])
.controller('MyController',['myFactory',function MyController(fac) {
  this.click = function () {
    this.name = fac.name;
    this.cities =fac.cities;
  }
}])
.controller('MyOtherController',['myFactory','backendFactory',function MyOtherController(fac,back) {
    this.call = back.call();
}]);
