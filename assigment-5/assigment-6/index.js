const studentName = document.querySelector("#input");
const btnWelcome = document.querySelector("#welcomeBtn");

function WelcomeMessage() {
  if (studentName.value === "") {
    alert("enter a name");
  } else {
    document.querySelector("#result").innerHTML =
      "Welcome," + studentName.value;
  }
  console.log(studentName.value);
}

btnWelcome.onclick = WelcomeMessage;

const btncheck = document.querySelector("#checkbtn");

btncheck.onclick = function () {
  let age = prompt("enter you age");
  if (age === null) {
    alert("you cancelled");
    return;
  }
  if (age.trim() === "" || isNaN(Number(age))) {
    alert("please enter a vaid age");
    return;
  }
  let confirmation = confirm("Are you sure your age is " + age + "?");
  if (confirmation) {
    switch (true) {
      case age >= 18:
        document.querySelector("#Results").innerHTML = "your are allowed";
        break;
      case age <= 17 && age >= 13:
        document.querySelector("#Results").innerHTML = "your need permission";
        break;
      default:
        document.querySelector("#Results").innerHTML = "your too young";
        break;
    }
  } else {
    alert("you should confirm the age");
    return;
  }
};
const counter = document.querySelector("#counter");

let count = 0;

counter.innerHTML = count;

btnWelcome.onmousemove = function () {
  count++;
  counter.innerHTML = count;
};
