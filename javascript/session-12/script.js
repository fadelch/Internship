// var btn = document.querySelector("btn");

// //this is for parameter
// function code1(name) {
//   console.log("hello" + name + "welcome");
// }
// code1("fadel");

// function sum(number1, number2) {
//   console.log(number1 + number2);
// }
// sum(1, 2);
// // function expression
// function name(params) {}
// var z = function () {};
// z(); // this is function expression
// // arrow function
// var x = () => {
//   console.log("hello world");
// };
// x();
// var y = () => "hello worlfss";

// y();
// //Anonymous function
// btn.addEventListener("click", function () {
//   alert("hello");
// });

// call back function how to add function inside function we can use the parameter as a function::
// function test(callback) {
//   callback();
// }
// test(function () {
//   console.log("hello");
// });

// function Sum(a, b) {
//   return a + b;
// }

// var x = Sum(4, 2);
// console.log(x);
// function test() {
//   return "hello";
//   console.log("this will not work"); // aya shi tht el return marah ybayen
// }
function sum(a, b) {
  return a + b;
}

var results = document.querySelector("#result");
var btnShow = document.querySelector("#show");
btnShow.addEventListener("click", function show() {
  var y = sum(10, 2);

  results.innerHTML = y;
});
