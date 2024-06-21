// Pattern Example

// for(let i = 1; i <= 5; i++){
//     let str = '';

//     for(let j = 1; j <= i; j++){
//         str += '*' + ' ';
//     }

//     console.log(str);
// }

let arr = [5, 3, 7, 8, 10, 99, 87, 55, 64];

// Map

// let result = arr.map((item) => {
//    return item * 2
// })

// console.log(result);

// forEach

// arr.forEach((item) => {
//     console.log(item);
// })


// for....in

// for(let i in arr){
//     console.log(arr[i]);
// }

// // for...of

// for(let item of arr){
//     console.log(item);
// }

// Class

class Car{
    constructor(name, model){
        this.name = name;
        this.model = model;
    }
}

let myCar = new Car("Volvo", 2015);
let maniCar = new Car("Benz", 2020);
let RaviCar = new Car("Benz", 2020);
let selvaCar = new Car("Benz", 2020);
let kaviCar = new Car("Benz", 2020);

console.log(myCar);
console.log(maniCar);
console.log(RaviCar);
console.log(selvaCar);
console.log(kaviCar);