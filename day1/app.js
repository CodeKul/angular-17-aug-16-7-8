
var i = 10; // global scope

var app = {
  i : 0
};

automaticScope();
document.getElementById('labelSimple').innerHTML = ''+simple;
function automaticScope() {
  simple = 'Hello';
}

function appFunction(name, other){
  console.log("appFunction");
  other();
}

function otherIt(){
  console.log("otherIt");
}

function all(){

  appFunction('android',otherIt);
}
