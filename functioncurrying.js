function f() {
    console.log("a");

    return function g() {
        console.log("b");
    }
}
f()()