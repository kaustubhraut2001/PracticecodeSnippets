// let obj = {
//     a: 1,
//     b: {
//         c: 2,
//         d: {
//             e: 3
//         }
//     },
//     f: [1, 2, 33]
// };


// function flattenobject(obj, param) {

//     let result = {};

//     function recursive(obj, param) {

//         for (key in obj) {
//             if (typeof obj[key] === 'object') {
//                 recursive(obj[key], param);

//             } else {
//                 result[param + key] = obj[key];
//             }

//         }


//     }
//     recursive(obj, param);
//     return result;

// }

// console.log(flattenobject(obj, ''));

const obj1 = { a: 20, b: "xyz", c: { d: "test 1" } };
const obj2 = { a: 20, b: "xyz", c: { d: "test 2" } };

//console.log(JSON.stringify(obj1));
//console.log(JSON.stringify(obj2));

function compairobject(obj1, obj2) {

    function recursive(obj1, obj2) {
        for (key in obj1) {
            console.log(obj1[key], obj2[key]);
            if (typeof key === 'object') {
                recursive(obj1[key], obj2[key]);
            } else if (obj1[key] !== obj2[key]) {

                return false;

            }

        }

        return true;

    }
    return recursive(obj1, obj2);

}
//console.log(compairobject(obj1, obj2));

function compaire2(obj1, obj2) {
    //return JSON.stringify(obj1) === JSON.stringify(obj2);
    function recursive(obj1, obj2) {
        for (key in obj1) {
            if (typeof obj1[key] === 'object') {
                if (!recursive(obj1[key], obj2[key])) {
                    return false;
                }
            } else if (obj1[key] !== obj2[key]) {
                return false;
            }
        }
        return true;
    }
    return recursive(obj1, obj2);
}
//console.log(compaire2(obj1, obj2));

function compaire3(obj1, obj2) {
    let result = true;

    function recursive(obj1, obj2) {
        for (key in obj1) {
            if (typeof obj1[key] === 'object') {
                recursive(obj1[key], obj2[key]);
            } else if (obj1[key] !== obj2[key]) {
                result = false;
            }
        }
        return result;
    }

    return recursive(obj1, obj2);
}

//console.log(compaire3(obj1, obj2));

const arr = [1, 2, [4, 2, 6, [7, 8, 9, [10, 11, 12]]]];

function flattenarray(arr) {
    let result = [];

    function recursive(arr) {
        arr.forEach(element => {
            if (Array.isArray(element)) {
                recursive(element);

            } else {
                result.push(element);
            }

        });


    }
    recursive(arr);
    return result;
}
//console.log(flattenarray(arr))

function flattenarray2(arr) {
    let result = [];

    function recursive(arr) {
        arr.forEach(element => {
            if (Array.isArray(element)) {
                recursive(element);
            } else {
                result.push(element);
            }
        });
    }
    recursive(arr);
    return result;
}
//console.log(flattenarray2(arr));

//call polyfill
Function.prototype.mypolyfill = function(context, ...args) {
    if (typeof context !== 'object') {
        args.unshift(context); // Shift the arguments to the left if context is not provided
        context = {}; // Set context to an empty object
    }

    let fn = this; // Save the original function

    return function(...args2) {
        if (typeof fn !== 'function') {
            throw new Error("Function not provided");
        }

        context.fn = fn; // Assign the original function to context.fn
        context.fn(...args, ...args2); // Call the function with context and provided arguments
    };
};

let obj = {
    a: "asdasd",
    greet: function(name) {
        console.log(this.a, name);
    }
};

let myGreet = obj.greet.mypolyfill(obj, "sandeep");
//myGreet(); // Call the new function with the provided context and arguments


// debounce function
function debounce(fn, delay) {

    let timer;

    return function(...args) {
        clearTimeout(timer);
        let context = this;
        timer = setTimeout(() => {

            fn.apply(context, args);

        }, delay)
    }

}

function dummy() {
    console.log('debounce function');

}

//console.log(debounce(dummy, 3000));

function throttle(fn, delay) {
    let timer;

    return function(...args) {
        if (!timer) {
            let context = this;

            fn.apply(context, args);

            timer = setTimeout(() => {
                timer = null;
            }, delay)


        }


    }

}

function dummy2() {
    console.log('throttle function');
}

//console.log(throttle(dummy2, 3000));