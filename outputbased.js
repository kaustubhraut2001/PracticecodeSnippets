// var obj = { name: "kaus" };

const { before } = require("cheerio/lib/api/manipulation");

// function printName(age) {
//     console.log(this.name, age);
// }

// // printName.call(obj, 23); // it will call the function and execute it output will be kaus 23

// const a = printName.bind(obj, 23); // it will povide us a function which we will use

// console.log(a); // it will provide us a function which we willl call later and execute it\\const



// const age = 21;

// const obj = {
//     name: "kaus",
//     age: 22,
//     getage: function() {
//         console.log(this.age);
//     }
// };

// var obj2 = { age: 23 };


// // obj.getage(); // it will call the function and execute it output will be 22
// // obj.getage.call(obj2); // it will call the function and execute it output will be 23
// // const a = obj.getage.bind(obj2);
// obj.getage.apply(obj2);
// console.log(a); // it will provide us a function which we willl call later and execute it






// var a = "a";


// setTimeout(() => {
//     var a = "b";

//     const data = {
//         a: "c",
//         getA: function() {
//             console.log(this.a);
//         }
//     }

//     data.getA(); // it will give output as c // it is pointinhg to the data object
//     data.getA.call(this); // it will give output as a it is pointing to the globla object

// });


// const animal = [{
//     name: "dog",
// }, { name: "cat" }];

// function printName(i) {
//     this.print = function() {
//         console.log(i + this.name);
//     }
//     this.print();
// }

// // printName(); // NaN

// for (let i = 0; i < animal.length; i++) {
//     printName.call(animal[i], i);
// }




//Append an array to the new array

// const arr = [1, 2, 3]
// const arr2 = [4, 5, 6];

// arr.push(...arr2);
// console.log(arr); // [1,2,3,4,5,6]

// if we use apply

// then the syntax will before
// arr.push.apply(arr, arr2);
// console.log(arr); // [1,2,3,4,5,6]



// max elemt in the array

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// console.log(Math.max.apply(null, arr)); // 10



// function f() {
//     console.log(this);
// }

// let user = {
//     g: f.bind(null)

// };

// user.g(); // null // it is pointing to the global object
// // it willl return window objext





// bind channing

// function f() {
//     console.log(this.name);
// }

// f = f.bind({ name: "kaus" }).bind({ name: "kaustr" });

// f(); // kaus // it will not change the context of the function

// functionn binding doesnot exixit in the javascript
// it will only retun kaus as output