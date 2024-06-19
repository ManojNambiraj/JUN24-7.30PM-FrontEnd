// Functions

// 1. Normal function

// function foo(){
//     console.log("hello");
// }

// foo()

// 2. Ananymous function - (Unnamed)

// const arr = function(){
//     console.log("Its ananymous");
// }

// arr()

// 3. Arrow function

// const arr = () => console.log("Its arrow");

// arr()

// 4. IIFE Function - (Immediatly Invoked function Expression)

// (() => {
//     console.log("Its IIFE");
// })()

// DRY -> Dont repeat yourself (code)


// let ans = Mul(500, 10, "hello")

// console.log(ans);


// function Mul(a, b, n){
    
//     console.log(n);

//     return a * b;
    
// }



// function Add(a, b) {
//     return a + b;
// }

// const Add = (a, b) => a + b;

// console.log(Add(10, 5));
// console.log(Add(2, 50));
// console.log(Add(2, 50));
// console.log(Add(2, 50));
// console.log(Add(2, 50));
// console.log(Add(2, 50));
// console.log(Add(2, 50));

// Banking App

// let BankBalance = 1000;

// let Deposite = (amt) => {
//     BankBalance += amt;

//     console.log(BankBalance);
// }

// const WidthDraw = (amt) => {
//     BankBalance -= amt;

//     console.log(BankBalance);
// }

// Destructuring - (Unpacking)

// Array destructure

let fruits = ["banana", "kiwi", "grapes", "Orange", "apple"];

// fruits[3] = "watermelon"

// console.log(fruits);
// console.log(fruits[2]);

const [b, k, g, O, a] = fruits;

// console.log(g);
// console.log(a);


// Object Destructure

const student1 = {
    name: "Siva",
    age: 25,
    mobile: 9876543211,
    address: {
        dno: 50,
        street: "xyz",
        landmark: "abc"
    }
}

const {name, age} = student1;

console.log(name);