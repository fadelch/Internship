//part 1
const product = document.getElementsByClassName("product");
const result = document.getElementById("result");
const mainTitle = document.getElementById("main-title");

//extra challenge
const newProduct = document.createElement("li");
newProduct.className = "product";
newProduct.innerText = "headphones";
newProduct.setAttribute("data-price", "80");
const productlist = document.querySelector("ul");
productlist.appendChild(newProduct);

document.querySelectorAll(".product").forEach(function (item) {
  item.onclick = function () {
    item.style.backgroundColor = "darkred";
    item.style.color = "white";
  };
});
//part 2:
function changetitle() {
  mainTitle.innerText = "Welcome to our store";
  mainTitle.style.color = "darkred";
  mainTitle.style.backgroundColor = "black";
  mainTitle.style.padding = "20px";
}
// part 3:
product[2].setAttribute("data-price", "700");
//part 4:
for (let i = 0; i < product.length; i++) {
  product[i].style.backgroundColor = "blue";
  product[i].style.color = "red";
  product[i].style.margin = "20px";
  product[i].style.padding = "20px";
}
//part 5:
// console.log(product[1].innerHTML);
function showProducts() {
  for (let i = 0; i < product.length; i++) {
    console.log(product[i].innerHTML);
    result.innerHTML +=
      "<br>the product are " +
      product[i].innerHTML +
      " with price " +
      product[i].getAttribute("data-price") +
      "$" +
      "<br>";
  }
}
//part 6
const All_products = document.querySelectorAll(".product");
function calculateTotal() {
  let Total = 0;
  result.innerHTML = "";
  All_products.forEach((item) => {
    let price = Number(item.getAttribute("data-price"));
    Total += price;
    result.innerHTML +=
      "<br>the product are " + item.innerHTML + " with price " + price;
  });
  result.innerHTML += "<h3>Total Price: $" + Total + "</h3>";
}
//part 7:
function randomDiscount() {
  result.innerHTML += "<br>Random Number: " + Math.random() + "<br>";
  result.innerHTML += "<br>floor Number: " + Math.floor(5.9) + "<br>";
  result.innerHTML += "<br>Round Number: " + Math.round(7.6) + "<br>";
  result.innerHTML += "<br>ceil Number: " + Math.ceil(5.2) + "<br>";
  result.innerHTML += "<br>sqrt Number: " + Math.sqrt(25) + "<br>";
  result.innerHTML += "<br>pow Number: " + Math.pow(2, 4) + "<br>";
}
//part 8
function showString() {
  let text = "Welcome to js course";
  result.innerHTML += "<br> split: " + text.split(" ") + "<br>";
  result.innerHTML += "<br> slice: " + text.slice(2, 9) + "<br>";
  result.innerHTML += "<br> lowercase: " + text.toLowerCase() + "<br>";
  result.innerHTML += "<br> upercase: " + text.toUpperCase() + "<br>";
  result.innerHTML += "<br> trim: " + text.trim() + "<br>";
  result.innerHTML += "<br> index of js: " + text.indexOf("js") + "<br>";
  if (text.indexOf("js") !== -1) {
    result.innerHTML += "js world exist";
  } else {
    result.innerHTML += "js world does not exist";
  }
}
//part 9:
function showArray() {
  let names = ["Fadel", "ali", "omar"];
  names.push("mohamad");
  for (let i = 0; i < names.length; i++) {
    result.innerHTML += "<br>" + names[i] + "<br>"; //the push is that add an element in the array
  }
  let x = ["apple", "banana", "mango"];
  result.innerHTML += "<h2>Fruits:</h2>";
  x.pop();
  for (let i = 0; i < x.length; i++) {
    result.innerHTML += "<br>" + x[i] + "<br>"; //the popo remouve the last element in the array
  }
  let cars = ["toyota", "ferrari"];
  result.innerHTML += "<h2>Cars:</h2>";
  cars.shift();
  for (let i = 0; i < cars.length; i++) {
    result.innerHTML += "<br>" + cars[i] + "<br>"; //the shift remouve the first element in the array
  }
  result.innerHTML += "<h2>Names(Using the unshift function):</h2>";
  names.unshift("Hassan");
  names.forEach((items) => {
    result.innerHTML += "<br>" + items + "<br>"; // the unshift is used for add an element in the beginning
  });
}
//part 10:
function showobject() {
  const student = {
    name: "fadel",
    age: 22,
    studentInfo() {
      return "Name: " + this.name + ",<br> Age: " + this.age + "<br>";
    },
  };
  result.innerHTML += "<br>name of the student: " + student.name;
  result.innerHTML += "<br>Age is " + student.age + "<br>";
  result.innerHTML += student.studentInfo();
  result.innerHTML += "keys of the object" + Object.keys(student) + "<br>";
  result.innerHTML += "object values " + Object.values(student) + "<br>";
  result.innerHTML += "object entries " + Object.entries(student) + "<br>";
}

//part 11:
//first example 1. Reassignment:
// var x = 10;
// x = 20; // Allowed

// let y = 10;
// y = 20; // Allowed

// const z = 10;
// z = 20; // Error

//2. Redeclaration
// var f = 10;
// // var c = 20; // Allowed

// let k = 10;
// // let k = 20; // Error

// // const m = 10;
// // const m = 20; // Error

// //3. Block Scope
// if (true) {
//   var a = 10;
//   let b = 20;
//   const c = 30;
// }

// console.log(a); // 10
// // console.log(b); // Error
// // console.log(c); // Error
// //Explanation:
// // 1.var is not block-scoped. 2.- let and const are block-scoped, so they cannot be accessed outside their block.

// //4. Function Scope
// function test() {
//   var x = 10;
//   let y = 20;
//   const z = 30;

//   console.log(x, y, z); // 10 20 30
// }

// test();

// // console.log(x); // Error
// // console.log(y); // Error
// // console.log(z); // Error
// //5. Hoisting
// console.log(x); // undefined
// var x = 10;
// // console.log(d); // ReferenceError
// let d = 20;

// // console.log(e); // ReferenceError
// const e = 30;

//part 12:
function loadPosts() {
  const xhr = new XMLHttpRequest();

  xhr.open("GET", "https://jsonplaceholder.typicode.com/posts", true);

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        let posts = JSON.parse(xhr.responseText);

        result.innerHTML = "";

        posts.slice(0, 5).forEach(function (post) {
          result.innerHTML += `
            <h3>${post.title}</h3>
            <p>${post.body}</p>
            <hr>
          `;
        });
      } else if (xhr.status === 404) {
        result.innerHTML = "Error 404: Posts not found";
      } else if (xhr.status === 500) {
        result.innerHTML = "Error 500: Server error";
      } else {
        result.innerHTML = "Error: " + xhr.status;
      }
    }
  };

  xhr.onerror = function () {
    result.innerHTML = "Network error. Please try again.";
  };

  xhr.send();
}
