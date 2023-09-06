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


// fun.apply(user2, ["maha", "india"])


// bind
let h = fun.bind(user2, "maha", "india")
console.log(h());