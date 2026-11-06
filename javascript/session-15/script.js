//literal
var x = {
  name: "fadel",
  age: 23,
};
// new object
var student = new Object();
student.name = "fadle";
student.age = 10;
console.log(student);
// third type constructor function
function obj(name, age, city) {
  this.name = name;
  this.age = age;
  this.city = city;
}
var student1 = new obj("fadel", 30, "chhim");
const btn = document.querySelector("#btn");
var x;
btn.addEventListener("click", function () {
  x = window.open("https://www.facebook.com");
});
const btn_close = document.querySelector("#btn-close");
btn_close.addEventListener("click", function () {
  x.close;
});
const results = document.querySelector("#results");
results.innerHTML = "screen width: " + screen.width;
const btn_google = document.querySelector("#Google");
btn_google.addEventListener("click", function () {
  //   location.assign("https://www.google.com");
  Location.href = "https://www.google.com";
});
var time;
const btn_show = document.querySelector("#btn-show");
btn_show.addEventListener("click", function () {
  time = setTimeout(function () {
    alert("fadel");
  }, 3000);
});
function stoptimer() {
  clearTimeout(time);
}

const results_count = document.querySelector("#count_results");
var count = 0;
var end;
function Count() {
  end = setInterval(function () {
    count++;
    results_count.innerHTML = count;
  }, 1000);
}
const btnStop = document.querySelector("#btnStop");
btnStop.addEventListener("click", function () {
  clearInterval(end);
});
