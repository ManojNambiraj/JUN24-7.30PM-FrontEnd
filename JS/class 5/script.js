// call

// const person = {
//     fullName: function(){
//         return this.firstName + " " + this.lastName
//     }
// }

// const person1 = {
//     firstName: "John",
//     lastName: "Wick",
// }

// const person2 = {
//     firstName: "siva",
//     lastName: "kumar",
// }

// console.log(person.fullName.call(person1));

// apply

// const person = {
//   fullName: function (state, country) {
//     return this.firstName + " " + this.lastName + "," + state + "," + country;
//   },
// };

// const person1 = {
//   firstName: "John",
//   lastName: "Wick",
// };

// console.log(person.fullName.apply(person1, ["TN", "INDIA"]));

setTimeout(() => {
  console.log("hi");
}, 5000);

// setInterval(() => {
//   console.log("hello");
// }, 3000);

// Callback

// function display(result) {
//   console.log("Answer: ", result);
// }

// function sum(a, b, display) {
//   let result = a + b;

//   display(result);
// }

// function MUL(x, y, display) {
//     let res = x * y;

//     display(res)
// }

// sum(10, 5, display);

// MUL(2, 3, display)

// Promise

// Async await

// async function display(){
//     const myPromise = new Promise(function(myresolve, myReject) {
//         let x = 10;

//         if(x == 0){
//             myresolve("Okay")
//         }else{
//             myReject("Error")
//         }
//     })

//     await myPromise
//         .then((data) => {
//             console.log(data);
//         })
//         .catch((err) => {
//             console.log(err);
//         })
// }

// display()
