// event bubbling in js

// child to parent


// var a = document.querySelector("div");
// var b = document.querySelector("button");
// a.addEventListener("click", (e) => {
//     console.log("div");
//     // e.stopPropagation();

// });

// b.addEventListener("click", (e) => {
//     console.log("button");
//     // e.stopPropagation();

// })





// evenet capturing

// var a = document.querySelector("div");
// var b = document.querySelector("button");
// a.addEventListener("click", (e) => {
//     console.log("div");
//     // e.stopPropagation();

// }, true);

// b.addEventListener("click", (e) => {
//     console.log("button");
//     // e.stopPropagation();

// }, true);

// now it will work from parent to child





// stop propogation


// var a = document.querySelector("div");
// var b = document.querySelector("button");
// a.addEventListener("click", (e) => {
//     console.log("div");
//     e.stopPropagation();

// }, true);

// b.addEventListener("click", (e) => {
//     console.log("button");
//     // e.stopPropagation();

// }, true);


// immediatete propogation


var a = document.querySelector("div");
var b = document.querySelector("button");
// a.addEventListener("click", (e) => {
//     console.log("div");
//     e.stopPropagation();

// });

// b.addEventListener("click", (e) => {
//     console.log("button");
//     // e.stopPropagation();
//     // e.stopImmediatePropagation();

// });

// b.addEventListener("click", (e) => {
//     console.log("button1");
//     // e.stopPropagation();
//     e.stopImmediatePropagation();
// })


// stopImmediatePropagation() will stop the propogation of the event and also it will stop the execution of the event listners




/// prevent default

let g = document.querySelector("a");
g.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("hello");
});