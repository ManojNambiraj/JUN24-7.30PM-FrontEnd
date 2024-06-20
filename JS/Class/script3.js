// 1. Normal Function:

// function foo() {
//     alert("hi")
// }

// 2. Ananymous Function:

// let funs = function() {
//     alert("hello")
// }

// funs()

// 3. Arrow Function:

// let arr = () => {
//     alert("Hi i am arrow")
// }

// arr()

// 4. IIFE Function -> (Immediatly invoked function expression)

// (() => {
//     alert("hi")
// })()

// function Mul(a, b, n) {
//     console.log(a * b, n);
// }

// Mul(50, 5)
// Mul(10, 2, "hello")

// DRY -> Don't repeat your code

// Banking app

var balance = 1000;

function Banking(amt) {
    balance += amt

    console.log(balance);
}

function withDraw(amt) {
    balance -= amt

    console.log(balance);
}