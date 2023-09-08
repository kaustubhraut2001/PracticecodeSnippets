//throteling in js
// why we use throteling

// function getdata() {
//     console.log("fetching data");
// }

// // suppose we wnats to store the data to the data base but we dont want to store the data every time we get the data
// // we want to store the data after 5 sec
// // on evehry key submit

// const mythortel = function(fn, delay) {

//     return function() {
//         document.getElementById("btn").disabled = true;
//         setTimeout(() => {

//             fn();
//         }, delay);
//     }
// };

// const betterFunction = mythortel(() => {
//     document.getElementById("btn").disabled = false;
// }, 4000);
const mythortel = (fn, delay) => {

    return function() {
        document.getElementById("btn").disabled = true;
        setTimeout(() => {

            fn();
        }, delay)
    }
}


const getdata = mythortel(() => {
    document.getElementById("btn").disabled = false;
    console.log("fetching data");
}, 3000)