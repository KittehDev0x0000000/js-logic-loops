if('foo'==='foo'){
  console.log('Of course these strings are equal!');
}
if(5>10){
  console.log('You will NEVER see this.');
}else{
  console.log('YOu will ALWAYS see this!');
}

var number = [10, 50, 100, 101];

if (number[2] >= 100) {
  console.log('greater than');
} else {
  console.log('not greater than');
}
// if the var is NOT > 100, let the user know what it was.

// is a string stored in a variable, the same as another string?
var myString = 'foo';
if (myString) {

}

// The else if statement

if (5 < 4) {
  console.log('you will not end up here');
} else if (5 >= 5) {
  console.log('You will end up here');
} else {
  console.log('you will not end up here either');
}
// a function that returns something
function topSpeed(){
  return (75+5); //return the number 80
}

console.log(topSpeed()); //logs the number 80

// write a function that accepts arguments
// THis now means that we are required to provide values for those arguments
// when we invoke the invoke the function
function addNumbers(num1, num2){
  return (num1 + num2)// the valuse of my arfs are now used as vars inside my func
}
console.log(addNumbers(1000, 3000));

if(addNumbers(50, 50)=== 100){
  console.log('Congrats!!')
}
//this function does not return anything, we just 'do something' immediately
//this is a named function
function fullName(fName, lName){
  console.log(fName + ' ' + lName)
}
// invoke a function
fullName('Amber', 'Emmertz');

// we can also create a function and store it in a variable
var myGreatFunc = function(){
  console.log('function stored in var')
};

myGreatFunc(); // invoke your function

// 1) write a function that accepts an argument. Let's call the argument door.

function door(door1, door2, door3){
  console.log(door1);
};
// 2) BAsed on the value of 'door', console.log a prize.
door('prize', 'nope', 'nada');


function openDoor(door){
  console.log(door);
  // based on the value of door
  if (door === 'red'){
    console.log('$100');
  } else if (door === 'blue'){
    console.log('bucket of water');
  } else if (door === 'grey'){
    console.log('spooky ghost');
  }
}
// find out data type of something
var foo = {
  color: 'red'
};
console.log(typeof foo.color);

// find out length of an array
var cartoons = ['ruppert', 'rockos modern life', 'adventure time'];
console.log(cartoons.length); // access the object cartoons using '.' then a property 
