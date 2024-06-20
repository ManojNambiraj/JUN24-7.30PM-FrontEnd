// Datatypes:

// 1. Number
// 2. String
// 3. Boolean
// 4. Undefined
// 5. null
// 6. Nan

// let a = null;

// console.log(typeof a, a);

// ES -> Ecma script

// Variable declaration: (Hoisting)

// 1. Var -> ES5

// ES5

// 2. Let
// 3. Const

// var a = 20;

// var a = 10;

// console.log(a);

// let b = 10;

// b = 5;

// console.log(b);

// const c = 500;

// c = 200;

// console.log(c);

// Scope:

// 1. Global Scope -> var
// 2. Local Scope -> let, const

// {
//   var a = 30;
//   console.log("inside: ", a);
//   {
//     {
//       {
//         console.log("middle: ", a);
//       }
//     }
//   }
// }

// console.log("Outside: ", a);

// {
//   var a = 30;
//   console.log("inside: ", a);
//   {
//     {
//       {
//         console.log("middle: ", a);
//       }
//     }
//   }
// }


// console.log("Outside: ", a);

// Operators:

// 1. Arimetic operator
    // +, -, *, /, %, **, ++, --

    // let a = 10;
    // let b = 5;

    // const ans = a + b;
    // const ans = a - b;
    // const ans = a * b;
    // const ans = a / b;
    // const ans = a % b;
    // const ans = a ** b;
    // const ans = ++a;
    // const ans = --a;
    

    // console.log(ans);


// 2. Assignment operator

    // =, +=, -=, *=, /=, %=

    // let a = 10;

    // a += 5;     // a = a + 5;
    // a -= 5;     // a = a + 5;
    // a *= 5;     // a = a + 5;
    // a /= 5;     // a = a + 5;
    // a %= 5;     // a = a + 5;

    // console.log(a);

// 3. Comparison operator -> Boolean

    // ==, ===, >, <, >=, <=, !=, !==

    // let a = "7";

    // const ans = (a == 10)
    // const ans = (a === 10)
    // const ans = (a >= 10)
    // const ans = (a <= 7)
    // const ans = (a !== 7)

    // console.log(ans);

// 4. Logical operator

    // &&, ||, !

    // let a = 10;

    // const ans = (a == 10) && (a < 5)
    // const ans = (a == 10) || (a < 5)

    // console.log(!ans);

// 5. Bitwise Operator

    // &, |, ~, ^, <<, >>

    // let a = 5;

    // const ans = a & 7;
    // const ans = a | 7;
    // const ans = ~a;
    // const ans = a ^ 7;
    // const ans = a << 2;
    // const ans = a >> 2;


    // console.log(ans);


// 6. Ternary operator

    // let age = 18;

    // const ans = (age >= 18) ? "Eligible for voting" : "Not eligible";

    // console.log(ans);

// 7. Type operator

    // console.log(age , typeof age);