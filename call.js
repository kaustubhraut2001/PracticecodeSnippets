// what is call

// call is a method of function
// call is used to call a function
// call is used to call a function with a specific context

var obj = { name: "kaus" };

function printName() {
    console.log(this.name);
}

printName.call(obj);