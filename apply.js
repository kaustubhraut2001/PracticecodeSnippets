// what is apply??
// it is just like call it just needs arguments in the from of the Array

var obj = { name: "kaustr" };

function printName(age, city) {
    console.log(this.name + " " + age + " " + city);


}

printName.apply(obj, [23, "bangalore"]);
// we needs to pass the arguments in the form of the array
// apply is used to call a function with a specific context