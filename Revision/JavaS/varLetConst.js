// const a=4;
// console.log(a);
// a=6;
// console.log(a);
//Reassigning a constant variable will throw an error.

var a=5;
console.log(a);
const a=6;//Re-declaring a variable using const is not allowed and will throw an error. The value of the variable cannot be updated once it is assigned.
console.log(a);
//Re-declaring a variable using var is allowed and will not throw an error. The value of the variable will be updated to the new value.