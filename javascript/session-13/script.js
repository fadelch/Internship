// var input_one = document.querySelector("#inpu1");
// var btn_one = document.querySelector("#btn-one");
// input_one.onkeydown = function () {
//   console.log("key down");
// }; //this is an event

// input_one.onkeypress = function () {
//   console.log("key press");
// };

// window.onload = function () {
//   alert("page loaded successfully");
// }; this will apear when the web page is fully loaded
// btn_one.onclick = function () {
//   alert("hello");
// };
// btn_one.addEventListener("click",function(){

// });
// var y = [20, 100, 80, 70, 150];
// var z = y.filter(function (item) {
//   return item >= 100;
// });
// console.log(z);
// var x = {
//   name: "fadel",
//   age: 123,
//   code: function () {
//     console.log("my name is my" + this.name);
//     console.log("my age is " + this.age);
//   },
// };
// //this.name => this hiye el x.name
// x.code();
//Ajax /XPLHTTPREQUEST:
//BROWSER --> request-->server
//server-->response-->Browser

//Htp
//XMLHttpRequest request and response
// 0_4_0_request,1_open lal request_2headers received_3_response,4_response done readystate==4 status = 200 this mean done in case not done the readystate != 4 and the status !=200 not done 403 forbiden not found server error500

var results = document.querySelector("#results");
function data() {
  //   var x = new XMLHttpRequest(); // 3mlna object el x object la n2dar njib el data
  //   x.onreadystatechange = function () {
  //     //btchte8el be kell event 3na ye kell ma tet8yr mar7alet el request hiye btcht8l byneton
  //     if (x.readyState == 4 && x.status == 200) {
  //       results.innerHTML = x.responseText; // aS JASON
  //     }
  //   };
  //   x.open("GET", "https://jsonplaceholder.typicode.com/posts", true); // (to get a data we use the open function that have the method get,post,delete and the api and the value true)
  //   //we have a method that send called send to send data
  //   x.send(); // ha yetb3alna yeha

  var x = new XMLHttpRequest();
  x.onreadystatechange = function () {
    if (x.readyState == 4 && x.status == 200) {
      var y = JSON.parse(x.responseText);
      y.forEach((item) => {
        results.innerHTML +=
          "<h3>" + item.title + "</h3>" + "<p>" + item.body + "</p>";
      });
    }
  };
  x.open("GET", "https://jsonplaceholder.typicode.com/posts", true);
  x.send();
}
//json{"name":"fadel"} // el key double ""

// el json yali 3na bde hawlo la object
// var y = '{"name":"fadel"}';
// var z = JSON.parse(y); // el parse be hawele el string la object el stringfy bel 3ks be hawel objcet la string
// console.log(z);
