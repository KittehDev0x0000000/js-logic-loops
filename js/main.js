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
