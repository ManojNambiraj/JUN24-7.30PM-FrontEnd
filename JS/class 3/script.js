// Conditional Statements:

// 1. if stmt
// 2. if... else
// 3. if...else...if (ladder if)
// 4. switch case stmt

// let age = "hi";

// let result = (age >= 18)

// console.log(result);

// if(age >= 18){
//     console.log("Eligible");
// }else if(age < 18){
//     console.error("Not eligible");
// }else{
//     console.warn("Something went wrong");
// }

// let day = 99;

// switch(day){
//     case "Monday":
//         console.log("Its Monday");
//         break;
//     case "Tuesday":
//         console.log("Its Tuesday");
//         break;
//     case "Wednesday":
//         console.log("Its Wednesday");
//         break;
//     case "Thursday":
//         console.log("Its Thursday");
//         break;
//     case "Friday":
//         console.log("Its Friday");
//         break;
//     case 99:
//         console.log("Its Saturday");
//         break;
//     default:
//         console.log-("Happy Weekend");
//         break;
// }

// Looping Statements:

// For loop

// for (let i = 0; i <= 5; i++) {
//   console.log(i);
// }

// console.log("-----------------------");

// for(let i = 5; i >= 0; i--){
//     console.log(i);
// }

// while loop

// let i = 10;

// while (i < 10) {
//   console.log(i);
//   i++;
// }

// do...while

// let i = 10;

// do {
//   console.log(i);
//   i++;
// } while (i < 10);

// Array with looping

// let arr = [2, 10, 5, 70, 89, 90, 34, 55];

// console.log(arr);

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// MRF - Map, Filter, Reduce

let arr = [2, 10, 5, 70, 89, 90, 34, 55];

// let ans = arr.map((ele) => {
//     return ele * 2
// })

// console.log(ans);

// let result = arr.filter((item) => item % 2 == 0)

// console.log(result);


let result = arr.reduce((acc, curr) => (acc + curr) / arr.length * 100)

console.log(result);