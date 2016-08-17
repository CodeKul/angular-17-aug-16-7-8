
var other = {
  i : 1
};

function temp() {
  console.log("Value of I - "+app.i);
  console.log("Value of I - "+other.i);
}

function my(){
  console.log('In My');
}

function outer(){

  function inner() {
    console.log("inner function");
  }
  return function () {
    console.log("Returned Function");
  }
}

var outerObj = {
  inner : function () {
    console.log("outer obj inner function");
      return function () {
          console.log("outer obj inner return function");
      }
  },
  data : 10
};

my = temp;
simple = outerObj.inner();
simple = outer;
simpleReturn = outer();
