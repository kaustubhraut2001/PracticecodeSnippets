// call

let user = {
    firstName: "John",
    age: 30,
    printName: function() {
        console.log(this.firstName + " " + this.age);
    }
}

// user.printName();

let fun = function(state, countary) {
    console.log(this.firstName + " " + this.age + " " + state + " " + countary);
}


let user2 = {
        firstName: "jio",
        age: 67,

    }
    // function  borrowing
    // user.printName.call(user2); // jio 67

// fun.call(user2); // jio 67

// differance between call and apply
// call takes arguments as comma seperated values
// apply takes arguments as array

// we can pass arguments as an array list instdae of passong it one by one


// custom bind own bind implemetation

function mybind(fn, thisobj, ...args) {

    const fdd = function() {
        return fn.apply(thisobj, args);
    }
    return fdd;

}
// console.log(mybind(fun, user2, "maha", "india")());


// own call implemtation in js

// function call(fn, thisobj, ...args) {
//     if (fn !== 'function') {
//         throw new TypeError('not a function');

//     }
//     if (args === undefine) {
//         args = [];

//     } else if (typeof args !== 'array') {
//         throw new TypeError('arguments should be array');

//     }
//     const d = fn.apply(thisobj, args);

//     return d;


// }

// console.log(call(fun, user2, "maha", "india"));

function call(func, thisArg, args) {
    if (typeof func !== "function") {
        throw new TypeError("func must be a function");
    }

    if (args === undefined) {
        args = [];
    } else if (typeof args !== "array") {
        throw new TypeError("args must be an array");
    }

    const boundFunc = function() {
        return func.apply(thisArg, args);
    };

    return boundFunc;
}

// console.log(call(fun, user2, ["maha", "india"]));



// fun.apply(user2, ["maha", "india"])


// bind
// let h = fun.bind(user2, "maha", "india")
// console.log(h());

// custom apply
function apply(func, thisArg, ...args) {
    if (typeof func !== "function") {
        throw new TypeError("func must be a function");
    }

    if (args === undefined) {
        args = [];
    } else if (typeof args !== "array") {
        throw new TypeError("args must be an array");
    }

    const newArgs = args.slice();
    newArgs.unshift(thisArg);

    return func.apply(null, newArgs);
}

console.log(apply(fun, user2, ["maha", "india"]));