function a() {
    var counter = 0;

    return function f() {
        counter++;
        console.log(counter);
    }

}
var c = a();
c();