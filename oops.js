//Objects

let onj = {
    name: "kaustbh",
    getname: function() {
        console.log(this.name);
    }
}

//Prototypes

function name() {
    console.log("bkjbk");
}

Function.prototype.myname = function() {
    console.log(this);
}

const name1 = new name();
name1.myname();


//Constructor Functions:

function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.getDetails = function() {
    console.log(this.name, this.age);
}

let person1 = new Person("kaustubh", 25);
person1.getDetails();


//Prototypal Inheritance:



function Employee() {
    this.name = name
}

Employee.prototype.getname = function() {
    console.log(this.name);
}

function Manager(name, department) {
    this.name = name;
    this.department = department;
    Employee.call(this, name);
}

Manager.prototype = Object.create(Employee.prototype);
Manager.prototype.constructor = Manager;


//Encapsolation

const incapsolate = (function() {
        let count = 0;

        function incrimentcount() {
            return this.count++;
        }

        function decriment() {
            return this.count--;
        }
        return {
            incrimentcount,
            decriment
        }

    }

)()

incapsolate.incrimentcount();


//polymorphisum

function Animal() {
    return "Animal";
}

function cat() {}

function dog() {}

Animal.prototype.sound = function() {
    console.log("Animal sound");
}

cat.prototype = Object.create(Animal.prototype);
cat.prototype.constructor = cat;


function makesount() {

}