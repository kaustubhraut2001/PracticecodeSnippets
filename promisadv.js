const p1 = new Promise((resolve, reject) => {
    //
    setTimeout(() => {
        resolve("first");
    }, 3000);



});


const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("second");
    }, 1000);
});


const p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("third");
    }, 5000);
});


const p4 = Promise.any([p1, p2, p3]);

// const res = Promise.all([p1, p2, p3]);

// const res2 = Promise.allSettled([p1, p2, p3]);

// const res3 = Promise.race([p1, p2, p3]);
p4.then((values) => {
    console.log(values);

});