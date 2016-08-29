function MyObj(myData) {
  this.myData = myData;
  console.log('First - '+myData);

  this.setData = function (myData) {
    this.myData = myData;
  }

  this.getData = function () {
    return this.myData;
  }

  this.calculate = function (num1, num2) {
    this.myData = num1 + num2
    console.log('MyData - '+this.myData);
  }
}

var myConsObj = new MyObj(12);
myConsObj.setData(120);
console.log('Cons Data is - '+myConsObj.getData());
myConsObj.calculate(12,89);

var simpleObj = new Object();
simpleObj.os = 'android';
console.log('OS 1st - '+simpleObj.os);

simpleObj['os'] = 'iOS';
console.log('Os 2nd - '+simpleObj.os);

Object.defineProperty(simpleObj, 'os',{
  value : 'windows',
  writable: true,
   enumerable: true,
   configurable : true
});

console.log('Os 3rd - '+simpleObj.os);

var bike = Object.create(Object.prototype);
Object.defineProperties(bike,{
  'price' : {
    'value' : 1233,
      writable: true
  },
  'name' : {
    'value' : 'ducati',
      writable: true
  }
});

console.log('Name - '+bike.name +' price - '+bike.price);

MyObj.prototype.version = function (myData) {
  this.myData = myData;
  console.log('MyData - '+this.myData);
};

MyObj.prototype.showMyData = function () {
  return 'MyData is in Prototype - '+this.myData;
};

var myOtherObj = new MyObj();

myConsObj.version('Android');
console.log(myConsObj.showMyData());

function Animal(){
}
Animal.prototype.getLegs = function () {
  console.log('What is prototype - ');
};

var an1 = new Animal();
Animal.prototype.legs = 10;
console.log('Outer - '+an1.legs);

var an2 = new Animal();
console.log('Outer - '+an2.legs);
