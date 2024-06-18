// Types fo functions

// 1. In-built functions

// console.log("hello");

// alert("hi");

// a = 10;

// console.log(typeof a);

// Datatypes:

// number -> 10, numerical
// String -> ""
// Boolean -> true , false

// Hoisting

// Var -> ES5 (Ecma script 5)

// var a = "hello";

// var a = 50;

// console.log(a);

// let, const -> (ES6)

// let b = 30;

// b = 500;

// console.log(b);

// const c = 10;

// console.log(c);

// Global scope

// var

// var a = 50;

// {
//     console.log(a);
// }

// console.log(a);
// Local scope

// Let, const

// {
//     let b = 10;

//     console.log(b);
// }

// console.log(b);

// {
//     {

//         const c = 10;
//         {
//             {
//                 {
//                     console.log(c);
//                 }
//             }
//         }
//     }

//     console.log(c);
// }

// console.log(c);

// JS Operators

// Types of JavaScript Operators

// Arithmetic Operators

// +, -, *, /, %, ++, --, **

// let a = 9;
// let b = 5;

// let answer;

// answer = a ** b;

// console.log(answer);

// Assignment Operators

// =, +=, -=, *=, /=

// var a = 10;

// a += 5;     // a = a + 5;

// console.log(a);

// Comparison Operators -> return a boolean value

//  ==, ===, >, <, >=, <=, !=, !==

// var a = "5";

// var answer;

// answer = (a !== 5);

// console.log(answer)

// Logical Operators

// &&

// let a = 10;

// let answer = (a > 5) && (a == 10) ;

// console.log(answer);

// ||

// let a = 10;

// let answer = (a < 5) || (a == 10) ;

// console.log(answer);

// !

// let a = 10;

// let answer;

// answer = (a < 5) || (a == 10);

// console.log(!answer);

// Bitwise Operators

// &

// let x = 5;

// let result = x & 7;

// console.log(result);

// |

// let x = 5;

// let result = x | 7;

// console.log(result);

// ~
// let y = 5

// console.log(~y);

//  ^

// let x = 7;

// let result = x ^ 5;

// console.log(result);

// <<

// let x = 8;

// let result = x << 3;

// console.log(result);

// >>

// let x = 8;

// let result = x >> 2;

// console.log(result);

// Ternary Operators

// const res = (10 == 5) ? "Yes it's true" : "No";

// console.log(res);

// Type Operators

    let a = 10;

    document.getElementById("demo").innerText = a
