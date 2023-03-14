#!/usr/bin/node
exports.addMeMaybe = function (number, theFunction) {
  number += 1;
  theFunction(number);
};#!/usr/bin/node
const myObject = {
  type: 'object',
  value: 12
};
console.log(myObject);

myObject.incr = function () {
  myObject.value += 1;
};

myObject.incr();
console.log(myObject);
myObject.incr();
console.log(myObject);
myObject.incr();
console.log(myObject);