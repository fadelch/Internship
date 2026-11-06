console.log(Math.round(4.4)); // 4
console.log(Math.round(4.6)); //5
console.log(Math.pow(2, 3)); // 2 power 3
console.log(Math.sqrt(25));
console.log(Math.ceil(4.1)); // go to the highest number 5
console.log(Math.floor(2.6)); // go to the lowest number 2
console.log(Math.random()); //this will generate a randomo value
var randomNumber = Math.floor(Math.random() * 10) + 1; // this will be generate random value between 1 and 10 0 is ot included because we aded a plus 1 in the end
console.log(randomNumber);

// var let const
//reassign redeclare hoisting scope

//scope function

// var mnst3mila la n3rf variable
// if (true) {
//   var x = 10;
// }
// console.log(x); // this mean a global variable el var global
// //block and global
// if (true) {
//   let y = 100;
// }
// console.log(y); //let btehjoz emita juwet el if aw el function so let block

// if (true) {
//   const z = 100;
// }
// console.log(z); // same for the const it blocked the value if it was in a function or in an if

//so var : global ; let:blocked ; const:blocked

// function code() {
//   var x = 10;
//   let a = 4;
//   const z = 7;
//   console.log(x);
//   console.log(a);
//   console.log(z);
// }
// code();

// console.log(x); // in case of function the scope is blocked for the three let and const and var

//Reassigmnet:
// var x = 10;
// x = 3;
// console.log(x);
// let y = 10;
// y = 1;
// console.log(y);
// const z = 10;
// z = 12;
// console.log(z); // in case of the const it didnt work

//redeclaration:
// var x = 20;
// var x = 40;
// console.log(x); in var we can redaclare
// let x = 10;
// let x = 2;
// console.log(x); //error Uncaught SyntaxError: Identifier 'x' has already been declared (at script.js:62:5) we can't
//  and same for the const
// console.log(z);
// var z = 10; // it will give me undefined

// console.log(x);
// let x = 10; // it gave an error script.js:67 Uncaught ReferenceError: Cannot access 'x' before initialization
// // at script.js:67:13 same also for the const
const x = document.querySelector("#para");
console.log(x.innerText);
console.log(x.textContent);
const title = document.querySelector(".title");
console.log(title.textContent);
title.textContent = "fadel";
console.log(title.textContent);
title.style.color = "red";
title.style.background = "Blue";

var btn = document.querySelector(".btn");
btn.addEventListener("click", function () {
  const section_ul = document.querySelectorAll(".all");
  section_ul[1].setAttribute("price", "700");
  for (var i = 0; i < section_ul.length; i++) {
    section_ul[i].style.background = "blue";
    section_ul[i].style.color = "red ";
  }
  console.log(section_ul[1].price);
});
