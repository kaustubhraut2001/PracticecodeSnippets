let aa = 1;

const mul = (n) => {

    for (let i = 1; i <= n; i++) {
        aa = aa * i;
    }
    return aa;

}

const memeo = (fn) => {
    let cache = {};
    return (...args) => {
        let n = args[0];
        if (n in cache) {
            console.log("Fetching from cache", n);
            console.log(cache);
            return cache[n];
        } else {
            console.log("Calculating result", n);
            let result = fn(n);
            cache[n] = result;
            console.log(cache);
            return result;
        }
    }
}

// console.time();
// const fact = memeo(mul);
// console.log(fact(5));
// console.timeEnd();


function memoize(fn) {
    const cache = new Map(); // Use a Map to store cached results

    return function(...args) {
        const key = JSON.stringify(args); // Convert function arguments to a unique string key
        if (cache.has(key)) {
            // If the result is already cached, return it
            return cache.get(key);
        } else {
            // Otherwise, compute the result using the original function
            const result = fn(...args);
            // Cache the result for future use
            cache.set(key, result);
            return result;
        }
    };
}

// Example usage:

// Define a function to be memoized
function expensiveOperation(n) {
    console.log(`Computing expensiveOperation(${n})`);
    return n * 2;
}

// Memoize the function
const memoizedExpensiveOperation = memoize(expensiveOperation);

// Use the memoized function
console.log(memoizedExpensiveOperation(5)); // Output: Computing expensiveOperation(5) followed by 10
console.log(memoizedExpensiveOperation(5)); // Output: 10 (result is cached)
console.log(memoizedExpensiveOperation(10)); // Output: Computing expensiveOperation(10) followed by 20
console.log(memoizedExpensiveOperation(10)); // Output: 20 (result is cached)