// what is bind?
// bind is a method on the function prototype
// bind is used to bind a function to a context

var obj = { name: "kaus" };

function printName(age, city) {
    console.log(this.name + " " + age + " " + city);
}

// bind provides us an another function which we call afgter words and exexute it

var printMyName = printName.bind(obj, 23, "bangalore");
console.log(printMyName); // it will provide us a function which we willl call later and execute it