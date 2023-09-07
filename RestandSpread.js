// Rest operator
// Spread operator

// Rest operator
// 1. Rest parameter must be the last parameter
// 2. Rest parameter must be an array
// 3. Rest parameter must have only one rest parameter in a function

function add(...args) {

    let sum = 0;
    for (let i of args) {
        sum = sum + i;
    }
    return sum;
}

// console.log(add(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

function sum(a, b, c, ...other) {
    console.log(other);
    return a + b + c;
}

// console.log(sum(1, 2, 3, 45, 5));



// spread operator
// 1. spread operator is used to spread the array elements
// 2. spread operator is used to spread the object properties

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function f(...a) {
    console.log(a);

}
// f(...arr);


//rest in objects
// we can destructure the oject properties

let obj = {
    name: "sai",
    age: 23,
    place: "hyd",
    company: "cts"
};

let { name, age, ...other } = obj;
console.log(other); //output is {place: "hyd", company: "cts"}
// we destructured the object properties and stored the remaining properties in the other variable
// this is the example of rest in objects



// spred in objects

let obj1 = {
    ...obj,
    age: 24
}

console.log(obj1); //output is {name: "sai", age: 24, place: "hyd", company: "cts"}

// age is overidden with the new value and the remaining properties are copied to the new object
// this is the example of spread in objects