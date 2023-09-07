// // to void the unwanted function call we use debouncing
// // like seach bar , screeen resizing, scroll
// let c = 0;

// function getdata() {
//     console.log("Fetching Data..." + c++);

// }

// const betterone = debounce(getdata, 1000);

// function debounce(fn, delay) {

//     let timer;

//     return function(...args) {
//         if (timer) {
//             clearTimeout(timer);
//         }
//         setTimeout(() => {
//             console.log("debounce");
//             fn();




//         }, delay)
//     }

// }


function getdata() {
    console.log("Fetching Data...");

}

const betterone = throttle(getdata, 1000);

function throttle(fn, delay) {

    let timer;

    //
    return function(...args) {
        if (timer) {
            clearTimeout(timer);

        }
        setTimeout(() => {
            console.log("throttle");
            fn();
            console.log(args);

        }, delay)
    }
};