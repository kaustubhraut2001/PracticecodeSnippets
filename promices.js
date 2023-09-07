let a = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("hello world");
    }, 2000);




});

a.then((data) => {
    console.log(data);
}).catch((err) => {
    console.log(err);
});