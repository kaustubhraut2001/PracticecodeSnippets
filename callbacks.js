// // why we use call back function ?

// //Callback functions are commonly used in programming for a variety of purposes. They are a powerful tool for managing asynchronous operations, event handling, and enhancing the flexibility and modularity of code. Here are some reasons why callback functions are used:

// Asynchronous Operations: Callback functions are essential when dealing with asynchronous tasks such as file I/O, network requests, or database queries. Instead of blocking the program's execution until the operation completes, you can pass a callback function to be executed once the operation finishes. This allows your program to remain responsive and continue executing other tasks in the meantime.

// Event Handling: Callback functions are often used to respond to events in graphical user interfaces, web applications, and other event-driven systems. When an event occurs (e.g., a button click or a mouse movement), the associated callback function is called to handle the event and perform the necessary actions.

// Modular Code: Callbacks promote code modularity and reusability. You can define a generic function or module that accepts callback functions as arguments, allowing different behaviors to be plugged in based on the specific context or use case. This promotes the "separation of concerns" principle, making your code more maintainable and flexible.

// Error Handling: Callbacks are commonly used for error handling. By passing an error callback along with the success callback, you can handle errors gracefully when an operation fails, providing meaningful feedback to users or taking appropriate actions.

// Customization and Configuration: Callbacks allow users or developers to customize the behavior of a library or framework. By providing callback hooks, you enable users to extend or override certain functionalities to meet their specific needs.

// Promises and Asynchronous Control Flow: In modern JavaScript, Promises and async/await are often used for managing asynchronous operations. Callbacks can still be used within Promise-based or async/await code to handle results or errors at the end of asynchronous tasks, making them a crucial part of asynchronous control flow.

// Event-driven Programming: In event-driven programming paradigms, like Node.js, callbacks are central. They allow you to define how your application responds to various events, such as incoming HTTP requests, file changes, or socket connections.

// Sequential Operations: Callbacks can be used to ensure that multiple asynchronous operations are executed sequentially in a specific order, which is useful when one operation depends on the result of another.

// Cross-platform Compatibility: Callbacks can be used to handle different execution contexts or platforms. For example, the same callback can be used in both a web browser and a server environment, allowing for code reuse.






// promices
// promices has an three states
// pending fullfilled , rejected

// initially promice is always in pending state and then it will be in fullfilled state or rejected state

// if the promice is in fullfilled state then we will get the data
// if the promice is in rejected state then we will get the error
// const a = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("success");
//     }, 2000);
// });

// a.then((data) => {
//     console.log(data);
// }).catch((err) => {
//     console.log(err);
// });

// let obj1 = [
//     { name: "kaus", age: 23 },
//     { name: "sai", age: 24 },
// ];

// let obj2 = [
//     { name: "ahs", age: 24 },
//     { name: "kklaoj", age: 23 }
// ];

// function f(obj1) {
//     setTimeout(() => {
//         obj1.forEach((element) => {
//             document.getElementById("demo").innerHTML += `<h1>${element.name}</h1>`;
//             // console.log(element.name);
//         });

//     }, 4000)

// }
// f(obj1);

// function f1(obj2, f) {

//     return (new Promise((resolve, reject) => {

//         setTimeout(() => {
//             obj2.forEach((element) => {
//                 document.getElementById("demo").innerHTML += `<h1>${element.name}</h1>`;
//                 f(obj1);
//             });

//         }, 2000)
//     }));
// }
// f1(obj2);
// f1(obj2, f).then((data) => {
//     console.log(data);
// }).catch((err) => {
//     console.log(err);
// });
// promices in js


// async and await

async function foo() {
    await setTimeout(() => {
        console.log("hello");
    }, 2000)
}

console.log(foo().then((data) => { console.log(data) }).catch((err) => { console.log(err) }));

console.log("hi");