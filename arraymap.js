// polyfill for Array.map

Array.prototype.map = function(fn) {
    var result = [];
    for (var i = 0; i < this.length; i++) {
        result.push(fn(this[i], i, this)); // we needs to do this[i] because we are calling the function on the array
        // passing the current element of the array as the first argument to context of the array

    }
    return result;
}

console.log([1, 2, 3].map(function(x) { return x * 2; })); // [2, 4, 6]