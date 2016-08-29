angular.module('MyApp',[])
.controller('CurrencyController',function () { // wrong
    this.myClick = function (io) {
      this.myDate = ""+this.myInput + io;
    };
});
