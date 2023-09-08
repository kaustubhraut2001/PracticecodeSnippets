// inheritance in javascript

// let obj = {
//     name: 'protod',
//     age: 18,
//     sayname: function() {
//         console.log(this.name);
//     },

//     getroll: function() {
//         console.log(this.role);
//     }
// };

// let obj2 = {
//     role: 'admin',
//     name: "kaustubh",
//     __proto__: obj
// }

// let obj3 = {
//     __proto__: obj2
// }

// // console.log(obj3); // kaustubh

// console.log(obj3.age);

// // console.log(obj2.name); // proto
// console.log(obj2.sayname()); // 18
// console.log(obj2.getroll()); // admin

// let a = new WeakSet();
// console.log(a);
// a.add(1);
// console.log(a);
// a.add(2);
// a.has(1);

// Object.prototype.sayname = function(name) {
//     console.log(name);
// }

// let obj = {
//     name: 'kaustubh'
// }

// // obj.sayname('kaustubh'); // kaustubh

// let a = new Object();
// console.log(a);

// console.log(a.hasOwnProperty('sayname'));


// conveting array to object

Array.prototype.toObject = function() {
    let obj = {};

    this.forEach((item, index) => {
        obj[index] = item;
    })
    return obj;
};

let arr = [1, 2, 3, 4, 5];
console.log(arr.toObject());