// example we nneds to do like this
let length = 4;

let sum = (...args) => {
    if (args.length === length) {
        return args.reduce((acc, val) => acc + val, 0);
    } else {
        const recursiveSum = (...args2) => {
            args = args.concat(args2); // concat the new arguments to the existing arguments
            if (args.length === length) {
                return args.reduce((acc, val) => acc + val, 0);
            } else {
                return recursiveSum;
            }
        };
    }
    return recursiveSum;
}


console.log(sum(1)(2)(3)(4));