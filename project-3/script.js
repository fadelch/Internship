"use strict";
const mainTitle = document.getElementById("main-title");
const productName = document.querySelector("#productName");
const productPrice = document.querySelector("#productPrice");
const productCategory = document.querySelector("#productCategory");
const Results = document.querySelector("#result");
const Counter = document.querySelector("#counter");
const allButton = document.querySelectorAll("button");
const search_by_id = document.querySelector("#search_by_id");
//part 1:
// x = 10;
// console.log(x);
/*what happens? Error in the console Uncaught ReferenceError: x is not defined Because we used x = 10 without declaring the variable using let, const, or var.
Without "use strict", JavaScript may allow this and automatically create a global variable*/

//part 2
var products = [
  {
    id: 1,
    name: "laptop",
    price: 600,
    category: "electronics",
    desc: "this is laptop product",
  },
  {
    id: 2,
    name: "Smartphone",
    price: 300,
    category: "electronics",
    desc: "This is a smartphone product",
  },
  {
    id: 3,
    name: "T-Shirt",
    price: 25,
    category: "clothing",
    desc: "This is a cotton T-shirt",
  },
  {
    id: 4,
    name: "Headphones",
    price: 80,
    category: "electronics",
    desc: "These are wireless headphones",
  },
  {
    id: 5,
    name: "Shoes",
    price: 120,
    category: "clothing",
    desc: "These are comfortable sports shoes",
  },
];
// part 4:
mainTitle.innerText = "Welcome to Products Management App";
mainTitle.style.color = "red";
mainTitle.style.color = "white";
mainTitle.style.backgroundColor = "darkred";
mainTitle.style.padding = "20px";

console.log(mainTitle.textContent);

function drawProducts() {
  Results.innerHTML = "";

  products.forEach((item, index) => {
    Results.innerHTML +=
      "Product ID: " +
      item.id +
      "<br>Product Name: " +
      item.name +
      "<br>Product Price: " +
      item.price +
      " $" +
      "<br>Product Category: " +
      item.category +
      "<br>Description: " +
      item.desc;

    if (index < products.length - 1) {
      Results.innerHTML += "<h1>Next Product</h1>";
    }
  });
}
function addProduct() {
  let name = productName.value.trim();
  let price = productPrice.value.trim();
  let category = productCategory.value.trim();
  let isduplicate = products.some((item) => {
    return item.name.toLocaleLowerCase() === name.toLocaleLowerCase();
  });
  if (isduplicate) {
    alert("this product is dublicated");
    return;
  }
  if (name != "" && price != "" && category != "") {
    if (Number(price) <= 0) {
      alert("Price must be greater than 0");
      return;
    }
    let newProduct = {
      id: products.length + 1,
      name: name,
      price: Number(price),
      category: category,
      desc: "this is " + name + " product ",
    };
    products.push(newProduct);
    drawProducts();
    productName.value = "";
    productPrice.value = "";
    productCategory.value = "";
  } else {
    alert("the price and name and category are obligatory ");
    return;
  }
}
function deleteLastProduct() {
  if (products.length === 0) {
    alert("no product to delete");
    return;
  }
  products.pop();
  drawProducts();
}
function calculateTotal() {
  let total = 0;
  Results.innerHTML = "";
  products.forEach((item, index) => {
    total += Number(item.price);
    Results.innerHTML +=
      "Product ID: " +
      item.id +
      "<br>Product Name: " +
      item.name +
      "<br>Product Price: " +
      item.price +
      " $" +
      "<br>Product Category: " +
      item.category +
      "<br>Description: " +
      item.desc;

    if (index < products.length - 1) {
      Results.innerHTML += "<h1>Next Product</h1>";
    }
  });
  Results.innerHTML += "<br><h1>Total: " + total + "</h1>";
}
//using Map part 9
function ShowProducts() {
  products.map((item) => {
    return (Results.innerHTML +=
      "Names Product " + "<h1>" + item.name + "</h1>");
  });
}
function showExpensiveProducts() {
  products.filter((item) => {
    if (Number(item.price) > 100) {
      Results.innerHTML +=
        "Product Name: " + item.name + " price: " + item.price + " $" + "<br>";
    }
  });
}
function FindProduct() {
  let id = Number(search_by_id.value.trim());
  let product = products.find((item) => {
    return Number(item.id) === id;
  });
  if (product) {
    Results.innerHTML +=
      "Product Name: " +
      product.name +
      " price: " +
      product.price +
      " $" +
      "<br>";
  } else {
    alert("There is no product with that ID");
    return;
  }
}

function checkProducts() {
  Results.innerHTML = "";

  let checkPrice = products.some((item) => {
    if (item.price > 500) {
      Results.innerHTML +=
        "Product Name: using some: " +
        "<h1>" +
        item.name +
        " Price: " +
        item.price +
        "</h1>";

      return true;
    }

    return false;
  });
  let price = products.every((item) => {
    if (item.price > 0) {
      Results.innerHTML +=
        "Product Name:using every: " +
        item.name +
        " Price: " +
        item.price +
        " $<br>";

      return true;
    }
    return false;
  });

  if (!checkPrice) {
    Results.innerHTML += "No product greater than 500 $<br>";
  }
  if (!price) {
    Results.innerHTML += "No product greater than 500 $<br>";
  }
}

function sortProductsByPrice() {
  let asc = products.sort((item1, item2) => {
    return item1.price - item2.price;
  });
  asc.forEach((item) => {
    Results.innerHTML +=
      "Product Name: " + item.name + " Price: " + item.price + " $<br>"; // we can use also the function drawproduct()
  });
}
var fruits = ["banana", "apple", "orange", "manngo"];
fruits.sort((item1, item2) => {
  return item1.localeCompare(item2);
});
console.log(fruits);

//part 14
function findeven() {
  products.forEach((item) => {
    if (item.price % 2 === 0) {
      Results.innerHTML +=
        "Product Name: " +
        item.name +
        " Price(even price): " +
        item.price +
        " $<br>";
    } else {
      Results.innerHTML +=
        "Product Name: " +
        item.name +
        " Price(odd price): " +
        item.price +
        " $<br>";
    }
  });
}

var price = [10, 23, , 34, 2];
price.forEach((item) => {
  if (item % 2 === 0) {
    console.log("even " + item);
  } else {
    console.log("odd " + item);
  }
});
//part 15:

("use strict");

let message = "   Welcome to JavaScript Programming   ";

// 1. split()
console.log(message.split(" "));

// 2. slice()
console.log(message.slice(3, 10));

// 3. toLowerCase()
console.log(message.toLowerCase());

// 4. toUpperCase()
console.log(message.toUpperCase());

// 5. trim()
console.log(message.trim());

// 6. indexOf()
console.log(message.indexOf("JavaScript"));

// 7. Check if a word exists using indexOf()
if (message.indexOf("JavaScript") !== -1) {
  console.log("The word JavaScript exists!");
} else {
  console.log("The word JavaScript does not exist!");
}
//part 16:

("use strict");

// 1. Math.round()
console.log(Math.round(4.6)); // 5

// 2. Math.pow()
console.log(Math.pow(2, 3)); // 8

// 3. Math.sqrt()
console.log(Math.sqrt(25)); // 5

// 4. Math.ceil()
console.log(Math.ceil(4.2)); // 5

// 5. Math.floor()
console.log(Math.floor(4.9)); // 4

// 6. Math.random()
console.log(Math.random()); // Random number from 0 to less than 1

// 7. Generate a random number from 1 to 1000
let randomNumber = Math.floor(Math.random() * 1000) + 1;

console.log("Random Number: " + randomNumber);
//part 17;

const student = {
  name: "fadel",
  age: 22,
  course: "web",

  showInfo: function () {
    return (
      "Student Name: " +
      this.name +
      ", Age: " +
      this.age +
      ", Course: " +
      this.course
    );
  },
};

console.log("Info: " + student.showInfo());
// 1. Call the showInfo() method
console.log("info " + student.showInfo);

// 2. Object.keys()
console.log(Object.keys(student));

// 3. Object.values()
console.log(Object.values(student));

// 4. Object.entries()
console.log(Object.entries(student));
//part 18

//Object Literal:
const student1 = {
  name: "fadel",
  age: 22,
  city: "beirut",
};
console.log(student1);
//Using new object()
let student2 = new Object();
student2.name = "ali";
student2.age = 30;
student2.city = "saida";

console.log(student2);
//3. Constructor Function

function Student(name, age, city) {
  this.name = name;
  this.age = age;
  this.city = city;
}

let student3 = new Student("Omar", 23, "Saida");

console.log(student3);

//parrt 19
const cart = {
  products: [
    { id: 1, name: "Laptop", price: 500 },
    { id: 2, name: "Phone", price: 300 },
    { id: 3, name: "Mouse", price: 50 },
  ],
  showProducts: function () {
    this.products.forEach((item) => {
      console.log(
        "Product Name: " + item.name + " Price: " + item.price + " $",
      );
    });
  },
  calculateTotalCart: function () {
    let total = 0;
    this.products.forEach((item) => {
      total += item.price;
    });
    return total;
  },
  getcard: function () {
    return this;
  },
};
cart.showProducts();

console.log("Total: " + cart.calculateTotalCart() + " $");

console.log(cart.getcard());
/*1. Reassignment
Reassignment means changing the value of an existing variable.

var a = 10;
a = 20;
console.log(a); // 20

let b = 30;
b = 40;
console.log(b); // 40

const c = 50;
// c = 60; // TypeError: Assignment to constant variable
2. Redeclaration

var x = 10;
var x = 20;
console.log(x); // 20

let y = 30;
// let y = 40; // SyntaxError

const z = 50;
// const z = 60; // SyntaxError
3. Block scope

if (true) {
  var name = "Fadel";
  let age = 22;
  const city = "Beirut";
}

console.log(name); // Fadel

// console.log(age);  // ReferenceError
// console.log(city); // ReferenceError
4. Function scope

function showInfo() {
  var name = "Fadel";
  let age = 22;
  const course = "JavaScript";

  console.log(name);
  console.log(age);
  console.log(course);
}

showInfo();

// console.log(name);   // ReferenceError
// console.log(age);    // ReferenceError
// console.log(course); // ReferenceError
5. Hoisting

// var
console.log(a); // undefined
var a = 10;

// let
// console.log(b); // ReferenceError
let b = 20;

// const
// console.log(c); // ReferenceError
const c = 30;
*/
//part 21
const allProducts = document.querySelectorAll(".product");

allProducts[2].setAttribute("data-price", "700");

console.log(allProducts[2].getAttribute("data-price"));
for (let i = 0; i < allProducts.length; i++) {
  allProducts[i].style.backgroundColor = "darkred";
  allProducts[i].style.color = "white";
  allProducts[i].style.padding = "20px";
  allProducts[i].style.margin = "10px";
}

let x;

function openFacebook() {
  x = window.open("https://www.facebook.com", "_blank");
}

function closeFacebook() {
  if (x && !x.closed) {
    x.close();
  } else {
    alert("Facebook window is not open!");
  }
}

function showScreenInfo() {
  Results.innerHTML =
    "Screen Width: " +
    screen.width +
    "px<br>" +
    "Screen Height: " +
    screen.height +
    "px<br>" +
    "Available Width: " +
    screen.availWidth +
    "px<br>" +
    "Available Height: " +
    screen.availHeight +
    "px";
}

//part 25

function goToGoogle() {
  location.assign("https://www.google.com");
}

//solution 2 using location.href
function goToGoogle() {
  location.href = "https://www.google.com";
}

//part 26
let timeoutid;
let intervalid;
let count = 0;
function startTimeout() {
  timeoutid = setTimeout(() => {
    alert("3 seconds have passed!");
  }, 3000);
}
function stopTimeout() {
  clearTimeout(timeoutid);
}
function startCounter() {
  if (intervalid !== undefined) {
    return;
  }
  intervalid = setInterval(() => {
    count++;
    Counter.innerHTML = count;
  }, 1000);
}
function stopCounter() {
  clearInterval(intervalid);
}
//part 27

function loadPosts() {
  let xhr = new XMLHttpRequest();

  xhr.open("GET", "https://jsonplaceholder.typicode.com/posts", true);

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        let posts = JSON.parse(xhr.responseText);

        Results.innerHTML = "";

        posts.slice(0, 5).forEach((item) => {
          Results.innerHTML +=
            "<h3>Post ID: " +
            item.id +
            "</h3>" +
            "<h4>Title: " +
            item.title +
            "</h4>" +
            "<p>" +
            item.body +
            "</p><hr>";
        });
      } else if (xhr.status === 404) {
        Results.innerHTML = "Error 404: Posts not found.";
      } else if (xhr.status === 500) {
        Results.innerHTML = "Error 500: Server error.";
      } else {
        Results.innerHTML = "Request failed. Status: " + xhr.status;
      }
    }
  };

  xhr.onerror = function () {
    Results.innerHTML = "Network error occurred.";
  };

  xhr.send();
}
//part 28

function checkJSON() {
  let data = '{"name":"Fadel","age":22}';

  try {
    let student = JSON.parse(data);
    console.log(student);
  } catch (error) {
    Results.innerHTML = "Invalid JSON: " + error.message;
  }
}

checkJSON();

//bonus:
function filterProducts(category) {
  let filteredProducts = products.filter((item) => {
    return item.category.toLowerCase() === category.toLowerCase();
  });

  Results.innerHTML = "";

  if (filteredProducts.length === 0) {
    Results.innerHTML = "No products found in this category.";
    return;
  }

  filteredProducts.forEach((item) => {
    Results.innerHTML +=
      "Product Name: " +
      item.name +
      "<br>Price: " +
      item.price +
      " $" +
      "<br>Category: " +
      item.category +
      "<br><hr>";
  });
}
