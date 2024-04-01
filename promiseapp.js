const dummy = (data) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(data);
        }, data);

    })
};

const promisearray = [dummy(1000), dummy(2000), dummy(3000), dummy(4000), dummy(5000)];


// own promise.app implementaion

const promiseallpolyfill = (promisearray) => {
    // we needs to iterate on this array and needs to also retun this arry as promiss.all return us the response in the arry only
    return new Promise((resolve, reject) => {
        promisearray.forEach((promise, index) => {
            const outputarray = [];

            promise.then((data) => {
                outputarray[index] = data;

                if (index == promisearray.length - 1) {
                    resolve(outputarray);
                }
            }).catch((error) => {
                reject(error);
            });
        });
    });
};

promiseallpolyfill(promisearray).then((data) => {
    console.log(data);
});