Array.prototype.filter = function(fn) {
    const output = [];
    this.forEach(element => {

        if (fn(element)) {
            output.push(element);
        }

    });
    return output;

};

console.log([1, 2, 3].filter(function(x) { return x > 2; })); // [2, 3]